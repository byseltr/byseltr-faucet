import { useState } from 'react'
import './Content.css'

function Content() {
	const [inputAddress, setInputAddress] = useState('')
	const [inputTweetURL, setInputTweetURL] = useState('')
	const telegram = 'https://t.me/byseltr_faucet'
	const twitter = 'https://twitter.com/byseltr'
	const tweet = 'https://twitter.com/intens/tweet?'

	const updateAddress = (e) => {setInputAddress(e.target.value)}
	const updateTweetURL = (e) => {setInputTweetURL(e.target.value)}

	return (
		<>
			<div className="content">
				<div className="content-text">
					<h4>Byseltr Faucet</h4>
					<h1>Testnet Faucet</h1>
					<p>request testnet tokens from various blockchain and test your smart contract or dapp. it's all free!</p>
					<a href={telegram} target="_noblank">TELEGRAM FAUCET</a>
					<a href="/faucet" className="see">SEE LIST</a>
				</div>

				<div className="content-faucet">
					<h2>Sepolia Drip</h2>
					<div className="cf">
						<h5>Wallet Address</h5>
						<div className="cf-input">
							<input 
								placeholder="0x..."
								value={inputAddress}
								onChange={updateAddress}
								autofocus
							/>
						</div>
						<h6>{inputAddress}</h6>
					</div>
					<div className="cf">
						<h5>Follow and Tweet</h5>
						<div className="cf-cond">
							<a target="_noblank" href={twitter}>Follow @byseltr</a><br/>
							<a href={tweet} target="_noblank">Tweet</a>
						</div>
					</div>
					<div className="cf">
						<h5>Tweet URL</h5>
						<div className="cf-input">
							<input 
								placeholder="https://twitter.com/byseltr/status/..."
								value={inputTweetURL}
								onChange={updateTweetURL}
								autofocus
							/>
						</div>
						<h6>{inputTweetURL}</h6>
					</div>
					{/*solve captcha here*/}
					<div className="request">
						<button>REQUEST TOKEN</button>
					</div>
				</div>
			</div>

			<div className="test">
				<h2>developed by Andrew Setyawan (ands)</h2>
			</div>
		</>
	)
}

export default Content