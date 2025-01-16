import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../atoms';
import { Card } from '../../styles/molecules';
import { ProductCardProps } from '../../interfaces/molecules';
import { addToCart } from '../../store/slices/cartSlice';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
