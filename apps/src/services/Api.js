import axios from 'axios'
import conf from '../config.json'

export default axios.create({
	baseURL: conf.apiEndpointProduction,
	timeout: conf.apiTimeout,
})

export const config = {
	api: {
		txs: '/txs',
		chain: '/config?chain='
	},
}