import React, {useState} from 'react'
import './Search.scss'

const Search = () => {
  const [query, setQuery] = useState('')

  const clearInput = () => {
    setQuery('')
  }

  return(
    <form className='search-form'>
      <input 
        className='search-input'
        aria-label='search-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search gifs'
      />
      <button 
        className='search-button'
        
        >
          Get Giphin'
        </button>
    </form>
  )


}

export default Search