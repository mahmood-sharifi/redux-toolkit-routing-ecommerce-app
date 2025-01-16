import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.product.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;
