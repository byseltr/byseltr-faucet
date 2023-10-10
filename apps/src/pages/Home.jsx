import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Footbar from '../components/Footbar'

function Home() {
	return (
		<div className="App">
			<Navbar />
			<Content />
			<Footbar />
		</div>
	)
}

export function Zeta() {
	return (
		<h3>Faucet Zetachain</h3>
	)
}

export default Home