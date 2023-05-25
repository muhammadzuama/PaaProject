import React,{Fragment, useState} from 'react'
import{BsSearch} from 'react-icons/bs'
import './NavBar.css'

function Navbar() {
  return (
    <div className="Navbar">
      <Fragment>
        <nav className=''>
          <div className="nav-option">
            <h1>WatchBox Movie</h1>
            <span>Movies</span>
            <span>Tv Show</span>
            <span>Trending</span>
          </div>
          <input type="text" placeholder='Cari Film ......' />
          <BsSearch/>
          <div id='Color-Swicth'>
            <div id='Color-switcher-move'></div>
          </div>
        </nav>
      </Fragment>
    </div>
  )
}

export default Navbar



