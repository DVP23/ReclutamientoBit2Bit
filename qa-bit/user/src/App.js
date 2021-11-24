import { useState, useEffect } from 'react';
import { Reset } from 'styled-reset';
import Header from './components/Header';
import Questions from './components/Questions';
import Pregunta from './components/Pregunta';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from './components/GlobalStyles';
import UserContext from './components/UserContext';
import LoginPage from './components/LoginPage';
import axios from "axios";
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);

  function checkAuth() {
    axios.get('http://localhost:3030/profile', {withCredentials: true}).then(response => {
    setUser({email:response.data});
    console.log(response);
  })
  .catch(() => {
    setUser(null);
  })
  }
  useEffect (()=> {
    checkAuth();
  }, []);

  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Router>
        <UserContext.Provider value={{user, checkAuth}}>
          <Header />
          <Routes>
            <Route exact path="/home" element={<Questions/>}/>
            <Route path="/question" element={<Pregunta/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </UserContext.Provider>
      </Router>
     
    </div>
  );
}

export default App;
