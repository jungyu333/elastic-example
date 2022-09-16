import React from 'react';
import axios from 'axios';
import Router from './router';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return <Router />;
}

export default App;
