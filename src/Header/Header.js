import React from 'react'
import './Header.scss'
import Search from '../Search/Search'

const Header = ({getResults}) => {
  return(
    <header>
      <div className='header-text'><h1>Get</h1> <h1 className='giphy-header'>Giphy</h1><h1>Wit It</h1></div>
      <Search getResults={getResults}/>
    </header>
  )
}

export default Header