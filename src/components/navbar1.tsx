import { db } from "../lib/supabase";
import { Search, ShoppingCart, User } from "lucide-react";


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
]

export const Navbar = () => {
  return (
    <div>
    <div className="bg-red-200 py-3 flex items-center justify-between mx-auto px-4 border-b-2">
      <div>
        <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2"> BookWorm </a>
        </div>
        
      </div>
      <div className="flex justify-between items-between-center gap-4">
        <div className="relative group hidden sm:block">
        <input type="search" placeholder="Search" className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-500 px-2 py-1 rounded-full focus:outline-none focus:border-1 bg-white border-black border-0"></input>
        <Search
        className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
        <div>
          <a href="/cartpage" className="bg-red-400 text-black py-1 px-4 rounded-full flex items-center gap-3 group">
          <ShoppingCart className="text-xl text-black drop-shadow-sm"/>
          </a>
        </div>
        <div>
        <button onClick={()=> db.auth.signInWithOAuth({provider: 'google'})} 
          className="bg-red-400  text-black py-1 px-4 rounded-full flex items-center gap-3 group">
          <User className="text-xl text-black drop-shadow-sm"/>
          </button>
        </div> 
      </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4"> 
        { Menu.map((data) => (
          <li key={data.id}>
            <a href={data.link} className="inline-block px-4 hover:text-sky-600 duration-500">{data.name}</a>
          </li>
        ))
        }
        </ul>
      </div>
    </div>
  ); 
};
