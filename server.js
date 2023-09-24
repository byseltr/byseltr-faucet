import express from 'express'

const app = express()
const router = express.Router()

// `api` router paths
router.get('/', (req, res) => {
	res.send('api')
})

router.get('/goerli', (req, res) => {
	res.send('api -> goerli')
})


// main paths
app.use('/api', router)

app.get('/support', (req, res) => {
	var mail = "support@byseltr.xyz"
	res.send(`mail to: ${mail}`)
})


// running server
app.listen(5000, () => {
	console.log('server is running')
})