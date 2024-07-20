import React from 'react'
import NavBarComponent from './NavBarComponent'
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Header(props) {
  const location = useLocation()
  return (

    <div >
      <NavBarComponent onShow={props.onShow} />

      {location.pathname === '/home' &&
        <div className="bg-secondary" style={{ top: "-5px" }}>
          <h1 style={{ fontSize: "70px", textAlign: "center", padding: "18px", color: "#fff" }}>The Generics</h1>
          <Row className='text-center' xs={12}>
            <Col  >
              <Button className='text-center p-3 bg-secondary border boder-info'>Get our latest album</Button>
            </Col>
            <svg className='p-2' xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
          </Row>

        </div>}
    </div>

  )


}

export default Header;