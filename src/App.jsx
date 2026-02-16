import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import { useState } from 'react'
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Auth onLogin={() => setIsLoggedIn(true)} />} 
        />
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/" />} 
        />
      {/* <Route path='/portfolio' element={<Portfolio/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
