import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
	res.send('api router byseltr faucet')
})

// show the last 10 transaction from various faucet
router.get('/txs', (req, res) => {
	res.send({
		message: 'Transaction History',
		data: null,
	})
})

router.get('/isClaimed', (req, res) => {
	res.send({value: true})
})

export default router