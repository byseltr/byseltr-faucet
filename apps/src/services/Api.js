import axios from 'axios'
import conf from '../config.json'

export default axios.create({
	baseURL: conf.apiEndpointDevelopment,
	timeout: conf.apiTimeout,
})

export const config = {
	api: {},
}