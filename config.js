const config = {
  	"RATELIMIT": {
  		"TEST": "This a TEST"
  	},
  	"DRIP_LIST": {
  		"FUJI": {
  			"NAME": "Avalanche Fuji",
  			"TOKEN": "AVAX",
  			"RPC": "https://api.avax-test.network/ext/C/rpc",
  			"CHAINID": 43113,
  			"EXPLORER": "https://testnet.snowtrace.io/",
  			"IMAGE": "",
  			"MAX_PRIORITY_FEE": "10000000000",
  			"MAX_FEE": "100000000000",
  			"DRIP_AMOUNT": 1,
  			"DECIMALS": 18,
  			"RECALIBRATE": 30,
  			"RATELIMIT": {
  				"MAX_LIMIT": 1,
  				"WINDOW_SIZE": 1440
  			}
  		},
  		"MUMBAI": {
  			"NAME": "Polygon Mumbai",
  			"TOKEN": "MATIC",
  			"RPC": "https://api.avax-test.network/ext/C/rpc",
  			"CHAINID": 80001,
  			"EXPLORER": "https://mumbai.polygonscan.com/",
  			"IMAGE": "",
  			"MAX_PRIORITY_FEE": "10000000000",
  			"MAX_FEE": "100000000000",
  			"DRIP_AMOUNT": 1,
  			"DECIMALS": 18,
  			"RECALIBRATE": 30,
  			"RATELIMIT": {
  				"MAX_LIMIT": 1,
  				"WINDOW_SIZE": 1440
  			}
  		},
  		"ATHENS3": {
  			"NAME": "Zetachain Athens 3",
  			"TOKEN": "ZETA",
  			"RPC": "https://api.avax-test.network/ext/C/rpc",
  			"CHAINID": 0,
  			"EXPLORER": "https://explorer.zetachain.com/",
  			"IMAGE": "",
  			"MAX_PRIORITY_FEE": "10000000000",
  			"MAX_FEE": "100000000000",
  			"DRIP_AMOUNT": 1,
  			"DECIMALS": 18,
  			"RECALIBRATE": 30,
  			"RATELIMIT": {
  				"MAX_LIMIT": 1,
  				"WINDOW_SIZE": 1440
  			}
  		},
  		"HOLESKY": {
  			"NAME": "Ethereum Holesky",
  			"TOKEN": "ETH",
  			"RPC": "https://api.avax-test.network/ext/C/rpc",
  			"CHAINID": 0,
  			"EXPLORER": "https://holesky.etherscan.io/",
  			"IMAGE": "",
  			"MAX_PRIORITY_FEE": "10000000000",
  			"MAX_FEE": "100000000000",
  			"DRIP_AMOUNT": 1,
  			"DECIMALS": 18,
  			"RECALIBRATE": 30,
  			"RATELIMIT": {
  				"MAX_LIMIT": 1,
  				"WINDOW_SIZE": 1440
  			}
  		}
  	}
  }

export default config