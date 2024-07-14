import React from 'react'
import NavBarComponent from './NavBarComponent'

function Header() {
  return (
    
    <div>
      <NavBarComponent />
      <div class="bg-secondary" style={{ height: '8rem' }}>
        <h1 style={{ fontSize: "70px", textAlign: "center", padding: "18px", color: "#fff" }}>The Generics</h1>
      </div>
      
    </div>
      
    
  )
}

export default Header;