import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-2  p-3 rounded' style={{ height: '100%' }}>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={`${product.image}`} variant='top' fluid />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.brand}</Card.Text>
        <Card.Text>{product.category}</Card.Text>
      </Card.Body>
    </Card>
  );
};
Product.propType = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Product;
