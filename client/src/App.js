import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './Pages/homePage';
import SearchPage from './Pages/searchpage';
import SavedBooks from './Pages/savedBooks';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <Link to={`/search`}>Search</Link>
        <Link to={`/saved`}>Saved</Link> 
      </nav>
      </header>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/search' component={SearchPage} />
      <Route exact path='/saved' component={SavedBooks} />
    </BrowserRouter>
  );
}

export default App;
