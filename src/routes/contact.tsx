import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/navbar';
import { Contact } from '../components/Contact'

export const Route = createFileRoute('/contact')({
  component: Component,
});

function Component() {
  return (
    <div className="bg-white h-screen w-">
      <Navbar />
      <Contact/>
    </div>
  )
}