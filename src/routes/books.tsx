import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/navbar';
import {Books} from "../components/Books"

export const Route = createFileRoute('/books')({
  component: Component,
});

function Component() {
  return (
    <div className="bg-white h-screen w-">
      <Navbar />
      <Books />
    </div>
  )
}