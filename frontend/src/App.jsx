import React from "react";
import { Route, Routes } from "react-router-dom";

import Register from './Register.jsx';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>
    )
  }
}