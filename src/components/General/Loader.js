import React from 'react'

function Loader() {
	return (
		<div className='flex'>
			<div className='flex space-x-1 animate-spin hover:-rotate-[180deg] '>
				<div className='space-y-1 '>
					<div className='h-2 w-2 rounded-full bg-black'></div>
					<div className='h-2 w-2 rounded-full bg-black'></div>
				</div>
				<div className=' space-y-1'>
					<div className='h-2 w-2 rounded-full bg-black'></div>
					<div className='h-2 w-2 rounded-full bg-black'></div>
				</div>
			</div>
		</div>
	)
}

export default Loader
