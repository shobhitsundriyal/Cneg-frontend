import React from 'react'
import FaqBubble from './FaqBubble'

function FaqSection() {
	return (
		<div className='tracking-wide leading-[160%]'>
			<div className='text-2xl font-rmsBold mb-5'>FAQs</div>
			<FaqBubble
				question={'What are C Negative NFTs?'}
				answer={
					'A C-negative NFT allows you to purchase carbon credits on the blockchain and destroy them forever - meaning, that the world has lesser amount of permitted carbon emissions.'
				}
			/>
			<FaqBubble
				question={'What are C Negative NFTs?'}
				answer={
					'A C-negative NFT allows you to purchase carbon credits on the blockchain and destroy them forever - meaning, that the world has lesser amount of permitted carbon emissions.'
				}
			/>
		</div>
	)
}

export default FaqSection
