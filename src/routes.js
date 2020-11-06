import React from 'react'
import {Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import Form from './pages/Form'

function Routes() {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Form} path="/cadastro" />
    </BrowserRouter>
  )
}


export default Routes