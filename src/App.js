import './App.css'
import Header from './components/General/Header'
import Mint from './Pages/Mint'
import Footer from './components/General/Footer'
import WalletConnetedState from './contexts/WalletConnectedState'

function App() {
	return (
		<WalletConnetedState>
			<div className=' bg-red- max-w-6xl mx-auto px-2 text-mirage font-rms font-semibold'>
				<Header />
				<Mint />
				<Footer />
			</div>
		</WalletConnetedState>
	)
}

export default App
