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
					<div id="nav-left">
						<img src={logo} className="brand" alt="logo"/>
						<a href="index.html">Byseltr</a>
					</div>
					{/*menu*/}
					<div>
						<ul id="nav-right"
								className={this.state.clicked ? "#nav-right active" : "#nav-right"}>
							<li><a href="index.html">Buy</a></li>
							<li><a href="index.html" className="active">Donate</a></li>
							<li><a href="index.html">Support</a></li>
						</ul>
					</div>
					
					<div id="mobile" onClick={this.handleClick}>
						<i id="bar" className="fas fa-bars"></i>
					</div>
				</nav>
			</>
		)
	}
}

export default Navbar