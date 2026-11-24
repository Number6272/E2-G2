import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import InscriptionPage from './pages/InscriptionPage.jsx'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/inscription/:idFormation?"
            element={<InscriptionPage />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App