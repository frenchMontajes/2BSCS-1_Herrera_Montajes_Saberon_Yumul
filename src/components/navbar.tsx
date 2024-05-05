import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <div className="bg-slate-300 py-3 flex items-center justify-between mx-auto px-4 border-b-2">
      <div>
        <h1 className="font-semibold text-3xl">Book Worm</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="p-4 hover:text-blue-700 hover:border-blue-700 cursor-pointer "><Link to="/">Home</Link></li>
          <li className="p-4 hover:text-blue-700 hover:border-blue-700 cursor-pointer "><Link to="/books">Books</Link></li>
          <li className="p-4 hover:text-blue-700 hover:border-blue-700 cursor-pointer "><Link to="/about">About</Link></li>
          <li className="p-4 hover:text-blue-700 hover:border-blue-700 cursor-pointer"><Link to="/contact">Contact</Link></li>
          <li className="p-4 hover:text-blue-700 hover:border-blue-700 cursor-pointer "><Link to="/auth/login">Sign in</Link></li>
        </ul>
      </div>
    </div>
  ); 
};
