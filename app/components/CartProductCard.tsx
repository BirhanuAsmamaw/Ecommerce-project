import useProductStore from "@/store/product";

interface productProp {
    image: string;
    name: string;
    price: string;
    inCart: boolean;
  }
const CartProduct = ({ image, name, price, inCart }: productProp) => {
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const handleRemoveFromCart = () => {
        removeFromCart(name);
      };
    return ( 
        <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src={`/images/${image}`}  alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center"/>
        </div>

        <div className="ml-4 flex flex-1 flex-col">
            <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                <a href="#">{name}</a>
                </h3>
                <p className="ml-4">{price}</p>
            </div>
        
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
           

            <div className="flex">
                <button onClick={handleRemoveFromCart} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
            </div>
        </div>
        </li>
     );
}
 
export default CartProduct;