import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home ,{ Zeta } from './pages/Home'
import Support from './pages/Support'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zetachain" element={<Zeta />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Home />}/>
      </Routes>
    </Router>
  )
}


export default App
