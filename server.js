import express from 'express'
import router from './api/router.js'
// import { rateLimiter } from './security/rateLimiter.js'
import dotenv from 'dotenv'

dotenv.config()
const server = express()

server.use(express.json())
// server.use(rateLimiter)
server.use('/api', router)

// main paths
server.get('/ip', (req, res) => {res.status(200).send({
	ip: req.headers["cf-connecting-ip"] || req.ip
})})

server.get('/', (req, res) => {
	res.send('developed by andrew setyawan')
})
server.get('*', (req, res) => {res.send('404: page not found!')})

// running server
const port = process.env.PORT || 5000
server.listen(port, () => {
	console.log(`server is running on port ${port}`)
})