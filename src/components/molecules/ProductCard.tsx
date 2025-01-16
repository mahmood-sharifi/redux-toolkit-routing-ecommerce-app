import React from 'react';
import { Button } from '../atoms';
import { Card } from '../../styles/molecules';
import { ProductCardProps } from '../../interfaces/molecules';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <Button>Add to Cart</Button>
  </Card>
);

export default ProductCard;
