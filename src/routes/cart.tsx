import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/navbar'
import { Cart } from '../components/Cart'


export const Route = createFileRoute('/cart')({
  component: Component,
})

function Component() {
  return (
    <div className="bg-white h-screen w-">
      <Navbar />
      <Cart/>
    </div>
  )
}