import { db, getCollection } from '../config/db.js'
let txs = await getCollection(db, 'txs')

// Get a lists of last 10 transaction
export const getList = async () => {
	let lists = await txs.find({})
		.sort({_id: -1})
		.limit(10)
		.toArray()

	if (lists.length !== 10) {
		// error: cannot get list
		return ''
	}
	return lists
}

// Create a new transaction (tx)
// and save to database
export const createTX = async (tx) => {
	// code here...
	tx.time = new Date()
	let res = await txs.insertOne(tx)
	return res
}