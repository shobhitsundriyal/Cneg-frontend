import { useState } from 'react'
import WalletConnectedContext from './WalletConnectedContext'

const WalletConnetedState = (props) => {
	const [state, setState] = useState(false)
	const updateState = (val) => {
		setState(val)
	}
	return (
		<WalletConnectedContext.Provider value={{ state, updateState }}>
			{props.children}
		</WalletConnectedContext.Provider>
	)
}

export default WalletConnetedState
