import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NewRecipePage from './pages/NewRecipePage';
import AuthPage from './pages/AuthPage';
import NavBar from './components/NavBar';
import AllRecipePage from './pages/AllRecipePage';
import UpdateRecipePage from "./pages/UpdateRecipePage"
import Settings from './components/Settings'
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
        <Route path="/recipes/:id" element={<UpdateRecipePage/>}/>
        <Route path="/settings" element= {<Settings user={user} setUser={setUser}/>} />

      </Routes>

      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
