import { useState, useEffect } from 'react'; 
import { db } from '../lib/supabase'; 
import { BookType } from '../types';

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState<BookType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = async (bookId: number) => {
    // Remove the book from the local state (cartItems)
    const updatedCart = cartItems.filter((book) => book.book_id !== bookId);
    setCartItems(updatedCart);
  
    // Remove the book from the database
    try {
      const { error } = await db.from('cart').delete().eq('book_id', bookId);
      if (error) {
        console.error("Error deleting book from database:", error);
      }
    } catch (error) {
      console.error("Error deleting book from database:", error);
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display the items in the cart */}
        {cartItems.map((book) => (
          <div key={book.book_id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={book.picturebook} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-gray-800 text-xl font-semibold mb-2">{book.title}</h2>
              {/* Button to remove the book from the cart */}
              <button onClick={() => removeFromCart(book.book_id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCartPage;
