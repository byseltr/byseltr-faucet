import { Alchemy, Network, Wallet } from 'alchemy-sdk'

const client = new Alchemy({
	apiKey: process.env.API_KEY,
	network: Network.ETH_GOERLI
})

const wallet = new Wallet(process.env.PK || '')

console.log(client)