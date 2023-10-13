import { useEffect, useState } from 'react'
import './styles/TxHistory.css'
import axios, { config } from '../services/Api'

function TxHistory() {
	const [txs, setTxs] = useState(null)

	useEffect(() => {
		const getTxs = async () => {
			const {data: response} = await axios.get(config.api.txs)
			setTxs({
				"left": response.left,
				"right": response.right
			})
		}

		getTxs()
	}, [])

	if (!txs) return 'load...'
	return (
		<div className="txs">
			<div className="txs-head">
				<h2>Transaction History</h2>
			</div>
			<div className="txs-body">
				<div className="container">
					<Tx data={txs.left} />
				</div>
				<div className="container">
					<Tx data={txs.right} />
				</div>
			</div>
		</div>
	)
}

function Tx(props) {

	return (
		<>
			{props.data.map((tx) => (
				<div className="tx" key={tx.id}>
					<div className="tx-title">
						<h4>0x{tx.address}...c11B</h4>
						<p>request has successful!</p>
					</div>
					<div className="tx-content">
						<p>
							<strong>Tx Hash:</strong>
							<a href={'tx/' + tx.hash}>
								0xf08cf8dc3e9866d2ac8eb709e7b596f4d749115875d354b9a977efeb5846ed9c
							</a>
						</p>
					</div>
					<span 
						className="tx-time" 
						style={{float: 'right'}}>
						{timeAgo('1696294120000')}
					</span>
				</div>
			))}
		</>
	)
}

function timeAgo(timestamp) {
	// let ago = Date.parse(timestamp)
	let now = new Date()
	let difference = Date.parse(now) - timestamp
	var seconds = difference / 1000
	var minutes = Math.round(seconds / 60)
	var hours = Math.round(seconds / 3600)
	var days = Math.round(seconds / 86400)
	var weeks = Math.round(seconds / 604800)
	var months = Math.round(seconds / 2629440)
	var years = Math.round(seconds / 31553280)

	const ago = (s, w) => {
		if (s === 1) {
			return `a ${w} ago`
		} else {
			return `${s} ${w} ago`
		}
	}

	// logical
	if (seconds <= 60) {
		return 'a seconds ago'
	} else if (minutes <= 60) {
		return ago(minutes, 'minute')
	} else if (hours <= 24) {
		return ago(hours, 'hour')
	} else if (days <= 7) {
		return ago(days, 'day')
	} else if (weeks <= 4.3) {
		return ago(weeks, 'week')
	} else if (months <= 12) {
		return ago(months, 'month')
	} else if (years <= 1) {
		return ago(years, 'year')
	}
}

export default TxHistory