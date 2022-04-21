import { Transition } from '@tailwindui/react'
import { useContext } from 'react'
import IsMintedContext from '../../contexts/IsMintedContext'
import envHero from '../../icons/beingHero.svg'

function EnvironmentHero() {
	const isMintedContext = useContext(IsMintedContext)

	return (
		<Transition
			show={isMintedContext.state}
			enter='transition-opacity duration-300'
			enterFrom='opacity-0'
			enterTo='opacity-100'
		>
			<div className=' h-80 rounded-lg bg-daen_pink flex'>
				<div className=' flex flex-col flex-grow justify-center pl-[8%]'>
					<div className=' text-5xl font-rmsBold leading-[100%] sm:leading-[120%]'>
						Thanks for being an <br /> environment hero
					</div>
					<div className='leading-[120%] sm:leading-[140%] mt-8'>
						You’re helping make this world a better place & we truly{' '}
						<br />
						thank you for that.
					</div>
				</div>
				<div className='hidden sm:block'>
					<img src={envHero} className='h-full' />
				</div>
			</div>
		</Transition>
	)
}

export default EnvironmentHero
