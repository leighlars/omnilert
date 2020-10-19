import React from 'react'
import './Header.scss'
import Search from '../Search/Search'

const Header = () => {
  return(
    <header>
      <h1>Get</h1> <h1 className='giphy-header'>Giphy</h1><h1>Wit It</h1>
      <Search />
    </header>
  )
}

export default Header