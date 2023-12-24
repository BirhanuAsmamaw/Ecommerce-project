import { create } from 'zustand';


const dummyData : Product[] = [
  {
    name: 'Shoe 1',
    image: 'shoe.jpg',
    price: '$49.99',
    inCart: false,
  },
  {
    name: 'Shoe 2',
    image: 'shoe11.jpg',
    price: '$59.99',
    inCart: false,
  },
  {
    name: 'Shoe 3',
    image: 'shoe2.jpg',
    price: '$69.99',
    inCart: false,
  },
  {
    name: 'Shoe 4',
    image: 'shoe3.jpg',
    price: '$79.99',
    inCart: false,
  },
  {
    name: 'Shoe 5',
    image: 'shoe4.jpg',
    price: '$89.99',
    inCart: false,
  },
  {
    name: 'Shoe 6',
    image: 'shoe5.jpg',
    price: '$99.99',
    inCart: false,
  },
  {
    name: 'Shoe 7',
    image: 'shoe6.jpg',
    price: '$109.99',
    inCart: false,
  },
  {
    name: 'Shoe 8',
    image: 'shoe7.jpg',
    price: '$119.99',
    inCart: false,
  },
  {
    name: 'Shoe 9',
    image: 'shoe8.jpg',
    price: '$129.99',
    inCart: false,
  },
  {
    name: 'Shoe 10',
    image: 'shoe9.jpg',
    price: '$139.99',
    inCart: false,
  },
];

type State = {
  products: Product[];
  carts: Product[];
  pagination: {
    currentPage: number;
    pageSize: number;
  };
};

type Actions = {
  addToCart: (productName: string) => void;
  removeFromCart: (productName: string) => void;
  getProducts: () => Product[];
  goToPrevPage: () => void;
  goToNextPage: () => void;
};

const useProductStore = create<State & Actions>((set, get) => ({
  products: dummyData,
  carts: [],
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
  addToCart: (productName) => {
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.name === productName) {
          return { ...product, inCart: true };
        }
        return product;
      });

      return { products: updatedProducts };
    });
  },
  removeFromCart: (productName) => {
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.name === productName) {
          return { ...product, inCart: false };
        }
        return product;
      });

      return { products: updatedProducts };
    });
  },
  getProducts: () => {
    const { currentPage, pageSize } = get().pagination;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return get().products.slice(startIndex, endIndex);
  },
  goToPrevPage: () => {
    set((state) => ({
      pagination: {
        ...state.pagination,
        currentPage: state.pagination.currentPage - 1,
      },
    }));
  },
  goToNextPage: () => {
    set((state) => ({
      pagination: {
        ...state.pagination,
        currentPage: state.pagination.currentPage + 1,
      },
    }));
  },
}));

export default useProductStore;