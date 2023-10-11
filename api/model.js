import { db, getCollection } from '../config/db.js'

let txs = await getCollection(db, 'test')

// Get a list of 10 transactions (10 txs)
export async function getList() {
	var result = await txs.find({})
		.sort({_id: -1})
		.limit(10)
		.toArray()

	return result
}

// Add a new transaction (tx) to the test collection (txs)
async function saveOne(tx) {
	// code here...
	tx.time = new Date()
	var result = await txs.insertOne(tx)
	return result
}