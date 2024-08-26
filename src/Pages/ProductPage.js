import React, { useState, useContext } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import CartCntext from '../Store/CartContext';

function ProductPage() {
  const [review, setReview] = useState(''); // For input value
  const [reviews, setReviews] = useState([]); // To store the list of reviews
  const { productId } = useParams();
  const { productsArr } = useOutletContext(); // Access productsArr from context
  const cartCtx = useContext(CartCntext);

  const product = productsArr.find(item => item.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const addToCartHandler = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    cartCtx.addItem(productToAdd);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    if (review.trim()) {
      setReviews(prevReviews => [...prevReviews, review]);
      setReview(''); // Clear the input field
    }
  };

  return (
    <div className="container">
      <Card className="border-0 shadow-lg">
        <Row>
          <Col md={6} className="p-5">
            <div style={{ overflow: 'hidden' }}>
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{
                  transition: 'transform 0.5s ease',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.5)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column p-5">
            <h2 className="mb-3">{product.title}</h2>
            <p className="mb-4">{product.description}</p>
            <p className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              Price: ₹{product.price}
            </p>
            <Button variant="primary" style={{ width: '50%' }} onClick={addToCartHandler}>
              Add to Cart
            </Button>
            <div className="mt-4">
              <h4>Product Reviews</h4>
              <Form.Control
                type="text"
                className="font-weight-bold"
                placeholder="Your Product Reviews"
                value={review}
                onChange={handleReviewChange}
              />
              <Button className="mt-2" variant="secondary" onClick={handleReviewSubmit}>
                Submit Review
              </Button>
              <div className="review mt-3">
                {reviews.map((rev, index) => (
                  <p key={index}><strong>User {index + 1}:</strong> {rev}</p>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ProductPage;
