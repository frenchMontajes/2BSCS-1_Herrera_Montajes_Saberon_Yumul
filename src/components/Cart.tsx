import { ShoppingCart } from "lucide-react";

export const Cart = () => {
  return (
    <div className="ml-80 mt-20">
      <div className="py-3 bg-warning">
        <div className="container flex items-center">
          <h1 className="font-bold text-4xl mr-4"> Your Cart</h1>
          <ShoppingCart className="text-4xl mr-60 mt-2" />
        </div>
      </div>
      <div className="card">
      </div>
    </div>
  );
};
