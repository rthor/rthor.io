import createReactChain from 'react-chain'
import history from 'react-chain-history'
import router from './router'
import routes from './routes'
import './index.css'

export default createReactChain()
	.chain(history())
	.chain(router(routes))
