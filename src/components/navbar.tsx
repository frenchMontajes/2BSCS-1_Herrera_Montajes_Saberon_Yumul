import { useEffect, useState } from "react";
import { db } from "../lib/supabase";
import { ShoppingCart, User } from "lucide-react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Books",
    link: "/books",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const redirectToCartPage = () => {
  window.location.href = "/cartpage";
};

export const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    async function fetchCartCount() {
      try {
        const { data: cartItems, error } = await db.from("cart").select("book_id", { count: "exact" });
        if (error) {
          console.error("Error fetching cart count:", error);
          return;
        }
        setCartCount(cartItems?.length || 0);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    }
    fetchCartCount();
  }, []);

  return (
    <div>
      <div className="bg-red-200 py-3 flex items-center justify-between mx-auto px-4 border-b-2">
        <div>
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              {" "}
              BookWorm{" "}
            </a>
          </div>
        </div>
        <div className="flex justify-between items-between-center gap-4">
          <div>
            <button
              onClick={redirectToCartPage}
              className="bg-red-400 hover:bg-red-900 duration-500 text-black py-1 px-4 rounded-full flex items-center gap-3 group relative"
            >
              <ShoppingCart className="text-xl text-black drop-shadow-sm" />
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => db.auth.signInWithOAuth({ provider: "google" })}
              className="bg-red-400  hover:bg-red-900 duration-500 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <User className="text-xl text-black drop-shadow-sm" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 hover:text-sky-600 duration-500">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
