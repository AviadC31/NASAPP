import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import Hamburger from './components/Hamburger'
import Favourites from './components/Favourites'
import Search from './components/Search'
import './App.css';

export default function App () {

  const [id, setId] = useState({})

  const favouriteId = id => setId(id)

  return (
    <Router>
      <Hamburger id={id}/>
      <Route path="/" exact render={() => <Home favouriteId={favouriteId}/>}  />
      <Route path="/search" exact render={() => <Search favouriteId={favouriteId}/>} />
      <Route path="/favourites" exact render={() => <Favourites favouriteId={favouriteId} id={id}/>} /> 
      <Route path="/favourite/:id" exact render={({ match }) => <Favourites match={match} favouriteId={favouriteId} id={id}  />} /> 
    </Router>
  )
}


