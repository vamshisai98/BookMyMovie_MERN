import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const checkoutHandler = () => {
    history.push('/login?redirect=payment');
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Booking</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your booking is empty{' '}
            <Link to='/'>
              <i className='fas fa-chevron-circle-left'></i>Go Back
            </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Payement
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col md={12}>
        <h1>Pick Your Seat</h1>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          01
        </Button>
        <Button variant='outline-info' size='sm'>
          02
        </Button>
        <Button variant='outline-info' size='sm'>
          03
        </Button>
        <Button variant='outline-info' size='sm'>
          04
        </Button>
        <Button variant='outline-info' size='sm'>
          05
        </Button>
        <Button variant='outline-info' size='sm'>
          06
        </Button>
        <Button variant='outline-info' size='sm'>
          07
        </Button>
        <Button variant='outline-info' size='sm'>
          08
        </Button>
        <Button variant='outline-info' size='sm'>
          09
        </Button>
        <Button variant='outline-info' size='sm'>
          10
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          11
        </Button>
        <Button variant='outline-info' size='sm'>
          12
        </Button>
        <Button variant='outline-info' size='sm'>
          13
        </Button>
        <Button variant='outline-info' size='sm'>
          14
        </Button>
        <Button variant='outline-info' size='sm'>
          15
        </Button>
        <Button variant='outline-info' size='sm'>
          16
        </Button>
        <Button variant='outline-info' size='sm'>
          17
        </Button>
        <Button variant='outline-info' size='sm'>
          18
        </Button>
        <Button variant='outline-info' size='sm'>
          19
        </Button>
        <Button variant='outline-info' size='sm'>
          20
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          21
        </Button>
        <Button variant='outline-info' size='sm'>
          22
        </Button>
        <Button variant='outline-info' size='sm'>
          23
        </Button>
        <Button variant='outline-info' size='sm'>
          24
        </Button>
        <Button variant='outline-info' size='sm'>
          25
        </Button>
        <Button variant='outline-info' size='sm'>
          26
        </Button>
        <Button variant='outline-info' size='sm'>
          27
        </Button>
        <Button variant='outline-info' size='sm'>
          28
        </Button>
        <Button variant='outline-info' size='sm'>
          29
        </Button>
        <Button variant='outline-info' size='sm'>
          30
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          31
        </Button>
        <Button variant='outline-info' size='sm'>
          32
        </Button>
        <Button variant='outline-info' size='sm'>
          33
        </Button>
        <Button variant='outline-info' size='sm'>
          34
        </Button>
        <Button variant='outline-info' size='sm'>
          35
        </Button>
        <Button variant='outline-info' size='sm'>
          36
        </Button>
        <Button variant='outline-info' size='sm'>
          37
        </Button>
        <Button variant='outline-info' size='sm'>
          38
        </Button>
        <Button variant='outline-info' size='sm'>
          39
        </Button>
        <Button variant='outline-info' size='sm'>
          40
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          41
        </Button>
        <Button variant='outline-info' size='sm'>
          42
        </Button>
        <Button variant='outline-info' size='sm'>
          43
        </Button>
        <Button variant='outline-info' size='sm'>
          44
        </Button>
        <Button variant='outline-info' size='sm'>
          45
        </Button>
        <Button variant='outline-info' size='sm'>
          46
        </Button>
        <Button variant='outline-info' size='sm'>
          47
        </Button>
        <Button variant='outline-info' size='sm'>
          48
        </Button>
        <Button variant='outline-info' size='sm'>
          49
        </Button>
        <Button variant='outline-info' size='sm'>
          50
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          51
        </Button>
        <Button variant='outline-info' size='sm'>
          52
        </Button>
        <Button variant='outline-info' size='sm'>
          53
        </Button>
        <Button variant='outline-info' size='sm'>
          54
        </Button>
        <Button variant='outline-info' size='sm'>
          55
        </Button>
        <Button variant='outline-info' size='sm'>
          56
        </Button>
        <Button variant='outline-info' size='sm'>
          57
        </Button>
        <Button variant='outline-info' size='sm'>
          58
        </Button>
        <Button variant='outline-info' size='sm'>
          59
        </Button>
        <Button variant='outline-info' size='sm'>
          60
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          61
        </Button>
        <Button variant='outline-info' size='sm'>
          62
        </Button>
        <Button variant='outline-info' size='sm'>
          63
        </Button>
        <Button variant='outline-info' size='sm'>
          64
        </Button>
        <Button variant='outline-info' size='sm'>
          65
        </Button>
        <Button variant='outline-info' size='sm'>
          66
        </Button>
        <Button variant='outline-info' size='sm'>
          67
        </Button>
        <Button variant='outline-info' size='sm'>
          68
        </Button>
        <Button variant='outline-info' size='sm'>
          69
        </Button>
        <Button variant='outline-info' size='sm'>
          70
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          71
        </Button>
        <Button variant='outline-info' size='sm'>
          72
        </Button>
        <Button variant='outline-info' size='sm'>
          73
        </Button>
        <Button variant='outline-info' size='sm'>
          74
        </Button>
        <Button variant='outline-info' size='sm'>
          75
        </Button>
        <Button variant='outline-info' size='sm'>
          76
        </Button>
        <Button variant='outline-info' size='sm'>
          77
        </Button>
        <Button variant='outline-info' size='sm'>
          78
        </Button>
        <Button variant='outline-info' size='sm'>
          79
        </Button>
        <Button variant='outline-info' size='sm'>
          80
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          81
        </Button>
        <Button variant='outline-info' size='sm'>
          82
        </Button>
        <Button variant='outline-info' size='sm'>
          83
        </Button>
        <Button variant='outline-info' size='sm'>
          84
        </Button>
        <Button variant='outline-info' size='sm'>
          85
        </Button>
        <Button variant='outline-info' size='sm'>
          86
        </Button>
        <Button variant='outline-info' size='sm'>
          87
        </Button>
        <Button variant='outline-info' size='sm'>
          88
        </Button>
        <Button variant='outline-info' size='sm'>
          89
        </Button>
        <Button variant='outline-info' size='sm'>
          90
        </Button>
      </Col>
      <Col md={8}>
        <Button variant='outline-info' size='sm'>
          91
        </Button>
        <Button variant='outline-info' size='sm'>
          92
        </Button>
        <Button variant='outline-info' size='sm'>
          93
        </Button>
        <Button variant='outline-info' size='sm'>
          94
        </Button>
        <Button variant='outline-info' size='sm'>
          95
        </Button>
        <Button variant='outline-info' size='sm'>
          96
        </Button>
        <Button variant='outline-info' size='sm'>
          97
        </Button>
        <Button variant='outline-info' size='sm'>
          98
        </Button>
        <Button variant='outline-info' size='sm'>
          99
        </Button>
        <Button variant='outline-info' size='sm'>
          00
        </Button>
      </Col>
      <Col md={12}>
        SCREEN
        <div>
          <Button variant='danger' disabled size='sm'>
            Booked
          </Button>
          <Button variant='success' disabled size='sm'>
            Available
          </Button>
          <Button variant='info' disabled size='sm'>
            Selected
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CartScreen;
