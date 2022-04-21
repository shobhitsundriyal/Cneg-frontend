import twitterIcon from '../../icons/twitter.svg'
import discordIcon from '../../icons/discord.svg'
import logoImg from '../../icons/logo.svg'
import logoOnly from '../../icons/logoOnly.svg'

function Footer() {
	return (
		<div className='h-12 flex items-center justify-between my-10'>
			{/**Logo */}
			<span>
				<img src={logoImg} className='hidden md:block' />
				<img src={logoOnly} className='md:hidden block' />
			</span>

			{/**Links */}
			<span className=' md:w-[30%] w-[60%] flex justify-between'>
				<a href=''>Home</a>
				<a href=''>FAQ's</a>
				<a href=''>Whitepaper</a>
			</span>

			{/** Social links*/}
			<span className='flex space-x-5'>
				<a href='https://twitter.com/cnegative42' target={'_blank'}>
					<img src={twitterIcon} alt='' />
				</a>
				<a href='https://discord.gg/whMXC84jNJ' target={'_blank'}>
					<img src={discordIcon} alt='' />
				</a>
			</span>
		</div>
	)
}

export default Footer
