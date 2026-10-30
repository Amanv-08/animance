
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import News from './pages/News'

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
