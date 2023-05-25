export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
};

export type Products = [Product];

export type DataProducts = {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
};

export type FormData = {
  title: string;
  description: string;
};

export type VoidFnt = () => void;

export type DummyData = Omit<Product, 'id'>;
