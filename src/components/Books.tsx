import { ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/supabase";
import { BookType } from "../types";
import { useEffect, useState } from "react";
import { useAuth } from "../auth";

export const Book = () => {
  const [cart, setCart] = useState<BookType[]>([]);
  const { data, isFetching } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await db.from("books").select("*").returns<BookType[]>();
      return data;
    }
  });

  const auth = useAuth();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (book: BookType) => {
    const updatedCart = [...cart, book]; // Append the new book to the existing cart
    setCart(updatedCart); 
    alert("Item added to cart!");
    const error = await db.from('cart').insert([{ author_id: auth.session?.user.id, book_id: book.book_id }]);
    console.log(error);
  };
  
  const buyNow = (book: BookType) => {
    // Logic for handling buy now action...
    alert("Buy now functionality is not implemented yet.");
  };
  
  if (isFetching) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data ? (
          data.map((book) => (
            <div
              key={book.book_id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
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
                    onClick={() => addToCart(book)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center mr-2"
                  >
                    <ShoppingBag className="w-6 h-6 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => buyNow(book)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};