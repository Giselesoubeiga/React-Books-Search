import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./Pages/homePage";
import SearchPage from "./Pages/searchpage";
import SavedBooks from "./Pages/savedBooks";
import "./App.css";
import Navbar from "./Components/navbar";

function App() {
  return (
    // <BrowserRouter>
    //   <div>
    //     <navbar />
    //   </div>

    //   {/* <nav class="navbar navbar-light bg-light">
    //     <span class="navbar-brand mb-0 h1">Navbar</span>
    //     <Link to={`/search`}>Search</Link>
    //     <Link to={`/saved`}>Saved</Link> 
    //   </nav> */}

    //   {/* <Route exact path="/" component={HomePage} />
    //   <Route exact path="/search" component={SearchPage} />
    //   <Route exact path="/saved" component={SavedBooks} /> */}
    // </BrowserRouter>
    <Router>
      <div>
        <Navbar/>
      </div>
      <div className="container">
        <Route exact path="/" component={HomePage} />
       <Route exact path="/search" component={SearchPage} />
       <Route exact path="/saved" component={SavedBooks} />
      </div>
    </Router>
    
  );
}

export default App;
