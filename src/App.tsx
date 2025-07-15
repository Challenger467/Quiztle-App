import About from './components/About'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom"
function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </>

    )
}

export default App