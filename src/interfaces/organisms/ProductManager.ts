import { Product } from '../../store/slices/productSlice';

export interface ProductManagerProps {
  products: Product[];
  onDelete: (id: number) => void;
  onUpdate: (product: Product) => void;
}
