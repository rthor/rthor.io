import React from 'react'
import UniversalRouter from 'universal-router'
import NotFound from './routes/NotFound'
import queryString from 'query-string'

export default routes => session => {
	const router = new UniversalRouter(routes)

	return async () => {
		try {
			return await router.resolve( {
				context: session,
				path: session.history.location.pathname,
				query: queryString.parse( session.history.location.search ),
			} )
		} catch (error) {
			return <NotFound error={error} />
		}
	}
}
