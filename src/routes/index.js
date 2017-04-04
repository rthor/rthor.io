import React from 'react'
import Home from './Home'
import Layout from '../components/Layout'

export default [
	{
		path: '/',
		action() {
			return (
				<Layout>
					<Home />
				</Layout>
			)
		}
	}
]
