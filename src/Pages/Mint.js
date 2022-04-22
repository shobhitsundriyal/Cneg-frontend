import EnvironmentHero from '../components/Mint/EnvironmentHero'
import FaqSection from '../components/Mint/FaqSection'
import HowItWorks from '../components/Mint/HowItWorks'
import MintArea from '../components/Mint/MintArea'
import Header from '../components/General/Header'
import Footer from '../components/General/Footer'

function Mint() {
	return (
		<div className=' bg-red- max-w-6xl mx-auto px-2 text-mirage font-rms font-semibold'>
			<Header />

			<div className=' space-y-10'>
				<MintArea />
				<EnvironmentHero />
				<HowItWorks />
				<FaqSection />
			</div>

			<Footer />
		</div>
	)
}

export default Mint
