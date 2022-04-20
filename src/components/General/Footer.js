import twitterIcon from '../../icons/twitter.svg'
import discordIcon from '../../icons/discord.svg'
import logoImg from '../../icons/logo.svg'

function Footer() {
	return (
		<div className='h-12 flex items-center justify-between my-10'>
			{/**Logo */}
			<span>
				<img src={logoImg} />
			</span>

			{/**Links */}
			<span className=' md:w-[30%] w-[50%] flex justify-between'>
				<a href=''>Home</a>
				<a href=''>FAQ's</a>
				<a href=''>Whitepaper</a>
			</span>

			{/** Social links*/}
			<span className='flex space-x-5'>
				<a href=''>
					<img src={twitterIcon} alt='' />
				</a>
				<a href=''>
					<img src={discordIcon} alt='' />
				</a>
			</span>
		</div>
	)
}

export default Footer
