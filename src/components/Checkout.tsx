import React, { useState, useEffect } from "react";
import { PostgrestResponse, PostgrestError } from "@supabase/supabase-js";
import { db } from "../lib/supabase";
import { BookType } from "../types";
import Route from "../routes/checkout";


export const Checkout: React.FC = () => {
  const [cart, setCart] = useState<BookType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const search = Route.useSearch();

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce((acc, book) => acc + book.price, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart]);

  const fetchCartItems = async () => {
    try {
      const { data: fetchedBooks, error: booksError }: PostgrestResponse<BookType> =
        await db.from("books").select("*").in("book_id", search.selectedItems.split(','));

      if (booksError) throw booksError;

      if (!fetchedBooks) return;

      setCart(fetchedBooks);

    } catch (error) {
      console.error("Error fetching cart items:", (error as PostgrestError).message);
    }
  };


  const handleCheckout = async () => {
  try {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setCart([]);

    const { error } = await db.from("cart").delete().in("book_id", search.selectedItems.split(","))

    if (error) {
      console.error("Error during checkout:", (error as PostgrestError).message);
      fetchCartItems(); 
      alert("Error during checkout. Please try again later.");
      return;
    }

    alert("Checkout successful!");
  } catch (error) {
    console.error("Error during checkout:", error);
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
                required
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
                Total Price: ${totalPrice.toFixed(2)}
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
