import express from 'express'
import cors from 'cors'
import path from 'path'
import router from './api/router.js'
// import { rateLimiter } from './security/rateLimiter.js'
import dotenv from 'dotenv'

dotenv.config()
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, "apps")))
// server.use(rateLimiter)
server.use('/api', router)

// main paths
server.get('/ip', (req, res) => {res.status(200).send({
	ip: req.ip || req.headers["cf-connecting-ip"]
})})

server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "apps", "index.html"))
})

// running server
const port = process.env.PORT || 5000
server.listen(port, () => {
	console.log(`server is running on port ${port}`)
})