import logoWhite from '../icons/LandingPageAssests/logoWhite.svg'
import earth from '../icons/LandingPageAssests/earth.svg'
import sideDoodle from '../icons/LandingPageAssests/sideDoodle.svg'
import sec2group from '../icons/LandingPageAssests/section2mainGroup.svg'
import logoOnlyWhite from '../icons/LandingPageAssests/logoOnlyWhiteNobg.png'

import baseCarbon from '../icons/LandingPageAssests/baseCarbon.png'
import StepsBubble from '../components/LandingPage/SetpsBubble'
import solidCloudGroup from '../icons/LandingPageAssests/solidCloudGroup.svg'
import dropping from '../icons/LandingPageAssests/dropping.svg'
import FaqSection from '../components/Mint/FaqSection'

function LandingPage() {
	const arr = new Array(50).fill(0)
	const whitePaerLink =
		'https://www.figma.com/proto/ucqPiWfTJecEifVRhTNNyn/C-NEGATIVE?node-id=734%3A273&scaling=min-zoom&page-id=339%3A341'
	return (
		<>
			{/** Section 1 */}
			<div className=' bg-dark_bg h-[100vh] mx-auto px-2 text-white font-rms font-semibold relative'>
				<div className='container h-[70%]'>
					{/** header */}
					<div className='flex pt-5 pb-3'>
						<img src={logoWhite} alt='' />
						<button className='btn ml-auto text-mirage font-rmsBold'>
							Coming Soon
						</button>
					</div>
					{/* main Area(hero section ) */}
					<div className=' flex mt-[5%] h-[90%]'>
						{/** height of hero area */}
						{/* left side */}
						<div className=' flex flex-col w-[50%] justify-around '>
							<div className=' text-7xl font-rmsBold leading-[110%]'>
								These NFTs are going to save the planet{'  '}
								<img src={earth} className='inline' />
							</div>
							<div className=' text-lg'>
								With C-negative, you can buy carbon credits and
								burn them on the blockchain - leaving the world
								with less permitted carbon emissions.
							</div>
							<div className='btn text-mirage font-rmsBold w-max p-3'>
								Coming Soon...
							</div>
						</div>
						{/* right side */}
						<div className='  w-[50%] pl-[12%]'>
							<div className='h-[100%] bg-lavender rounded-2xl'></div>
						</div>
					</div>
				</div>

				<img src={sideDoodle} className='absolute -bottom-2 left-0' />
				<img
					src={sideDoodle}
					className='absolute -bottom-2 right-0'
					style={{ transform: 'rotateY(180deg)' }}
				/>
			</div>

			{/** Section 2 */}
			<div className=' mx-auto px-2 font-rms relative text-mirage'>
				<div className='container mt-28 flex'>
					<div className=' text-6xl font-rmsBold w-min leading-[110%] mt-10'>
						What is a Cnegative NFT?
					</div>
					<img
						src={sec2group}
						className=' h-max aspect-[0.8] w-max ml-20'
					/>

					<div className=' text-lg leading-[160%] mb-12 mt-auto tracking-wider'>
						A C-negative NFT allows you to purchase carbon credits
						on the blockchain and destroy them forever - meaning,
						that the world has lesser amount of permitted carbon
						emissions.
					</div>
				</div>
				{/** equivalant */}
				<div className='container flex text-5xl justify-between text-white font-rmsBold mt-20 relative'>
					{/** equals */}
					<div className=' border-2 border-white aspect-1 h-[45%] text-center absolute rounded-full bg-mirage p-2 left-[47%] top-[25%]'>
						{'='}
					</div>

					<div className='w-[49.5%] bg-mirage flex items-center p-8 rounded-2xl'>
						<div className=' bg-lavender p-5 rounded-full border-2 border-white h-20 w-20'>
							<img src={logoOnlyWhite} />
						</div>
						<div className='ml-8'>
							1 Cnegative
							<br /> token
						</div>
					</div>

					<div className='w-[49.5%] bg-mirage flex items-center p-8 rounded-2xl justify-end'>
						<div className='mr-8 text-right'>
							96 Base
							<br /> Carbon Tonne
						</div>
						<div className=' bg-lavender rounded-full h-20 w-20'>
							<img src={baseCarbon} className='rounded-full' />
						</div>
					</div>
				</div>
				{/** info */}
				<div className='container pl-[40%] mt-8 leading-[160%] text-lg'>
					*Base Carbon Tonnes (BCT) is a reference token representing
					one tonne of carbon from the Verra Verified Carbon Unit
					(VCU) registry from 2008 or later, bridged by the{' '}
					<span className=' text-purple-400 underline'>
						Toucan Protocol.
					</span>
				</div>
			</div>

			{/** Setction 3 */}
			<div className=' mx-auto px-2 pb-5 font-rms relative text-mirage mt-60 bg-daen_pink overflow-hidden'>
				{/** absolute things */}
				<div className='w-[12%] absolute -top-20 -z-10 left-[45%] aspect-1 bg-yellow-400 rounded-full'></div>
				{/** jugaad */}
				<div className='bg-lavender text-7xl leading-[120%] text-center font-rmsBold text-white tracking-wider'>
					BECOME A PLANET HERO
				</div>

				{/** flex */}
				<div className='flex container mt-20 mb-4'>
					{/** left side */}
					<div className='text-6xl font-rmsBold w-[45%] leading-[110%]'>
						Saving the
						<br /> planet as simple as 1,2,3
					</div>
					{/** right side */}
					<div className=' flex flex-col w-[50%] ml-auto space-y-[5%]'>
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
				<img src={solidCloudGroup} className=' bg-slate-' />
				<div className=' bg-vibrant_green w-max absolute z-20 -bottom-0 -left-6'>
					{arr.map((item, i) => (
						<span className=' font-rmsBold' key={i}>
							CNEGATIVE GENESIS &nbsp;X&nbsp;&nbsp;
						</span>
					))}
				</div>
			</div>

			{/** Section 4 */}
			<div className='container text-mirage'>
				(flex left image, right cneg)
				{/** Our Partners */}
				<div className=' font-rmsBold'>
					<div className='text-6xl text-center'>Our Partners</div>
					<div className='flex bg-light_pink rounded-2xl p-8 mt-8'>
						{/** left side */}
						<div className='w-[50%] flex flex-col items-center space-y-5 border-r-2'>
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
						<div className='w-[50%] flex flex-col items-center space-y-5 border-r-2'>
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
				<div className='flex items-center bg-lavender rounded-2xl mt-10 px-20 py-10'>
					<div className=' flex-grow flex flex-col space-y-4 font-rmsBold text-4xl'>
						<div>
							Dropping Soon on the
							<br /> polygon network <br />
						</div>
						<a href={whitePaerLink} target='_blank'>
							<div className='bg-white rounded-xl w-max text-base p-4 mt-4'>
								Read Whitepaper
							</div>
						</a>
					</div>
					<div className='mr-24'>
						<img src={dropping} />
					</div>
				</div>
			</div>

			{/** faq section section 5 */}
			<div className='bg-light_pink mt-16 relative py-20 overflow-hidden'>
				<div className='container '>
					<FaqSection />
				</div>
				<div className=' bg-lavender w-max absolute z-20 -bottom-0 -left-48'>
					{arr.map((item, i) => (
						<span className=' font-rmsBold text-black' key={i}>
							LET'S SAVE THE PLANET TOGETHER &nbsp;&nbsp;🌐&nbsp;
						</span>
					))}
				</div>
			</div>

			{/** section 6 last part */}
			<div className='bg-dark_bg text-white relative'>
				<div className='container flex flex-col items-center space-y-8 py-[5%] '>
					<div className=' text-7xl text-center font-rmsBold max-w-3xl mx-auto'>
						Buy green NFTs. Destroy Carbon Credits. Become a planet
						hero.
					</div>
					<a
						href={whitePaerLink}
						target='_blank'
						className='btn text-mirage p-4 font-rmsBold text-lg'
					>
						Read whitepaper
					</a>
				</div>

				<div className='container'>
					{/** join community */}
					<div className='mt-auto bottom-0 flex items-center justify-between border-t-2 py-5 border-gray-700'>
						{/** join */}
						<div className=' space-y-4 '>
							<div className='text-5xl font-rmsBold'>
								Join the community
							</div>
							<div className='text-lg'>
								Get Early Access to Drops and have a say in the
								development of the project by joining the
								community
							</div>
						</div>
						<div className=' space-x-8'>
							<a
								href=''
								target={'_blank'}
								className='py-3 px-6 border-2 rounded-2xl mr-[2%]'
							>
								Discord
							</a>
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
						<div className='flex-grow'>
							<img src={logoWhite} />
						</div>
						<div className=' space-x-10'>
							<a href=''>Homepage</a>
							<a href=''>Faqs</a>
							<a href={whitePaerLink} target={'_blank'}>
								Whitepaper
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
