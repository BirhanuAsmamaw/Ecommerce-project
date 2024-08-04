import useProductStore from "@/store/product";

interface productProp {
  image: string;
  name: string;
  price: string;
  inCart: boolean;
}
const ProductCart = ({ image, name, price, inCart }: productProp) => {
  const addToCart = useProductStore((state) => state.addToCart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  
  const handleAddToCart = () => {
    addToCart(name);
  }
  const handleRemoveFromCart = () => {
    removeFromCart(name);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg h-64 w-full object-cover" src={`/images/${image}`} alt="" />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
        <a
          onClick={inCart ? handleRemoveFromCart : handleAddToCart}
          href="#"
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${inCart ? "bg-red-700 rounded-lg hover:bg-red-800" : "bg-blue-700 rounded-lg hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </a>
      </div>
    </div>
  );
};

export default ProductCart;
