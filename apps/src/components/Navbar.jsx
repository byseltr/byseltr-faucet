import { Component } from 'react'
import logo from '../logo.svg'
import './Navbar.css'

class Navbar extends Component {
	state = {clicked: false}
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked })
	}

	render() {
		return (
			<>
				<nav>
					<a href="/" className="brand">
						<img src={logo} alt="brand"/>
						{/*{this.props.name}*/}
					</a>
					<a href="/support" className="menu">Support</a>
				</nav>
			</>
		)
	}
}

export default Navbar