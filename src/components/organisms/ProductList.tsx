import React from 'react';
import { ProductListContainer } from '../../styles/organisms';
import { ProductListProps } from '../../interfaces/organisms';
import { ProductCard } from '../molecules';

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ProductListContainer>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </ProductListContainer>
);

export default ProductList;
