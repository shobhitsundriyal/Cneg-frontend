import React from 'react'
import Steps from './Steps'

function HowItWorks() {
	return (
		<div className='rounded-lg bg-[#f7eeee] pl-8 pt-8 pr-20 tracking-wide leading-[160%]'>
			{/**heading */}
			<div className='text-2xl font-rmsBold mb-5'>How it works</div>

			{/**Expalin */}
			<div>
				With C-negative, you can buy carbon credits and burn them on the
				blockchain - leaving the world with less permitted carbon
				emissions.
			</div>
			<div className='mt-5'>
				{' '}
				1 C-Negative token = 96 Base Carbon Tonne (BCT) tokens*{' '}
			</div>

			{/** info */}
			<div className=' text-xs mt-2'>
				*Base Carbon Tonnes (BCT) is a reference token representing one
				tonne of carbon from the Verra Verified Carbon Unit (VCU)
				registry from 2008 or later, bridged by the Toucan Protocol.
			</div>

			{/**Steps */}
			<div className='mt-8 ml-2'>
				<Steps
					title={'Buy'}
					paragraph={
						'When you buy a CNeg NFT, 50,000 USD worth BCT tokens enter the C-negative Protocol, making them inaccessible to everyone.'
					}
				/>
				<Steps
					title={'Burn'}
					paragraph={
						'When you buy a CNeg NFT, 50,000 USD worth BCT tokens enter the C-negative Protocol, making them inaccessible to everyone.'
					}
				/>
				<Steps
					title={'Save the world'}
					paragraph={
						'Buying 1 C-negative protocol is the equivalent of an individual from the top 1% income bracket becoming carbon negative for a year. 10% of the mint value of each C-negative token will be contributed towards verified carbon capture projects. '
					}
					isLast={true}
				/>
			</div>
		</div>
	)
}

export default HowItWorks
