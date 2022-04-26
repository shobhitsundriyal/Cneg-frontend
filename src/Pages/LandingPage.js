import logoWhite from '../icons/LandingPageAssests/logoWhite.svg'
import earth from '../icons/LandingPageAssests/earth.svg'
import sideDoodle from '../icons/LandingPageAssests/sideDoodle.svg'
import sec2group from '../icons/LandingPageAssests/section2mainGroup.svg'
import littleGlobe from '../icons/LandingPageAssests/littleGlobe.svg'
import section4Image from '../icons/LandingPageAssests/section4Image.svg'
import wave1 from '../icons/LandingPageAssests/wave1.svg'
import wave2 from '../icons/LandingPageAssests/wave2.svg'
import lineCloud from '../icons/LandingPageAssests/lineCloud.svg'
import sunSpike from '../icons/LandingPageAssests/sunSpike.svg'
import rotatingEarth from '../icons/LandingPageAssests/rotatingEarth.gif'
import logoOnlyWhite from '../icons/LandingPageAssests/logoOnlyWhiteNobg.png'

import baseCarbon from '../icons/LandingPageAssests/baseCarbon.png'
import StepsBubble from '../components/LandingPage/SetpsBubble'
import solidCloudGroup from '../icons/LandingPageAssests/solidCloudGroup.svg'
import dropping from '../icons/LandingPageAssests/dropping.svg'
import FaqSection from '../components/Mint/FaqSection'
import { CheckCircleIcon } from '@heroicons/react/solid'

function LandingPage() {
	const arr = new Array(50).fill(0)
	const whitePaerLink =
		'https://www.figma.com/proto/ucqPiWfTJecEifVRhTNNyn/C-NEGATIVE?node-id=734%3A273&scaling=min-zoom&page-id=339%3A341'
	return (
		<>
			{/** Section 1 */}
			<div className=' bg-dark_bg -[100vh] mx-auto px-2 text-white font-rms font-semibold relative'>
				<div className='container h-[70%]'>
					{/** header */}
					<div className='flex pt-5 pb-3'>
						<img src={logoWhite} alt='' />
						<button className='btn ml-auto text-mirage font-rmsBold'>
							Coming Soon
						</button>
					</div>
					{/* main Area(hero section ) */}
					<div className=' sm:flex mt-[5%] h-[90%] pb-40'>
						{/** height of hero area */}
						{/* left side */}
						<div className=' flex flex-col w-[50%] justify-around space-y-12 '>
							<div className=' text-7xl font-rmsBold leading-[110%]'>
								These NFTs are going to save the planet{'  '}
								<img
									src={rotatingEarth}
									className='inline h-12'
								/>
							</div>
							<div className=' text-lg'>
								With C-negative, you can buy carbon credits and
								burn them on the blockchain - leaving the world
								with less permitted carbon emissions.
							</div>
							<div className='btn text-mirage font-rmsBold w-max p-3'>
								Coming Soon
							</div>
						</div>
						{/* right side */}
						<div className='  w-[50%] pl-[12%]'>
							<div className='h-[100%] bg-lavender rounded-2xl'></div>
						</div>
					</div>
				</div>

				<img
					src={sideDoodle}
					className='absolute -bottom-1 left-0 w-[14.5vw]'
				/>
				<img
					src={sideDoodle}
					className='absolute -bottom-1 right-0 w-[14.5vw]'
					style={{ transform: 'rotateY(180deg)' }}
				/>
			</div>

			{/** Section 2 */}
			<div className=' mx-auto px-2 font-rms relative text-mirage'>
				<div className='container sm:mt-28 sm:flex'>
					<div className='text-6xl font-rmsBold w-min leading-[110%] mt-10 text-center sm:text-left mx-auto md:w-fit lg:w-min'>
						What is a Cnegative NFT?
						<div className='text-lg leading-[160%] tracking-wider text-center sm:text-left hidden sm:block lg:hidden font-rms mt-20 ml-3'>
							A C-negative NFT allows you to purchase carbon
							credits on the blockchain and destroy them forever -
							meaning, that the world has lesser amount of
							permitted carbon emissions.
						</div>
					</div>
					<div className='w-[90vw] mx-auto my-4 sm:my-0 sm:w-[100vw] sm:aspect-[5/6] lg:ml-10'>
						<img src={sec2group} className=' h-max' />
					</div>

					<div className=' text-lg leading-[160%] mb-12 mt-auto tracking-wider text-center sm:text-left sm:hidden lg:block'>
						A C-negative NFT allows you to purchase carbon credits
						on the blockchain and destroy them forever - meaning,
						that the world has lesser amount of permitted carbon
						emissions.
					</div>
				</div>
				{/** equivalant */}
				<div className='container flex text-5xl justify-between text-white font-rmsBold mt-20 relative'>
					{/** equals */}
					<div className=' border-2 border-white aspect-1 w-8 sm:w-[6%] text-center absolute rounded-full bg-mirage p-2 left-[45.5%] xs:left-[47%] top-[29%] 1016px:top-[25%] flex flex-col items-center justify-evenly py-[1.5%]'>
						<div className='w-[70%] sm:w-[50%] aspect-5 bg-white'></div>
						<div className='w-[70%] sm:w-[50%] aspect-5 bg-white'></div>
					</div>

					<div className='w-[49.5%] bg-mirage flex items-center p-4 px-2 sm:p-6 1016px:p-8 rounded-2xl text-[1.1rem] sm:text-3xl md:text-4xl 1016px:text-5xl'>
						<div className=' bg-lavender p-1 md:p-3 1016px:p-5 rounded-full border-2 border-white h-9 sm:h-14 md:h-16 1016px:h-20 aspect-1'>
							<img src={logoOnlyWhite} />
						</div>
						<div className='ml-2 md:ml-8'>
							1 Cnegative
							<br /> token
						</div>
					</div>

					<div className='w-[49.5%] bg-mirage flex items-center p-4 px-2 sm:p-6 1016px:p-8 rounded-2xl justify-end text-[1.1rem] sm:text-3xl md:text-4xl 1016px:text-5xl	'>
						<div className='mr-2 md:mr-8 text-right'>
							96 Base
							<br /> Carbon Tonne
						</div>
						<div className=' bg-lavender rounded-full h-9 sm:h-14 md:h-16 1016px:h-20 aspect-1'>
							<img src={baseCarbon} className='rounded-full' />
						</div>
					</div>
				</div>
				{/** info */}
				<div className='container'>
					<div className='w-full sm:w-1/2 ml-auto mt-4 sm:mt-8 leading-[160%] text-base px-3 sm:text-lg'>
						*Base Carbon Tonnes (BCT) is a reference token
						representing one tonne of carbon from the Verra Verified
						Carbon Unit (VCU) registry from 2008 or later, bridged
						by the{' '}
						<span className=' text-purple-400 underline'>
							Toucan Protocol.
						</span>
					</div>
				</div>
			</div>

			{/** Setction 3 */}
			{/** absolute things */}
			<div className='relative h-[17vw] overflw-hidden mt-40 sm:mt-80'>
				<img src={wave1} alt='' />
				<img src={wave2} alt='' className=' absolute top-[34%]' />
				<img
					src={lineCloud}
					alt=''
					className=' absolute -top-[25%] left-[5%] w-[17vw]'
				/>
				<img
					src={sunSpike}
					alt=''
					className=' absolute -top-[58%] left-[42%] w-[13vw]'
				/>
				<img
					src={lineCloud}
					alt=''
					className=' absolute top-[15%] right-[5%] w-[12vw]'
					style={{ transform: 'rotateY(180deg)' }}
				/>
				<div className='w-[17%] absolute -top-[29%] -z-10 left-[40%] aspect-1 bg-[#FFD600] rounded-full'></div>
			</div>
			<div className=' mx-auto px-2 pb-5 font-rms relative text-mirage mt- bg-daen_pink overflow-hidden'>
				{/** flex */}
				<div className='sm:flex container mt-20 mb-4'>
					{/** left side */}
					<div className='text-4xl md:text-6xl font-rmsBold sm:w-[45%] leading-[110%]'>
						Saving the
						<br /> planet as simple as 1,2,3
					</div>
					{/** right side */}
					<div className=' flex flex-col sm:w-[50%] ml-auto mt-8 sm:mt-0 space-y-8 sm:space-y-[5%]'>
						<StepsBubble
							title={'Buy'}
							description={
								'When you buy a CNeg NFT, 50,000 USD worth BCT tokens enter the C-negative Protocol, making them inaccessible to everyone.'
							}
						/>
						<StepsBubble
							title={'Burn'}
							description={
								'The BCT tokens are then burnt, and their backed carbon credits are taken out of circulation forever'
							}
						/>
						<StepsBubble
							title={'Save the Planet.'}
							description={
								'Buying 1 C-negative protocol is the equivalent of an individual from the top 1% income bracket becoming carbon negative for a year. 10% of the mint value of each C-negative token will be contributed towards verified carbon capture projects. '
							}
						/>
					</div>
				</div>
				<img src={solidCloudGroup} className='w-[40vw]' />
				<div className=' bg-vibrant_green w-max absolute z-20 -bottom-0 -left-6 animate-moveSide'>
					{arr.map((item, i) => (
						<span
							className=' font-rmsBold text-sm sm:text-base'
							key={i}
						>
							CNEGATIVE GENESIS &nbsp;
							<span className=' '>X</span>
							&nbsp;&nbsp;
						</span>
					))}
				</div>
			</div>

			{/** Section 4 */}
			<div className='container text-mirage'>
				<div className='md:flex'>
					{/** left side picture */}
					<div className='w-[90%] mx-auto md:w-[49%] aspect-[10/11] bg-sate-500 flex items-center justify-center relative'>
						<div className='absolute bg-light_pink h-[70%] w-[50%] rounded-3xl mr-[16%] mb-[2%] -z-10'></div>
						<img
							src={section4Image}
							alt='noImg'
							className='h-[90%]'
						/>
					</div>
					{/** right side info */}
					<div className='md:w-[49%] flex flex-col tems-center justify-evenly space-y-16'>
						<div className='text-6xl font-rmsBold ml-[5%] md:ml-[8%] leading-[110%]'>
							The Cnegative Genesis NFT
						</div>
						<div className='text-lg space-y-3 ml-[5%] md:ml-[8%]'>
							<div className='flex items-center'>
								<CheckCircleIcon className='h-8 text-lavender mr-[2%]' />
								Be a part of the C-negative DAO{' '}
							</div>
							<div className='flex items-center'>
								<CheckCircleIcon className='h-8 text-lavender mr-[2%]' />
								Become carbon neutral for 10 years
							</div>
							<div className='flex items-center'>
								<CheckCircleIcon className='h-8 text-lavender mr-[2%]' />
								Participate in the development of verified
								climate projects
							</div>
						</div>
					</div>
				</div>
				{/** Our Partners */}
				<div className=' font-rmsBold mt-28 md:mt-10 mx-2'>
					<div className='text-6xl text-center'>Our Partners</div>
					<div className='flex bg-light_pink rounded-2xl p-8 mt-8 overflow-x-auto snap-x snap-mandatory'>
						{/** left side */}
						<div className='min-w-[25rem] snap-center md:w-[50%] flex flex-col items-center space-y-5 border-r-2'>
							<div className='text-4xl'>market</div>
							<div className=' font-rms text-center px-10'>
								Market is a permisionless Defi protocol that
								helps you leverage assets in isolated markets
								and maximize your yield
							</div>
							<div>
								<a href='' className=' underline'>
									Learn More
								</a>
							</div>
						</div>
						{/** right side */}
						<div className=' min-w-[350px] snap-center md:w-[50%] flex flex-col items-center space-y-5'>
							<div className='text-4xl font-rms'>
								<span className=' font-semibold'>GRAVIKY </span>
								<span>Labs</span>
							</div>
							<div className=' font-rms text-center px-10'>
								Graviky Labs is a MIT spinoff working in
								developing cleantech solutions.
							</div>
							<div>
								<a href='' className=' underline'>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
				{/** dropping Soon */}
				<div className='flex items-center bg-lavender rounded-2xl mt-10 px-5 sm:px-10 md:px-20 py-5 md:py-10 mx-2'>
					<div className=' flex-grow flex flex-col space-y-4 font-rmsBold text-4xl'>
						<div>
							Dropping Soon on the
							<br /> polygon network <br />
						</div>
						<a href={whitePaerLink} target='_blank'>
							<div className='bg-white rounded-xl w-max text-base px-4 py-3 md:py-4 mt-4'>
								Read LitePaper
							</div>
						</a>
					</div>
					<div className='mr-0 1016px:mr-24'>
						<img src={dropping} className='h-28 sm:h-max' />
					</div>
				</div>
			</div>

			{/** faq section section 5 */}
			<div className='bg-light_pink mt-16 relative py-20 overflow-hidden'>
				<div className='container px-2'>
					<FaqSection />
				</div>
				<div className=' bg-lavender w-max absolute z-20 -bottom-0 -left-48 animate-moveSide'>
					{arr.map((item, i) => (
						<span
							className=' font-rmsBold text-black text-sm sm:text-base items-center inline-flex'
							key={i}
						>
							LET'S SAVE THE PLANET TOGETHER &nbsp;&nbsp;
							<img src={littleGlobe} className='inline' />
							&nbsp;&nbsp;
						</span>
					))}
				</div>
			</div>

			{/** section 6 last part */}
			<div className='bg-dark_bg text-white relative'>
				<div className='container px-8 sm:px-20 md:px-2 flex flex-col items-center space-y-8 py-[15%] sm:py-[10%] md:py-[5%]'>
					<div className='text-3xl sm:text-5xl md:text-7xl text-center font-rmsBold max-w-3xl mx-auto'>
						Buy green NFTs. Destroy Carbon Credits. Become a planet
						hero.
					</div>
					<a
						href={whitePaerLink}
						target='_blank'
						className='btn text-mirage p-2 sm:px-4 sm:py-3 md:py-4 font-rmsBold text-base md:text-lg'
					>
						Read LitePaper
					</a>
				</div>

				<div className='container px-2'>
					{/** join community */}
					<div className='mt-auto bottom-0 flex items-center justify-between border-t-2 py-5 border-gray-700'>
						{/** join */}
						<div className=' space-y-4 max-w-[80%]'>
							<div className='text-3xl md:text-5xl font-rmsBold'>
								Join the community
							</div>
							<div className=' text-base md:text-lg'>
								Get Early Access to Drops and have a say in the
								development of the project by joining the
								community
							</div>
						</div>
						<div className=' space-x-8'>
							<a
								href=''
								target={'_blank'}
								className='p-3 border-2 rounded-2xl'
							>
								Twitter
							</a>
						</div>
					</div>
					{/** footer */}
					<div className='flex py-5'>
						<div className='flex-grow h-8'>
							<img src={logoWhite} className='sm:block hidden' />
							<img
								src={logoOnlyWhite}
								className='block sm:hidden h-8 w-8'
							/>
						</div>
						<div className=' space-x-10'>
							<a href=''>Homepage</a>
							<a href=''>Faqs</a>
							<a href={whitePaerLink} target={'_blank'}>
								LitePaper
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
