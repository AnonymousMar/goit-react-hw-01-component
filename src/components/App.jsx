import user from '../data/user.json';

import React, { Component } from "react";
import { Profile } from './components/Profile';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < Profile />
      </div>
  )
}

