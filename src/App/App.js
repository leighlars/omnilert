import React, {useState} from 'react';
import './App.scss';
import Header from '../Header/Header'
import Results from '../Results/Results';
import {getGifs} from '../API/API'

const App = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  return (
    <div className="App">
      <Header />
      <Results/>
    </div>
  );
}

export default App;
