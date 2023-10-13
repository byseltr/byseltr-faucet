import express from 'express'
import { getList, createTX } from './model.js'
import config from '../config.json' assert {type: 'json'}

const router = express.Router()

// show the last 10 transaction from various faucet
// data can split to 2 array (left and right)
let t = 0
router.get('/txs', async (req, res) => {
	let txs = await getList()

	console.log(`[TXS] ${t}`)
	t += 1
	
	if (txs === '') {
		res.send('cannot get list of transaction!')
		return
	}

	// split data into 2 array
	let n = 0
	let left = []
	let right = []
	for (let tx in txs) {
		if (n >= 5) {
			right.push(txs[tx])
			n += 1
			continue
		}
		left.push(txs[tx])
		n += 1
	}
	

	res.send({
		"left": left,
		"right": right
	})
})


// show the configuration for target chain
let c = 0
router.get('/config', (req, res) => {
	console.log(`[CONFIG] ${c}`)
	c += 1

	let chain = req.query.chain
	let chains = ['FUJI', 'MUMBAI', 'ATHENS3', 'HOLESKY']

	if (!chains.includes(chain)) {
		res.send('chain is not support!')
		return
	}

	res.send(config['DRIP_LIST'][chain])
})

export default router