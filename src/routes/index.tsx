import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
//import {}

//hompage
export const Route = createFileRoute("/")({
  component: Component,
});

function Component() {
  return (
    <div className="bg-white h-screen w-">
      <Navbar />
      <Hero />
    </div>
  )
}
