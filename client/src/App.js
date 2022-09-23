import React from 'react';
import axios from 'axios';
import Router from './router';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return <Router />;
}

export default App;
