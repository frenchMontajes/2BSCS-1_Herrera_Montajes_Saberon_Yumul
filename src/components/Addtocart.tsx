import { useState, useEffect } from 'react'; 
import { db } from '../lib/supabase'; 
import { CheckType } from '../types';
import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';


const AddToCartPage = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const cartQuery = useQuery<CheckType[], unknown>({
    queryKey: [],
    queryFn: async () => {
      const { data, error } = await db.from("cart").select("*, books!inner(*)");
      
      if(error) return [];
      console.log(data);
      return data
    },
  });

  if(cartQuery.isFetching) return null;

  const removeFromCart = async (bookId: number) => {
    try {
      const { error } = await db.from('cart').delete().eq('book_id', bookId);
      if (error) {
        console.error("Error deleting book from database:", error);
      }
      await cartQuery.refetch()
    } catch (error) {
      console.error("Error deleting book from database:", error);
    }
  };

  const toggleSelection = (bookId: number) => {
    if (selectedItems.includes(bookId)) {
      setSelectedItems(selectedItems.filter(id => id !== bookId));
    } else {
      setSelectedItems([...selectedItems, bookId]);
    }
  };


  return cartQuery.data ? (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display the items in the cart */}
        {cartQuery.data.map((book) => (
          <div key={book.book_id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <button onClick={() => removeFromCart(book.book_id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">Remove</button>
              <input
                type="checkbox"
                checked={selectedItems.includes(book.book_id)}
                onChange={() => toggleSelection(book.book_id)}
                className="ml-auto"
              />
            </div>
            <img src={book.books.picturebook} alt={book.books.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-gray-800 text-xl font-semibold mb-2">{book.books.title}</h2>
              <p className="text-gray-600 font-medium">Price: ${book.books.price}</p>
            </div>
          </div>
        ))}   
      </div>
      {/* Checkout button */}
      {cartQuery.data.length > 0 && (
        <div className="mt-8">
          <Link to='/checkout' search ={{selectedItems: selectedItems.join(',')}} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md">
            Checkout Selected Items
          </Link>
        </div>
      )}
    </div>
  ): null
};

export default AddToCartPage;
