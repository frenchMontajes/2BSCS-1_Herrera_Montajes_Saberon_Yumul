import { createFileRoute } from '@tanstack/react-router'
import Aboutpage from '../components/Aboutpage'
import { Navbar } from '../components/navbar1'

export const Route = createFileRoute('/about')({
  component: Component,
})

function Component() {
  return (
    <div className="bg-white h-screen w-">
      <Navbar />
      <Aboutpage />
    </div>
  )
}