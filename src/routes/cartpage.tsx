import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '../components/navbar1';
import AddToCartPage from '../components/addtocart';

export const Route = createFileRoute('/cartpage')({
  component: Component, 
});

function Component() {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <AddToCartPage /> 
    </div>
  );
}

export default Route;
