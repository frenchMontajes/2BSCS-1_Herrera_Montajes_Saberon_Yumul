import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "/book1.png";
import Image2 from "/book2.png";
import Image3 from "/book3.png";
import Image4 from "/book4.png";
import Image5 from "/book5.png";

export const Hero = () => {
  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "The Skyfarer's Codex",
      description:
        "In a world where the skies are choked with perpetual storms and the land is ravaged by monstrous creatures, humanity clings to survival within fortified sky-cities. Aeris, arebellious young mechanic with a knack for tinkering, stumbles upon a hidden chambercontaining a cryptic journal- The Skyfarer's Codex.",
    },
    {
        id: 2,
        img: Image2,
        title: "Echoes of the Deep",
        description:
          "Marine biologist Dr. Anya Rao has dedicated her life to studying the mysteries of the Mariana Trench, the deepest point on Earth. When a series of strange sonar pings erupt from the inky depths, Anya becomes obsessed with unraveling the source. ",
      },
      {
        id: 3,
        img: Image3,
        title: "The House with No Memories",
        description:
          "Evelyn Green inherits a sprawling Victorian mansion on the windswept coast of Maine. The house has been abandoned for decades, shrouded in local legends of a tragic family and a dark secret. Driven by a yearning to understand her own enigmatic past, Evelyn decides to renovate the house. As she delves deeper into its history, she uncovers a series of cryptic letters hidden within the walls.",
      },
      {
        id: 4,
        img: Image4,
        title: "The Color of Dusk",
        description:
          "Set against the backdrop of a once-thriving steel town on the brink of collapse, The Color of Dusk tells the story of two estranged brothers, Leo and Michael Ricci. Years ofmresentment and simmering tensions have driven them apart. Leo, the elder brother, is a proud union steelworker, clinging fiercely to the fading dream of the town's past. ",
      },
      {
        id: 5,
        img: Image5,
        title: "Symphony of Fireflies",
        description:
          "Set in the vibrant heart of 1920s Shanghai, Symphony of Fireflies tells the story of Meilin, a gifted young violinist struggling to find her voice in a world that expects her to conform. Torn between her passion for music and the demands of her wealthy family, Meilin feels trapped in a gilded cage. Her world is turned upside down when she meets Kai, a charismatic revolutionary fighting for social change.",
      },
      
  ];

  // Ensure autoplay is enabled
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true, // Make sure this is set to true
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="relative bg-center bg-size flex items-center justify-between px-40" style={{ backgroundImage: "url('12334.jpg')", backgroundSize: "cover", 
    backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: "90vh", minWidth: "98.8vw"}}>
      <div className="relative overflow-hidden flex justify-center items-center dark-text-white duration-500">
        <div className="container pb-8 sm:pb-0">
          <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-lg"></div> {/* Overlay */}
          <Slider {...sliderSettings} > 
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-3">{data.title}</h1>
                    <p className="text-sm text-justify text-white px-3">{data.description}</p>
                    <div className="px-3">
                      <button className="bg-red-300 hover:scale-105 duration-300 text-black py-2 px-4 rounded-full">Shop Now</button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img src={data.img} className="w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto" alt={`Book ${data.id}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
