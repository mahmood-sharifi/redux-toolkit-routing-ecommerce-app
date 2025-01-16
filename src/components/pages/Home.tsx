import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ProductList } from '../organisms';

const Home: React.FC = () => {
  const products = useSelector((state: RootState) => state.product.products);

  return (
    <div>
      <h1>Home</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
