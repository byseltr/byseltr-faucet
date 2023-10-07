import { Alchemy, Network } from 'alchemy-sdk'

const client = new Alchemy({
	apiKey: process.env.API_KEY,
	network: Network.ETH_GOERLI
})

console.log(client)