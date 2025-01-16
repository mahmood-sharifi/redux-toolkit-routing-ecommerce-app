export interface ProductListProps {
    products: {
        id: number;
        name: string;
        description: string;
        price: number;
    }[];
}
