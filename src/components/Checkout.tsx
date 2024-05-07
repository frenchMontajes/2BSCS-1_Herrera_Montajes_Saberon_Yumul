import { useState, useEffect } from "react";
import { db } from "../lib/supabase";
import { useAuth } from "../auth";
import { BookType } from "../types";

export const Checkout = () => {
  const [cart, setCart] = useState<BookType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const auth = useAuth();

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cart.reduce((acc, book) => acc + book.price, 0);
      setTotalPrice(parseFloat(totalPrice.toFixed(2)));
    };
    calculateTotalPrice();
  }, [cart]);

  const fetchCartItems = async () => {
    try {
      const { data: cartItems } = await db
        .from("cart")
        .select("book_id")
        .eq("user_id", auth.session?.user.id);
      if (!cartItems) return; // Handle case where cartItems is null

      const booksPromises = cartItems.map(async (cartItem) => {
        const { data: book } = await db
          .from("books")
          .select("*")
          .eq("book_id", cartItem.book_id)
          .single();
        return book;
      });

      const books = await Promise.all(booksPromises);

      setCart(books.filter((book) => book !== null));
    } catch (error) {
      console.error("Error fetching cart items:", (error as Error).message);
    }
  };

  const handleCheckout = async () => {
    try {
      if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
      }

      await db.from("cart").delete().eq("user_id", auth.session?.user.id);
      setCart([]);
      alert("Checkout successful!");
    } catch (error) {
      console.error("Error during checkout:", (error as Error).message);
      alert("Error during checkout. Please try again later.");
    }
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl ml-7 font-semibold mb-4">Checkout</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((book) => (
            <div
              key={book.book_id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h2 className="text-3xl ml-7 font-semibold">{book.title}</h2>
              </div>
              <p className="text-gray-600 text-2xl">
                Price: ${book.price.toFixed(2)}
              </p>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <div>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="bg-red-500 hover:bg-red-600 text-white ml-7 px-4 py-2 rounded-md"
                required // Make it required
              >
                <option value="">Select Payment Method</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              <button
                onClick={handleCheckout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 ml-4 rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="flex items-center">
              <p className="text-2xl font-semibold">
                Total Price: ${totalPrice}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="ml-7">No items in cart</p>
      )}
    </div>
  );
};
