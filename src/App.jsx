import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ExercisesList from './pages/ExercisesList.jsx'
import ExerciseDetail from './pages/ExerciseDetail.jsx'
import ProductsList from './pages/ProductsList.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<ExercisesList />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
