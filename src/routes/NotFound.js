import React from 'react'
import Layout from '../components/Layout'

export default ({ error }) => (
	<Layout>
		<h1>404 Page not found</h1>
		<p>{error.message}</p>
	</Layout>
)
