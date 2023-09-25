import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AllRecipePage from '../AllRecipePage/AllRecipePage';
import UpdateRecipePage from "../UpdateRecipePage/UpdateRecipePage"
import Settings from '../../components/Settings/Settings'
import { getUser } from '../../utilities/users-service';

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
