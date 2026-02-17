import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import { useState } from 'react'
function App() {
  const [user,setUser]=useState(null);
  console.log(user);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route 
      path='/'
      element={
        user ? (
          <Navigate to="/dashboard"/>
        ) :(
          <Auth onLogin={(userData)=>setUser(userData)}/>
        )
      }
      />
      <Route
      path="/dashboard"
      element={
        user ? (
          <Dashboard user={user} onLogout={()=>setUser(null)}/>
        ) :(
          <Navigate to="/"/>
        )
      }
      />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
