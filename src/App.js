import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NewRecipePage from './pages/NewRecipePage';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';
import AllRecipePage from './pages/AllRecipePage';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/recipes/new' element={ <NewRecipePage /> }/>
        <Route path='/allrecipes' element={ <AllRecipePage /> }/>
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
