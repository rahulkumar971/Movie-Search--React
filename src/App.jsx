import './App.css'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Navbbar from './components/Navbbar'
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <MovieProvider>
      
      <div>
      <Navbbar />
    <main className="main-content">
    <Routes >
    <Route path="/" element={<Home />}/>
     <Route path="/favorites" element={<Favourites />}/>
    </Routes>
    </main>
   </div>

    </MovieProvider>
    
    
  );  
}

export default App
