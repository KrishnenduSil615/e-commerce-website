import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import CartCntext from '../Store/CartContext';

function Body(props) {
  const cartCtx = useContext(CartCntext);

  return (
    <div className='container'>
      <div className="row d-flex justify-content-center">
        {props.productsArr.map((product, index) => {
          const newProduct = { id: `${index + 1}`, ...product, quantity: 1 };

          return (
            <div key={product.id} className="col-md-5 d-flex justify-content-center">
              <Card className="container text-center" style={{ width: '18rem', border: 0 }}>
                <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>
                  <Link to={`/store/${newProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {product.title}
                  </Link>
                </Card.Header>
                <div style={{ overflow: "hidden" }}>
                  <Link to={`/store/${newProduct.id}`}>
                    <Card.Img alt={product.name}
                      style={{ transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)' }
                      variant="top" className="rounded-0" src={product.imageUrl} />
                  </Link>
                </div>
                <Card.Body className='d-flex justify-content-between'>
                  <p>₹{product.price}</p>
                  <Button variant="primary" onClick={cartCtx.addItem.bind(null, newProduct)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="text-center p-3">
        <a className="bg-secondary" type='button' style={{ color: "#fff", textAlign: "center", padding: "9px", borderRadius: "9px", textDecoration: "none" }} onClick={props.onShow}>See the Cart</a>
      </div>
    </div>
  );
}

export default Body;



// import { Button, Card } from 'react-bootstrap'
// import React, {useContext} from 'react';
// import CartCntext from '../Store/CartContext';

// function Body(props) {
//   const cartCtx = useContext(CartCntext)
//   console.log(cartCtx)
//   return (
//     <>
//       <div className='container '>
//         <div className="row d-flex justify-content-center">
//           {props.productsArr.map((product, index) => {
//           const newProduct={id:`${index+1}`, ...product, quantity: 1}
//             return (
//               <div key={Math.random()} className="col-md-5 d-flex justify-content-center">
//                 <Card  className="container text-center " style={{ width: '18rem', border: 0 }}>
//                   <Card.Header style={{ fontSize: "1.25rem", textAlign: "center", fontWeight: "bold" }}>{product.title}</Card.Header>
//                   <div style={{ overflow: "hidden" }}>
//                     <Card.Img alt={product.name}
//                       style={{ transition: 'transform 0.5s ease' }}
//                       onMouseEnter={e => e.target.style.transform = 'scale(1.5)'}
//                       onMouseLeave={e => e.target.style.transform = 'scale(1)'}
//                       variant="top" className="rounded-0 " src={product.imageUrl} />
//                   </div>
//                   <Card.Body className='d-flex justify-content-between'>
//                     <p>₹{product.price}</p>
//                     <Button variant="primary" onClick={cartCtx.addItem.bind(null, newProduct)}>Add to Cart</Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             )
//           })}
//         </div>
//         <div className="text-center p-3">
//             <a className="bg-secondary" type='button' style={{ color: "#fff", textAlign:"center", padding:"9px", borderRadius:"9px", textDecoration:"none" }} onClick={props.onShow}>See the Card</a>
//         </div>
//       </div>
       


//     </>
//   )
// }

// export default Body;


