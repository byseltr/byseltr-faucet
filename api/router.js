import express from 'express'
import { getList } from './model.js'

const router = express.Router()

router.get('/', (req, res) => {
	res.send('api router byseltr faucet')
})

// show the last 10 transaction from various faucet
router.get('/txs', async (req, res) => {
	const txs = await getList()
	res.send(txs)
})


router.post('/drip', (req, res) => {
	res.send('test').status(204)
})

export default router