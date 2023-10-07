import { MongoClient, ServerApiVersion } from 'mongodb'
// const URI = process.env.MONGO_URI || ''
const URI = "mongodb+srv://haver:12345@cluster0.yefiu.mongodb.net/?retryWrites=true&w=majority"

// create a MongoClient with a MongoClientOptions
// the object a set the stable API version
// const client = new MongoClient(URI, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	}
// })

async function connectDB() {
	const client = new MongoClient(URI, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecatedErrors: true,
		}
	})

	let conn
	try {
		conn = await client.connect()
	} catch(e) {
		console.error(e)
	}

	let db = conn.db('byseltr_faucet_test')
	console.log('[DB] connected to database')
	return db
}

// let db = connectDB()

// async function getCollection(client, name) {
// 	let collection = await client.collection(name)
// 	return collection

// }

// export default db
connectDB()