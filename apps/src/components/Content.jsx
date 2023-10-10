// import { useState } from 'react'
import FaucetForm from './FaucetForm'
import TxHistory from './TxHistory'
import './Content.css'

function Content() {

	const Drip = (props) => {
		return (
			<div className="drip">
				<img src={props.src} alt={props.alt + '_DRIP'} />
				<h3>{props.name} drip</h3>
			</div>
		)
	}

	return (
		<>
			<div className="content">
				<div className="content-1">
					<div className="c1-text">
						{/*<h4>{props.config.apiEndpointProduction}</h4>*/}
						<h4>Byseltr Faucet</h4>
						<h1>Testnet Faucet</h1>
						<p>request testnet tokens from various blockchain and test your smart contract or dapp. its all free!</p>
						<a href="https://t.me/byseltr_faucet" target="_noblank">TELEGRAM FAUCET BOT</a>
						<a href="https://see.list" className="disable">SEE LIST</a>
						<div className="text-list">
							<Drip name="Polygon Mumbai" src="svg/matic_mumbai.svg" alt="MUMBAI"/>
							<Drip name="Zetachain Athens3" src="svg/zeta_athens3.svg" alt="ATHENS"/>
							<Drip name="Avalanche Fuji" src="logo192.png" alt="FUJI"/>
							<Drip name="Ethereum Holesky" src="svg/eth_holesky.svg" alt="HOLESKY"/>
						</div>
					</div>
					<div className="c1-faucet">
						<FaucetForm />
						<div className="faucet-buy">
							<h3>Need more testnet tokens?</h3>
							<h6>To request more tokens that you can use to testing, please used instant faucet.</h6>
							<div>
								<button>BUY TBNB</button>
								<button>BUY TMATIC</button>
							</div>
						</div>
					</div>
				</div>

				<div className="content-tail">
					<TxHistory />
					{/*CONTENT D*/}
				</div>
			</div>
		</>
	)
}


export default Content