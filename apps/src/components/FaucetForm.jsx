import { useState } from 'react'
import './styles/FaucetForm.css'

function FaucetForm() {
	const [address, setAddress] = useState('')
	const [tweetURL, setTweetURL] = useState('')
	const twitter = 'https://twitter.com/byseltr'
	const tweet = `request tokens $MATIC from @byseltr faucet. TXID: #SECRET #faucet #testnet #testnet-faucet #byseltr #byseltr-faucet`

	const updateAddress = (e) => {setAddress(e.target.value)}
	const updateTweetURL = (e) => {setTweetURL(e.target.value)}
	return (
		<div className="faucet-form">
			<div className="ff-head">
				<h2>Polygon Mumbai drip</h2>
			</div>
			<div className="ff-body">
				<div className="container">
					<label>INPUT WALLET ADDRESS</label>
					<span className="warn">*address is required!</span>
					<br/>
					<input placeholder="Your Wallet Address (0x...)"
						value={address} onChange={updateAddress}
					/>
				</div>
				<div className="container">
					<label>FOLLOW AND SEND A TWEET</label>
					<span className="warn">*task is required!</span>
					<br/>
					<p>follow our twitter account</p>
					<a href={twitter} target="_noblank">
						<i className="fa-brands fa-x-twitter"></i>
						Follow @byseltr
					</a>
					<p>post the tweet below and you will receive your tokens in just seconds.</p>
					<div className="tweet">{tweet}</div>
					<a href="asu.lah" target="_noblank">
						<i className="fa-brands fa-x-twitter"></i>
						Post a Tweet
					</a>
				</div>
				<div className="container">
					<label>TWEET URL</label>
					<span className="warn">*url is required!</span>
					<br/>
					<input placeholder="Your Tweet URL (https://twitter.com/byseltr/status/...)" value={tweetURL} onChange={updateTweetURL}/>
				</div>
				{/*---------------------------*/}
				<span className="note">note: funds that you receive throught this faucet are not real funds.</span>
				<div className="submit">
					<button>REQUEST TOKEN</button>
				</div>
			</div>
		</div>
	)
}

export default FaucetForm