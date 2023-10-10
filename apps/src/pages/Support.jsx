import Navbar from '../components/Navbar'
import Footbar from '../components/Footbar'

function Support() {
	return (
	<div className="App">
      <Navbar />
      <div style={{height: '100vh',position: 'relative',top: '3.25em'}}>
        <h3>Page Support!</h3>
        <br/>
        <p>mail to: faucet@byseltr.xyz</p>
      </div>
      <Footbar />
    </div>
	)
}

export default Support