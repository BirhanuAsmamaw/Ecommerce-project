"use client"
import useProductStore from "@/store/product";
import ProductCart from "./components/ProductCart";

export default function Home() {
  const products = useProductStore((state) => state.products);

  return (
    <main className="flex flex-col h-fit w-full p-4">
      
    <div className="grid grid-cols-5 grid-rows-1 gap-4">
      {products.map((data) => (
        <ProductCart image={data.image} name={data.name} price={data.price} key={data.name} inCart={data.inCart}/>
      ))}
    </div>
      

     <div className="flex justify-center mt-5">

    
      <nav aria-label="Page navigation example mt-5">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a  href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
         
          <li>
            <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
      </div>
    </main>
  )
}
