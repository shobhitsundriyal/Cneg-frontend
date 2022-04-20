import React from 'react'

function FaqBubble({ question, answer }) {
	return (
		<div className=' bg-mirage p-5 rounded-xl mt-2'>
			<div className='text-white text-lg mb-3'>{question}</div>
			<div className=' text-daen_pink text-sm font-light'>{answer}</div>
		</div>
	)
}

export default FaqBubble
