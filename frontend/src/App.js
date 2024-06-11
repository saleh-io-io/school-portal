import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/userAuthContext';

//pages & components
import Home from './pages/home';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Navbar from './components/navBar';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar></Navbar>
        <div className='pages'>
          <Routes>

          <Route path='/' element={user ? <Home /> : <Navigate to="/login" /> } />
          <Route path='/login' element={!user ? <SignIn/> : <Navigate to="/" />} />
          <Route path='/signUp' element={!user ? <SignUp /> : <Navigate to="/" /> } />

            
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
