import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import Image1 from "/book1.png";
import Image2 from "/book2.png";
import Image3 from "/book3.png";

export const Hero = () => {
  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Discover more",
      description:
        "Discover your next adventure with us! Dive into a world of possibilities by shopping our curated collection of captivating books today.",
    },
    {
      id: 2,
      img: Image2,
      title: "Discover more",
      description:
        "Discover your next adventure with us! Dive into a world of possibilities by shopping our curated collection of captivating books today.",
    },
    {
      id: 3,
      img: Image3,
      title: "Discover more",
      description:
        "Discover your next adventure with us! Dive into a world of possibilities by shopping our curated collection of captivating books today.",
    },
  ];

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="relative bg-cover bg-center h-[600px] flex items-center justify-between px-40" style={{ backgroundImage: "url('/12334.jpg')" }}>
      <div className="relative overflow-hidden flex justify-center items-center dark-text-white duration-500">
        <div className="container pb-8 sm:pb-0">
          <Slider {...sliderSettings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                    <p className="text-sm">{data.description}</p>
                    <div>
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
