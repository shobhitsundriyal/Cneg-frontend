import logoImg from '../../icons/logo.svg'
import {
	connectMetamask,
	checkMetamaskConnected,
} from '../../functions/connectMetamask'
import { useState, useEffect, useContext } from 'react'
import walletConnectedContext from '../../contexts/WalletConnectedContext'

function Header() {
	const [currentAccount, setCurrentAccount] = useState()
	const isWalletConnected = useContext(walletConnectedContext)

	useEffect(() => {
		async function setAccount() {
			let account = await checkMetamaskConnected()
			if (account) {
				setCurrentAccount(account)
				isWalletConnected.updateState(true)
			}
		}
		setAccount()
	}, [isWalletConnected])

	return (
		<div className='flex items-center mt-2 py-3'>
			<div className=' text-base font-semibold'>
				<img src={logoImg} />
			</div>
			{currentAccount ? (
				<div className='justify-self-end ml-auto px-3 py-2 rounded-2xl border-2 border-daen_pink'>
					{currentAccount.slice(0, 4) +
						'...' +
						currentAccount.slice(
							currentAccount.length - 5,
							currentAccount.length - 1
						)}
				</div>
			) : (
				<button
					className=' justify-self-end ml-auto btn font-rmsBold px-3'
					onClick={async () => {
						await connectMetamask().then((connectedAccount) => {
							if (connectedAccount) {
								isWalletConnected.updateState(true)
								setCurrentAccount(connectedAccount)
							}
						})
					}}
				>
					Connect Wallet
				</button>
			)}
		</div>
	)
}

export default Header
