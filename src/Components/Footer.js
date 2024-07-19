import React from 'react'
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className='bg-info d-flex justify-content-between'>
            <Col>
                <h1 style={{ fontSize: "70px", padding: "15px", color: "#fff" }}>The Generics</h1>
            </Col>

            <div style={{ margin: "15px", padding:"10px"}}>
                <Row >
                    <Col>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaKPzFTNEL7YSIhO5K7UeSm6U9D0BjFycUg&s' style={{ width: "5rem", mixBlendMode: "" }}></img>
                    </Col>
                    <Col>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34bRdACbbLrn8ADrw2dPd96BEIbaoVoxr9g&s' style={{ width: "5rem", mixBlendMode: "multiply" }}></img>
                    </Col>
                    <Col>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s' style={{ width: "5rem", mixBlendMode: "multiply" }}></img>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Footer;