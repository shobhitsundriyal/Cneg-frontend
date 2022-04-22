import './App.css'
import Header from './components/General/Header'
import Mint from './Pages/Mint'
import Footer from './components/General/Footer'
import WalletConnetedState from './contexts/WalletConnectedState'
import IsMintedState from './contexts/IsMintedState'
import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<IsMintedState>
			<WalletConnetedState>
				<Routes>
					<Route path='/' element={<LandingPage />}>
						{/* <div className='bg-black h-[100vh] top-0 -z-10 w-full absolute'>
							<LandingPage />
						</div> */}
					</Route>

					<Route path='mint' element={<Mint />}>
						{/* <div className=' bg-red- max-w-6xl mx-auto px-2 text-mirage font-rms font-semibold'>
							<Header />
							<Mint />
							<Footer />
						</div> */}
					</Route>
				</Routes>
			</WalletConnetedState>
		</IsMintedState>
	)
}

export default App
