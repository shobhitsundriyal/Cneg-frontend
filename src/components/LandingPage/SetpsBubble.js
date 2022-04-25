import React from 'react'

function SetpsBubble({ title, description }) {
	return (
		<div className='bg-white rounded-2xl p-4 md:p-6 space-y-4 sm:space-y-6'>
			<div className='text-xl md:text-3xl font-rmsBold'>{title}</div>

			<div>{description}</div>
		</div>
	)
}

export default SetpsBubble
