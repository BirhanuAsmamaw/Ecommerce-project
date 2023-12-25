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
  // {
  //   name: 'Shoe 6',
  //   image: 'shoe5.jpg',
  //   price: '$99.99',
  //   inCart: false,
  // },
  // {
  //   name: 'Shoe 7',
  //   image: 'shoe6.jpg',
  //   price: '$109.99',
  //   inCart: false,
  // },
  // {
  //   name: 'Shoe 8',
  //   image: 'shoe7.jpg',
  //   price: '$119.99',
  //   inCart: false,
  // },
  // {
  //   name: 'Shoe 9',
  //   image: 'shoe8.jpg',
  //   price: '$129.99',
  //   inCart: false,
  // },
  // {
  //   name: 'Shoe 10',
  //   image: 'shoe9.jpg',
  //   price: '$139.99',
  //   inCart: false,
  // },
];

type State = {
  products: Product[];
  carts: Product[];
  totalPrice: number;
};

type Actions = {
  addToCart: (productName: string) => void;
  removeFromCart: (productName: string) => void;
  getProducts: () => Product[];
};

const useProductStore = create<State & Actions>((set, get) => ({
  products: dummyData,
  carts: [],
  totalPrice: 0,
  addToCart: (productName) => {
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.name === productName) {
          return { ...product, inCart: true };
        }
        return product;
      });

      const selectedProduct = state.products.find((product) => product.name === productName);

      if (selectedProduct) {
        const newProductState = { ...selectedProduct, inCart: true };
        const newTotalPrice = state.totalPrice + parsePrice(selectedProduct.price);
        return {
          products: updatedProducts,
          carts: [...state.carts, newProductState],
          totalPrice: newTotalPrice,
        };
      }

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

      const removedProduct = state.carts.find((product) => product.name === productName);

      if (removedProduct) {
        const newTotalPrice = state.totalPrice - parsePrice(removedProduct.price);
        const updatedCarts = state.carts.filter((product) => product.name !== productName);
        return { products: updatedProducts, carts: updatedCarts, totalPrice: newTotalPrice };
      }

      return { products: updatedProducts };
    });
  },
  getProducts: () => {
    return get().products;
  },
}));

export default useProductStore;

// Helper function to parse the price string and extract the numeric value
function parsePrice(price: string): number {
  const numericValue = price.replace(/[^0-9.-]+/g, '');
  return parseFloat(numericValue);
}