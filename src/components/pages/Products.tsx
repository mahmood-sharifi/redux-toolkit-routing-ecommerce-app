import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { deleteProduct, updateProduct, Product } from '../../store/slices/productSlice';
import { ProductManager } from '../organisms';

const Products: React.FC = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (product: Product) => {
    dispatch(updateProduct(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <ProductManager products={products} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default Products;
