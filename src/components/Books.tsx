import { Search, ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/supabase";
import { BookType } from "../types";
import { useEffect, useState } from "react";

export const Book = () => {
  const [cart, setCart] = useState<BookType[]>([])
  const { data, isFetching } = useQuery({
    queryKey: [],
    queryFn: async () =>  {
        const { data } = await db.from("books").select("*").returns<BookType[]>();
        return data;
    }
  });
  useEffect(()=>{console.log (cart)},[cart])
  if(isFetching) {
    return null;
  }

  const redirectToCartPage = () => {
    // Redirect to the cart page
    window.location.href = "/cart";
  };

  return (
    <div className="container mx-auto px-4 py-8"> 
     <div className="relative group hidden sm:block">
        <input type="search" placeholder="Search" className=" w-[200px]  sm:w-[200px] group-hover:w-[300px] flex transition-all duration-500 px-2 py-1  rounded-full focus:outline-1 focus:border-1 bg-white border-black border-2 bor"></input>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
        {data? data.map((book) => (
          <div
            key={book.book_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={book.picturebook}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 text-xl font-semibold mb-2">
                {book.title}
              </h2>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => {
                    setCart([...cart, book])
                    alert("Item added to cart!");
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center"
                >
                  <ShoppingBag className="w-6 h-6 mr-2" />
                  Add to Cart
                </button>
                {/* Call redirectToCartPage function when Buy Now is clicked */}
                <button
                  onClick={redirectToCartPage}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center"
                >
                  <ShoppingBag className="w-6 h-6 mr-2" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )): null}
      </div>
    </div>
  );
};
