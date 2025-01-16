import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductManagerProps } from '../../interfaces/organisms';
import { Product } from '../../store/slices/productSlice';
import { Button, Input } from '../atoms';
import { FormFieldContainer } from '../../styles/molecules';

const ProductManager: React.FC<ProductManagerProps> = ({ products, onDelete, onUpdate }) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [updatedProduct, setUpdatedProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setUpdatedProduct(product);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updatedProduct) {
      setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = () => {
    if (updatedProduct) {
      onUpdate(updatedProduct);
      setEditingProduct(null);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {editingProduct?.id === product.id ? (
            <>
              <FormFieldContainer>
                <Input name="name" value={updatedProduct?.name} onChange={handleChange} />
              </FormFieldContainer>
              <FormFieldContainer>
                <Input name="description" value={updatedProduct?.description} onChange={handleChange} />
              </FormFieldContainer>
              <FormFieldContainer>
                <Input name="price" type="number" value={updatedProduct?.price} onChange={handleChange} />
              </FormFieldContainer>
              <Button onClick={handleUpdate}>Update</Button>
              <Button onClick={() => setEditingProduct(null)}>Cancel</Button>
            </>
          ) : (
            <>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <Button onClick={() => handleEdit(product)}>Edit</Button>
              <Button onClick={() => onDelete(product.id)}>Delete</Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductManager;
