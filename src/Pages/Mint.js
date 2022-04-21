import EnvironmentHero from '../components/Mint/EnvironmentHero'
import FaqSection from '../components/Mint/FaqSection'
import HowItWorks from '../components/Mint/HowItWorks'
import MintArea from '../components/Mint/MintArea'

function Mint() {
	return (
		<div className=' space-y-10'>
			<MintArea />
			<EnvironmentHero />
			<HowItWorks />
			<FaqSection />
		</div>
	)
}

export default Mint
