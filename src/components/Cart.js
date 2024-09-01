// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../redux/cartSlice';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart.cart);

  return (
    <Container className="my-4">
      <h2 className="mb-4">🛒 Shopping Cart</h2>
      <Row>
        {items.length === 0 ? (
          <Col>
            <p>Your cart is empty.</p>
          </Col>
        ) : (
          items.map((product) => (
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
                  <Card.Text>
                    <strong>Price:</strong> ${product.price.toFixed(2)}
                  </Card.Text>
                  <Card.Text>
                    <strong>Quantity:</strong>{' '}
                    <Badge bg="secondary">{product.quantity}</Badge>
                  </Card.Text>
                  <Card.Text>
                    <strong>Total:</strong> ${product.totalPrice.toFixed(2)}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="success"
                      onClick={() => dispatch(addProductToCart(product))}
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeProductFromCart(product))}
                    >
                      -
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      {items.length > 0 && (
        <Row className="mt-4">
          <Col>
            <h4>
              Total Quantity: <Badge bg="info">{totalQuantity}</Badge>
            </h4>
            <h4>
              Total Amount: <Badge bg="info">${totalAmount.toFixed(2)}</Badge>
            </h4>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
