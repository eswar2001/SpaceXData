import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import { Home } from './view/home';
import { Detail } from './view/detail'

export const App = () => {
  return <>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </>
}

export const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <Detail />
      </Route>
    </Switch>
  );
}