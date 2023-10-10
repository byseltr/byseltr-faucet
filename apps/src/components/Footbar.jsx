import './styles/Footbar.css'

function Footbar() {
	const telegram = 'https://t.me/byseltr'
	const twitter = 'https://twitter.com/byseltr'
	const github = 'https://github.com/byseltr'

	return (
	<>
		<div className="footbar">
			<div className="up">
				<h5>Contact us</h5>
				<div className="sosmed">
					<a href={twitter}><i className="fa-brands fa-x-twitter"></i></a>
					<a href={telegram}><i className="fa-brands fa-telegram"></i></a>
					<a href={github}><i className="fa-brands fa-github"></i></a>
				</div>
			</div>
			<div className="down">
				<h5>© 2023 BYSELTR. developed by Andrew Setyawan</h5>
				<h5>Ponorogo, East Java, Indonesia, Southeast Asia</h5>
				<h4>POWERED BY NYX</h4>
			</div>
		</div>
	</>
	)
}

export default Footbar