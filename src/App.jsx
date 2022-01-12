import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Offers from './pages/Offers'
import OurMenu from './pages/OurMenu'

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu'>
          <OurMenu />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/offers'>
          <Offers />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
