import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footbar from '../components/Footbar'
import axios, { config } from '../services/Api'

function Support() {
  // const response = axios.get(config.api.txs)

	return (
	<div className="App">
      <Navbar />
      <div style={{height: '100vh',position: 'relative',top: '3.25em'}}>
        <h3>Page Support!</h3>
        <br/>
        <p>mail to: faucet@byseltr.xyz</p>
        <br/>
        <Test />
        {/*<h4>{response.data}</h4>*/}
      </div>
      <Footbar />
    </div>
	)
}

function Test() {
  // const [chain, setChain] = useState(null)
  
  // useEffect(() => {
  //   axios.get(config.api.chain + 'FUJI').then((res) => {
  //     // console.log(res
  //     setChain(res.data)
  //   })
    
  // }, [])

  // TXS HERE
  const [txs, setTXS] = useState(null)

  useEffect(() => {
    const getTXS = async () => {
      const {data: response} = await axios.get(config.api.txs)
      // console.log(response)
      setTXS({
        "left": response.left,
        "right": response.right
      })
    }

    getTXS()
    // console.log(txs)
  }, [])

  const Tet = (props) => {
    return (
    <>
      {props.data.map((t) => (
        <div key={t.id}>
          <h5>{t.address}</h5>
          <p>{t.hash}</p>
        </div>
      ))}
    </>
    )
  }

  if (!txs) return 'load'
  // if (!chain) return 'load'
  return (
    <>
      <h4>test</h4>
      <p>ttttt</p>
      <Tet data={txs.left}/>
      <Tet data={txs.right} />
      {/*<h5>{chain.NAME}</h5>*/}
      {/*<h5>{chain.TOKEN}</h5>*/}
    </>
  )
  
}


export default Support