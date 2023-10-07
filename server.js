import express from 'express'
import router from './api/router.js'
// import { rateLimiter } from './security/rateLimiter.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// app.use(rateLimiter)
app.use('/api', router)

// main paths
app.get('/ip', (req, res) => {res.status(200).send({
	ip: req.headers["cf-connecting-ip"] || req.ip
})})

app.get('/', (req, res) => {
	res.send('developed by andrew setyawan')
})
app.get('*', (req, res) => {res.send('404: page not found!')})

// running server
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})