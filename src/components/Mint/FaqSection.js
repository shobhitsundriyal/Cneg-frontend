import React from 'react'
import FaqBubble from './FaqBubble'

function FaqSection() {
	return (
		<div className='tracking-wide leading-[160%]'>
			<div className='text-2xl font-rmsBold mb-5'>FAQs</div>
			<FaqBubble
				question={'What is Cnegative?'}
				answer={
					'Cnegative is a climate action initiative that allows individuals and web3 companies to go carbon neutral by permanently retiring carbon emissions on-chain.'
				}
			/>
			<FaqBubble
				question={'What is Cnegative Genesis?'}
				answer={
					'Cnegative Genesis is our genesis NFT collection that helps individuals go carbon neutral for 18 months & collectively retire over $50k worth of carbon credits on-chain.'
				}
			/>
			<FaqBubble
				question={'How does it work?'}
				answer={
					'Do what you do best i.e, mint an NFT. On the collection selling out, we will swap the MATIC for the equivalent BCT and burn them. The process will be transparent and the transaction details will be shared accordingly.'
				}
			/>
			<FaqBubble
				question={'How can I get involved further?'}
				answer={
					'Reach out to us on Twitter @cnegative42 for further conversations & collaborations'
				}
			/>
		</div>
	)
}

export default FaqSection
