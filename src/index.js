import 'babel-polyfill'
import app from './app'
import { renderClient } from 'react-chain'

renderClient(app, document.getElementById('root'))
