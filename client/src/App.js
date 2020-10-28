import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import NoMatch from './pages/NoMatch';
import BookList from './pages/BookList';
import Navigation from './components/Nav';
import Search from './pages/Search'

function App() {
  return (
    <Router>
       <div>
        <Navigation />
         <Switch>
           <Route exact path={"/search"}>
             <Search />
           </Route>
           <Route exact path="/">
             <BookList />
           </Route>
           <Route>
             <NoMatch />
           </Route>
         </Switch>
       </div>
    </Router>
  );
}

export default App;
