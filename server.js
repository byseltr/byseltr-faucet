import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const router = express.Router()

// `api` router paths
router.get('/', (req, res) => {res.send('api')})
router.get('/test', (req, res) => see(res, "hallo test"))
const see = (res, message) => {
	res.send(message)
}

// main paths
app.use('/api', router)
app.get('/support', (req, res) => {res
	.send('mail to: support@byseltr.xyz')
})

app.get('/status', (req, res) => {res.status(200)
	.send('server is normal')
})

app.get('/ip', (req, res) => {res.status(200).send({
	ip: req.headers["cf-connecting-ip"] || req.ip
})})

app.get('/', (req, res) => {res.send('developed by andrew setyawan')})
app.get('*', (req, res) => {res.send('404: page not found!')})

// running server
const port = process.env.PORT || 5000
app.listen(port, () => {console.log(`server is running on port ${port}`)})