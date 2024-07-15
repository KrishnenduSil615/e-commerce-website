import React from 'react'
import NavBarComponent from './NavBarComponent'

function Header(props) {
  return (
    
    <div >
      <NavBarComponent onShow={props.onShow}/>
      <div class="bg-secondary" style={{top:"-5px"}}>
        <h1 style={{ fontSize: "70px", textAlign: "center", padding: "18px", color: "#fff" }}>The Generics</h1>
      </div>
      
    </div>
      
    
  )
}

export default Header;