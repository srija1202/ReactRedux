// src/components/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/cartSlice';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  return (
    <Container className="my-4">
      <h2 className="mb-4">📦 Products</h2>
      <Row>
        {products.length === 0 ? (
          <Col>
            <p>No products available.</p>
          </Col>
        ) : (
          products.map((product) => (
            <Col key={product.id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addProductToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Home;
