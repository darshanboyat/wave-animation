import React from 'react'
import './Logo.css'

function Logo() {
  return (
    <>
    <div className='logo' style={{position: 'absolute', zIndex: 999, color: 'white', fontSize: 30, padding: 15, fontFamily: 'monospace', '&first-letter': {color: 'red'}}}>Animator</div>
    <hr style={{position: 'absolute', top: 50, left: 10, zIndex: 999, width: 100, color: 'white'}}/>
    </>
  )
}

export default Logo