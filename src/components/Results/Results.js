import React from 'react'
import './Results.scss'
import  GifCard from '../GifCard/GifCard'

const Results = ({results, error, query, loading}) => {

  const gifResults = results.map(gif => {
    return <GifCard gif={gif} key={gif.title}/>
  })

  
  return(
    <section className='results-section'>
      
      {error && <h2 className="error-text">{error}</h2>}
      {results && results.length === 0 && query && <h2 className='results-text'>
        No search results found for: {query}. <br/> 
        Try it again, or change up what cha searched.</h2>}
      {loading === true && <h2>Grabbin' Gifs & Gettin' Groovy</h2> }
      {results && results.length !== 0 && <span><h2 className='results-text'>Results matching</h2> <h2 className='query-text'> {query}</h2></span>}

      <div className='gif-list'>
        {gifResults}
      </div>

    </section>
  )


}

export default Results