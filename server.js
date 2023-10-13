import express from 'express'
// import serverless from 'serverless-http'
import cors from 'cors'
import path from 'path'
// [EXP]
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(`file: ${__filename} <=> dir: ${__dirname}`)

import router from './api/router.js'
// import { rateLimiter } from './security/rateLimiter.js'
import dotenv from 'dotenv'

dotenv.config()
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname, "build/apps")))
// server.use(rateLimiter)
server.use('/api', router)

// main paths
server.get('/ip', (req, res) => {res.status(200).send({
	ip: req.ip || req.headers["cf-connecting-ip"]
})})

server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "build/apps", "index.html"))
})

// running server
const port = process.env.PORT || 5000
server.listen(port, () => {
	console.log(`server is running on port ${port}`)
})

// module.exports.handler = serverless(server)
