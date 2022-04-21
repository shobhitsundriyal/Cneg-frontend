import { useState } from 'react'
import IsMintedContext from './IsMintedContext'

const IsMintedState = (props) => {
	const [state, setState] = useState(false)
	const updateState = (val) => {
		setState(val)
	}
	return (
		<IsMintedContext.Provider value={{ state, updateState }}>
			{props.children}
		</IsMintedContext.Provider>
	)
}

export default IsMintedState
