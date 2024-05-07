import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


//hompage
export const Route = createFileRoute("/")({
  component: Component,
});

function Component() {
  return (

    <div className="bg-white h-screen w-">
      <Navbar />
      <div>
        <Hero />
      </div>
     
    </div>
  )
}
