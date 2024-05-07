import { ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/supabase";
import { BookType } from "../types";
import { useEffect, useState, ChangeEvent } from "react";
import { useAuth } from "../auth";

interface Props {}

export const Book: React.FC<Props> = () => {
  const [cart, setCart] = useState<BookType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: allBooks, isFetching } = useQuery<BookType[], unknown>({
    queryKey: [],
    queryFn: async () => {
      const { data } = await db
        .from("books")
        .select("*")
        .order("title", { ascending: true });
      return data || [];
    },
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
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    alert("Item added to cart!");
    const error = await db.from("cart").insert([
      { user_id: auth.session?.user.id, book_id: book.book_id },
    ]);
    console.log(error);
  };

  const buyNow = (book: BookType) => {
    // Logic for handling buy now action...
    alert("Buy now functionality is not implemented yet.");
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filterBooks = (books: BookType[], query: string): BookType[] => {
    if (query === "") {
      return books;
    }
  
    const lowerCaseQuery = query.toLowerCase();
    let left = 0;
    let right = books.length - 1;
    const filteredBooks: BookType[] = [];
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const book = books[mid];
  
      if (book) {
        const bookTitle = book.title.toLowerCase();
  
        if (bookTitle.startsWith(lowerCaseQuery)) {
          filteredBooks.push(book);
          left = mid + 1; 
        } else if (bookTitle < lowerCaseQuery) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        break;
      }
    }
  
    return filteredBooks;
  };

  if (isFetching) {
    return null;
  }

  const filteredBooks = searchQuery ? filterBooks(allBooks || [], searchQuery) : allBooks;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative group hidden sm:block">
        <input
          type="search"
          placeholder="Search"
          className="w-[200px]  sm:w-[200px] group-hover:w-[300px] flex transition-all duration-500 px-2 py-1  rounded-full focus:outline-1 focus:border-1 bg-white border-black border-2 bor"
          onChange={handleSearch}
          value={searchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
        {filteredBooks && filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.book_id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={book?.picturebook}
                alt={book?.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
              <h2 className="text-gray-800 text-xl font-semibold mb-2">
                  {searchQuery && book.title.toUpperCase().startsWith(searchQuery.toUpperCase()) ? (
                    <>
                      <b>{book.title.slice(0, searchQuery.length)}</b>
                      {book.title.slice(searchQuery.length)}
                    </>
                  ) : (
                    book.title
                  )}
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
