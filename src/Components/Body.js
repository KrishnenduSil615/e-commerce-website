import React, { Button, Card } from 'react-bootstrap'
import Footer from './Footer';

function Body(props) {
  return (
    <>
      <div className='container'>
        <div class="row d-flex justify-content-center">
          {props.productsArr.map((product) => {
            return (
              <div class="col-5 d-flex justify-content-center">
                <Card key={product.id} class="container text-center " style={{ width: '18rem', border: 0 }}>
                  <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>{product.title}</Card.Header>
                  <div style={{ overflow: "hidden" }}>
                    <Card.Img alt={product.name}
                      style={{ transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      variant="top" className="rounded-0 " src={product.imageUrl} />
                  </div>
                  <Card.Body className='d-flex justify-content-between'>
                    <p>₹{product.price}</p>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
        <div class="text-center p-3">
            <a class="bg-secondary" type='button' style={{ color: "#fff", textAlign:"center", padding:"9px", borderRadius:"9px", textDecoration:"none" }}>See the Card</a>
        </div>
      </div>
        <Footer />


    </>
  )
}

export default Body;


