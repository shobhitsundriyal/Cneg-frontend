import React from 'react'

function Steps({ title, paragraph, isLast }) {
	return (
		<div
			className={`pb-12 pl-10 pt-0 border-dotted border-mirage border-l-2 ${
				!isLast ? '' : 'border-[#f7eeee]'
			} relative`}
		>
			{/** text part */}

			<div className=' text-lg leading-none'>
				{title}
				{/* {console.log(isLast)} */}
			</div>
			<div className=' text-sm font-base mt-3'>{paragraph}</div>
			{/** the dot */}
			<div className='h-4 w-4 bg-mirage absolute rounded-full top-0 -left-[9px]'></div>
		</div>
	)
}

export default Steps
