export const Navbar = () =>  {
    return (
        <div className="bg-slate-300 py-3 flex items-center justify-between mx-auto px-4  border-b-2 " >
           <h1 className="font-semibold text-3xl">Book Worm</h1>
           <ul className="flex">
            <li className="p-4">Home</li>
            <li className="p-4">Books</li>
            <li className="p-4">About us</li>
            <li className="p-4">Contact</li>
            <li className="p-4">Sign in</li>
           </ul>
        </div>
    )
}  
