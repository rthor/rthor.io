import React from 'react'
import Dots from '../Dots'
import './Layout.css'

export default ({ children }) => (
	<div className="Layout">
		<Dots />
		<main className="Layout-main" role="main">
			{ children }
		</main>
	</div>
)
