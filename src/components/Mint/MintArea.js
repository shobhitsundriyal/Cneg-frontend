import { useState, useEffect, useContext } from 'react'
import switchIcon from '../../icons/switch.svg'
import switchMirageIcon from '../../icons/switchMirage.svg'
import fireIcon from '../../icons/fireIcon.svg'
import { Transition } from '@tailwindui/react'
import {
	checkMetamaskConnected,
	connectMetamask,
} from '../../functions/connectMetamask'
import walletConnectedContext from '../../contexts/WalletConnectedContext'
import Loader from '../General/Loader'
import { ethers } from 'ethers'
import { contractAddress, contractABI } from '../../Contract/contractDetails'
import IsMintedContext from '../../contexts/IsMintedContext'
import { useRef } from 'react'
import html2canvas from 'html2canvas'

function MintArea() {
	const printRef = useRef()

	const handleDownloadImage = async () => {
		const element = printRef.current
		const canvas = await html2canvas(element)
		// console.log(canvas.current)
		const data = canvas.toDataURL('image/jpg')
		const link = document.createElement('a')

		if (typeof link.download === 'string') {
			link.href = data
			link.download = 'image.jpg'

			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		} else {
			window.open(data)
		}
	}

	const [isConnected, setIsConnected] = useState(false)
	const isWalletConnected = useContext(walletConnectedContext)
	const isMintedContext = useContext(IsMintedContext)

	useEffect(() => {
		// can be done using global state but for this app its fine
		async function checkConnection() {
			let account = await checkMetamaskConnected()
			if (account) {
				setIsConnected(true)
				isWalletConnected.updateState(true)
			}
		}
		checkConnection()
		handleDownloadImage()
	}, [])

	useEffect(() => {
		async function checkIfMinted() {
			try {
				const { ethereum } = window //from metamask
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const connectedContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				)
				const currAddress = await signer.getAddress()
				await connectedContract
					.isMinted(currAddress)
					.then((resp) => isMintedContext.updateState(resp))
			} catch (error) {
				console.log(error, 'error while checking is minted?')
			}
		}

		//
		console.log('walletConnected: ', isWalletConnected.state)
		if (isWalletConnected.state) {
			checkIfMinted()
		}
	}, [isWalletConnected.state])

	const howToMint = () => {
		return (
			<Transition
				// show={!isConnected}
				show={!isWalletConnected.state}
				enter='transition-opacity duration-75'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity duration-150'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
			>
				<div className=' bg-daen_pink rounded-xl pt-4'>
					<div className='text-xl font-rmsBold ml-4'>
						How to Mint?
					</div>
					<div className=' font-light ml-10'>
						<ol style={{ listStyleType: 'number' }}>
							<li>
								Connect you wallet and switch to the Polygon
								Mainnet
							</li>
							<li>
								Select the number of CNEG Genesis NFTs you want
								to Mint ( Cur. 1 Mint per address )
							</li>
							<li>
								Click on mint and pay the total amount + fee of
								the nft
							</li>
						</ol>
					</div>

					{/**button */}
					<button
						className='btn mt-7 w-full font-rmsBold py-4'
						onClick={async () => {
							let connectionMade = await connectMetamask()
							if (connectionMade) {
								setIsConnected(true)
								isWalletConnected.updateState(true)
							}
						}}
					>
						Connect Wallet to Mint
					</button>
				</div>
			</Transition>
		)
	}

	const NumberMint = () => {
		const [number, setNumber] = useState(0)
		const [errorState, setErrorState] = useState(0)
		const [isLoading, setIsLoading] = useState(false)
		const errorStates = {
			noError: 0,
			swithchNetwork: 1,
			transactionRejected: 2,
		}

		async function switchToPolygon() {
			await window.ethereum
				.request({
					method: 'wallet_addEthereumChain',
					params: [
						// {
						// 	chainId: '0x89',
						// 	rpcUrls: ['https://rpc-mainnet.matic.network/'],
						// 	chainName: 'Matic Mainnet',
						// 	nativeCurrency: {
						// 		name: 'MATIC',
						// 		symbol: 'MATIC',
						// 		decimals: 18,
						// 	},
						// 	blockExplorerUrls: ['https://polygonscan.com/'],
						// },
						{
							chainId: '0x13881',
							rpcUrls: [
								'https://matic-mumbai.chainstacklabs.com',
							],
							chainName: 'Polygon Testnet Mumbai',
							nativeCurrency: {
								name: 'MATIC',
								symbol: 'MATIC',
								decimals: 18,
							},
							blockExplorerUrls: [
								'https://mumbai.polygonscan.com/',
							],
						},
					],
				})
				.then(() => {
					setErrorState(errorStates.noError)
				})
		}

		useEffect(() => {
			async function checkChain() {
				try {
					let currentChain = await window.ethereum.request({
						method: 'net_version',
					})
					console.log(currentChain)
					if (currentChain != 80001) {
						//polygon mainnet
						setErrorState(errorStates.swithchNetwork)
					} else {
						setErrorState(errorStates.noError)
					}
				} catch (error) {
					console.log('error while checking chain')
				}
			}
			if (errorState != errorStates.transactionRejected) {
				checkChain()
			}
		}, [errorState]) //after change might be possible user did not switch the network but still change is not instantaneous so need to click one more time :/

		async function mintNFT() {
			try {
				const { ethereum } = window //from metamask
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const connectedContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				)

				setIsLoading(true)
				const toAddress = await signer.getAddress()
				const cost = ethers.utils.parseEther('0.0065')
				const options = { value: cost }
				let url =
					'https://firebasestorage.googleapis.com/v0/b/ji-drive.appspot.com/o/Files%2FWhatsApp%20Image%202022-04-16%20at%207.50.25%20AM.jpeg?alt=media&token=e27ee681-2974-4231-86e8-fae9720c3928'
				let mintTxn = await connectedContract.mintNFT(
					toAddress,
					url,
					options
				)

				console.log('Mining...please wait.')
				await mintTxn.wait()
				if (mintTxn) {
					//update already minted values
					isMintedContext.updateState(true)
					console.log(
						`minted: https://mumbai.polygonscan.com/tx/${mintTxn.hash}`
					)
					setIsLoading(false)
				}
			} catch (error) {
				console.log(error, 'error while minting')
				setIsLoading(false)
				if (error.code === 4001) {
					console.log(error.code)
					setErrorState(errorStates.transactionRejected)
				}
			}
		}

		return (
			<Transition
				// show={isConnected}
				show={isWalletConnected.state}
				enter='transition-opacity duration-75 delay-150'
				enterFrom='opacity-0'
				enterTo='opacity-100'
			>
				<div className='relative'>
					{/** upper part */}
					<div className=' 1016px:text-xl text-base font-rmsBold space-x-2 flex'>
						<button
							className='bg-lavender rounded-xl px-[0.8rem]  flex items-center justify-center'
							onClick={() => setNumber(0)}
						>
							-
						</button>
						<button className='bg-[#F6EFEE] rounded-xl px-3 py-1 flex items-center justify-center cursor-default border-2'>
							{number}
						</button>
						<button
							className='bg-lavender rounded-xl px-3 flex items-center justify-center'
							onClick={() => setNumber(1)}
						>
							+
						</button>
					</div>
					{/** how many minted */}
					<div className=' font-rmsBold 1016px:text-lg text-sm'>
						{0}/100 Minted
					</div>

					{/** checkout */}
					<div
						className={`text-right relative py-3 mt-4 border-t-2 ${
							number ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-300 1016px:py-6 `}
					>
						<span className=' font-rmsBold'>
							13.4 Eth <br />
						</span>
						<span className=' font-thin text-sm'>
							(+Network fee)
						</span>
						<span className='absolute top-[1.5rem] left-0'>
							1 × Cneg Genesis NFT
						</span>
					</div>

					{/**button */}
					{/** fix */}

					{isLoading ? (
						<div className='btnErr w-full font-rmsBold 1016px:py-4 py-2 flex justify-center items-center'>
							<Loader />
							<span className='ml-4 text-mirage'>
								Minting the nft. Please Wait..
							</span>
						</div>
					) : errorState == 0 ? (
						<>
							<button
								className={`btn w-full font-rmsBold 1016px:py-4 py-2 `}
								onClick={() => {
									console.log('minting....')
									mintNFT()
								}}
							>
								Mint NFT
							</button>
							{/** overlay for button if number is zero */}
							<div
								className={`h-[25%] w-full absolute bottom-0 bg-transparent cursor-not-allowed ${
									number && !errorState ? 'hidden' : 'block'
								}`}
							></div>
						</>
					) : errorState == 1 ? (
						<button
							className='btnErr w-full font-rmsBold 1016px:py-4 py-2'
							onClick={switchToPolygon}
						>
							Wrong Network. Switch to Polygon
						</button>
					) : (
						<button
							className='btnErr w-full font-rmsBold 1016px:py-4 py-2'
							onClick={() => setErrorState(errorStates.noError)}
						>
							Transaction rejected by user
						</button>
					)}
				</div>
			</Transition>
		)
	}

	return (
		<div
			className='flex flex-col md:flex-row w-full back'
			style={{ backgroundSize: '100%' }}
		>
			{/**left side */}
			<div className='md:w-[50%] w-full py-5'>
				<div
					className={`bg-lavender w-[87%] aspect-w-5 aspect-h-[5.1] rounded-xl relative mx-auto md:mx-0`}
				>
					{/**cylinder */}
					<div className='h-[20%] w-[90%] bg-gradient-to-l from-[#ECE9F3] to-[#DDDFE5] absolute left-[5%] top-[80%]'></div>
					{/**lid */}
					<div className='h-[5%] w-[6%] rounded-full bg-white absolute left-[5%] top-[77.5%] scale-x-[1503%] origin-left'>
						{/**shadaow */}
						<div className='h-[10%] w-[50%] bg-gradient-to-r from-slate-200 to-slate-50 top-[45%] absolute left-[2%] rounded-xl'></div>
					</div>

					{/**Card */}
					{/* <div className='h-[65%] w-[50%] absolute left-[25%] top-[10%] rounded-xl bg-black '></div> try for bg */}
					<div className='bg-[#E1E3E0] h-[65%] w-[50%] absolute left-[25%] top-[10%] rounded-xl bg-gradient-to-tr '>
						{/** pfp */}
						<div className=' w-[30%] aspect-1 bg-black top-[8%] left-[6%] absolute rounded-full flex'>
							<img
								src='https://media.istockphoto.com/photos/close-of-blue-flower-picture-id177347141?k=20&m=177347141&s=612x612&w=0&h=AxMyktlycSIHfCEYAS5Act2xDLz5jCarSQl9jGJWjYo='
								alt='uh oh'
								className='p-0 aspect-1 object-cover rounded-full'
							/>
						</div>
						{/* * top right gradient
						<div className=' h-[30%] aspect-1 bg-gradient-to-tr to-[#f2f2f2] from-[#E1E3E0] absolute right-0 rounded-bl-full rounded-t-xl'></div> */}
						{/** Nft Info */}
						<div className='h-[20%] mt-[90%]  flex flex-col justify-evenly px-2'>
							<div className=' text-[0.68rem] w-max bg-daen_pink rounded-lg p-1 ml-1'>
								ID: {'001'}
							</div>
							<div className=' text-xl font-rmsBold'>
								1 CNEGATIVE
							</div>
							<div className='text-[.68rem]'>
								~10000 BCT Tokens
							</div>
						</div>
						{/** Bottom */}
						<div className='h-[15%] w-full rounded-b-xl absolute bottom-0 flex'>
							{/**arrow */}
							<div
								ref={printRef}
								className='image h-full aspect-1 bg-mirage rounded-bl-xl'
							>
								<img
									src={switchIcon}
									className=' rotate-45 p-2'
								/>
							</div>
							{/** little info */}
							{/** text fix maybe required */}
							<div className=' text-[0.5rem] flex items-center pl-4 bg-[#E0DEF0] w-full rounded-br-xl md:text-sm sm:text-xs'>
								<span>
									Offsetting{' '}
									<span className=' font-rmsBold'>
										{' '}
										10 Tonnes
									</span>{' '}
									<br /> of Carbon for{' '}
									<span className=' font-rmsBold'>
										10 Years
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/**right side */}
			{isMintedContext.state ? (
				<div className='md:w-[50%] w-full py-5 flex flex-col md:pl-[5%] justify-between'>
					<div className='rounded-lg 1016px:text-6xl text-4xl font-rmsBold leading-[110%] mt-16'>
						{' '}
						You own 1 CNEG Genesis NFT
					</div>

					<div className='rounded-lg 1016px:text-xl text-base font-extralight 1016px:leading-[150%] leading-[100%] py-3 1016px:py-0'>
						Owner Address:{' '}
						<span className=' text-purple-500'>
							{isWalletConnected.walletAddress.slice(0, 10) +
								'....'}
						</span>
					</div>

					{/** 2 box cotainers */}
					<div className=' bg-[#C5B7EE52] h-[4.5rem] md:h-[15%] rounded-xl flex items-center mt-16'>
						{/** image */}
						<div className=' h-full aspect-1 p-5 md:p-6'>
							<img src={fireIcon} />
						</div>
						<div className=' ml-4 space-y-1'>
							<div className='1016px:text-xl text-base font-rmsBold'>
								1000/10000
							</div>
							<div>Carbon credits burnt</div>
						</div>
					</div>

					<div className=' bg-[#C5B7EE52] h-[4.5rem] md:h-[15%] rounded-xl flex items-center mt-5'>
						{/** image */}
						<div className=' h-full aspect-1 p-3 pl-3 md:p-3 md:pl-5 flex'>
							<img
								src={switchMirageIcon}
								className=' rotate-45'
							/>
						</div>
						<div className=' ml-4 space-y-1'>
							<div className='1016px:text-xl text-base font-rmsBold'>
								12 Tonnes
							</div>
							<div>Carbon offset</div>
						</div>
					</div>

					<div className='rounded-lg 1016px:text-xl text-base font-extralight 1016px:leading-[150%] leading-[100%] py-3 1016px:py-0'>
						Smart contract:{' '}
						<a
							href='https://polygonscan.com/'
							target='_blank'
							className=' text-purple-500'
						>
							View on Polyscan
						</a>
					</div>
				</div>
			) : (
				<div className='md:w-[50%] w-full py-5 flex flex-col justify-between md:pl-[5%] md:space-y-0 space-y-5'>
					<div className=' w-max bg-mirage text-white px-3 py-2 rounded-lg text-[0.7rem] 1016px:text-[.8rem]'>
						{' '}
						MINT NOW LIVE
					</div>

					<div className=' w-max rounded-lg 1016px:text-6xl text-4xl font-rmsBold leading-[110%]'>
						{' '}
						1 CNEG Genesis
						<br /> NFT
					</div>

					<div className=' w-max rounded-lg 1016px:text-xl text-base font-rmsBold '>
						Price: 1250 BCT
					</div>

					<div className='rounded-lg 1016px:text-xl text-base font-extralight 1016px:leading-[150%] leading-[100%] py-3 1016px:py-0'>
						1CNEG Genesis NFT helps you burn 1250 BCT tokens valid
						upto 2 years and becom carbon negative
					</div>

					{/** How to Mint / other states */}
					{/* {!isConnected ? howToMint() : numberMint()} */}
					{howToMint()}
					<NumberMint />
				</div>
			)}
		</div>
	)
}

export default MintArea
