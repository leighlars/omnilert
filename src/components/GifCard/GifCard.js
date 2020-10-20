import React from 'react'
import './GifCard.scss'

const GifCard = ({gif}) => {
  return(
    <iframe
      title={gif.title}
      src={gif.embed_url} 
      alt={gif.title}
    />
  )

}

export default GifCard