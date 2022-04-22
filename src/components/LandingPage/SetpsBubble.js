import React from 'react'

function SetpsBubble({ title, description }) {
	return (
		<div className='bg-white rounded-2xl p-6 space-y-6'>
			<div className='text-3xl font-rmsBold'>{title}</div>

			<div>{description}</div>
		</div>
	)
}

export default SetpsBubble
