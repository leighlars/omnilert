import React, {useState} from 'react';
import './App.scss';
import Header from '../Header/Header'
import Results from '../Results/Results';

const App = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  return (
    <div className="App">
      <Header />
      <Results/>
    </div>
  );
}

export default App;
