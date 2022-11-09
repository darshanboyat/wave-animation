import React from 'react'
import './WelcomeIntro.css'

function WelcomeIntro() {
  return (
    <>
      <div style={{ position: 'absolute', zIndex: 999, top: 500, left: 200, color: 'white', fontFamily: 'monospace', display: 'flex', height: 31, overflow: 'hidden' }}>
        <h1>Hey, I'm </h1>
        <ul style={{ listStyle: 'none', marginLeft: 15, overflow: 'hidden' }}>
          <li><span style={{ fontSize: 30, fontWeight: 'bolder', color: '#FC6D6D' }}>Software Developer</span></li>
          <li ><span style={{ fontSize: 30, fontWeight: 'bolder', color: '#FC6D6D' }}>Designer</span></li>
          <li ><span style={{ fontSize: 30, fontWeight: 'bolder', color: '#FC6D6D' }}>Student</span></li>
          <li ><span style={{ fontSize: 30, fontWeight: 'bolder', color: '#FC6D6D' }}>Wrestler</span></li>
        </ul>
      </div>
      <h3 style={{position: 'absolute', color: 'white', zIndex: 999, top: 600, left: 300}}>Learn more about me \/</h3>
    </>
  )
}

export default WelcomeIntro