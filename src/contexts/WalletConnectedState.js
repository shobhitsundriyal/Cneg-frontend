import { useState } from 'react'
import WalletConnectedContext from './WalletConnectedContext'

const WalletConnetedState = (props) => {
	const [state, setState] = useState(false)
	const updateState = (val) => {
		setState(val)
	}
	const [walletAddress, setWalletAddress] = useState()
	return (
		<WalletConnectedContext.Provider
			value={{ state, updateState, walletAddress, setWalletAddress }}
		>
			{props.children}
		</WalletConnectedContext.Provider>
	)
}

export default WalletConnetedState
