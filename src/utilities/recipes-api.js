import { getToken } from "./users-service";


const BASE_URL= "/api/recipes"


export function createRecipe(recipe){
    return sendRequest(`${BASE_URL}`, 'POST', recipe);}

export function getAllRecipes(){
  return sendRequest(`${BASE_URL}`, 'GET');}

  export function editRecipe(recipe, id){
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', recipe);}

    export function getRecipe(id){
      return sendRequest(`${BASE_URL}/${id}`, 'GET');}

      export function deleteRecipe(id){
        return sendRequest(`${BASE_URL}/${id}`, 'DELETE');}
  

   
  


    /*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
  
    // sends token to backend
    const token = getToken();
  
    if (token) {
      options.headers = options.headers || {};
      options.headers.Authorization = `Bearer ${token}`;
    }
  
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return await res.json();
    throw new Error('Bad Request');
  }