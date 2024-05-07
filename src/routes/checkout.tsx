import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '../components/navbar';
import { Checkout } from '../components/Checkout'
export const Route = createFileRoute('/checkout')({
  component: Component, 
});

function Component() {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <Checkout />
    </div>
  );
}

export default Route;
