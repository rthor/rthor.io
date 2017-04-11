import 'babel-polyfill';
import app from './app';
import { startClient } from 'react-chain';

startClient(app, document.getElementById('root'));
