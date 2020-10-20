import React, {useState} from 'react'
import './Search.scss'

const Search = ({getResults}) => {
  const [query, setQuery] = useState('')

  const searchGifs = (e) => {
    e.preventDefault()
    getResults(query)
    setQuery('')
  }

  return(
    <form className='search-form'>
      <input 
        className='search-input'
        aria-label='search-input'
        value={query}
        type='text'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search gifs'
      />
      <button 
        className='search-button'
        onClick={(e) => {searchGifs(e)}}
        >
          Get Giphin'
        </button>
    </form>
  )


}

export default Search