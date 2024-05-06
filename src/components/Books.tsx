import { useState } from "react";
import { ShoppingBag } from "lucide-react";

export const Book = () => {
  // Initial list of books
  const initialBooks = [
    { id: 1, title: "Book 1", price: 19.99, imageUrl: "./12334.jpg" },
    { id: 2, title: "Book 2", price: 24.99, imageUrl: "./bk.jpg" },
    { id: 2, title: "Book 3", price: 24.99, imageUrl: "./bkk.jpg" },
    // Add more initial books as needed
  ];

  // State to store the list of books
  const [books, setBooks] = useState(initialBooks);
  // Function to add a new book
  const addNewBook = () => {
    const newBook = {
      id: books.length + 1,
      title: `Book ${books.length + 1}`,
      price: Math.random() * 50, // Generate a random price
      imageUrl: "/placeholder.jpg", // Replace with actual image URL
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">For Sale</h1>
        <button
          onClick={addNewBook}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
        >
          Add New Book
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-gray-800 text-xl font-semibold mb-2">
                {book.title}
              </h2>
              <p className="text-gray-600">Price: ${book.price.toFixed(2)}</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => {
                    alert("Item added to cart!");
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center"
                >
                  <ShoppingBag className="w-6 h-6 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    alert("Item bought now!");
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center"
                >
                  <ShoppingBag className="w-6 h-6 mr-2" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
