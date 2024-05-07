
const redirectToBookPage = () => {
  window.location.href = "/books";
};
    

export const Hero = () => {
    return(
        <div>
             <div className="relative bg-cover bg-center  h-[600px] flex items-center justify-between px-40" style={{backgroundImage: "url('/12334.jpg')" }}>
            <div className="space-y-2">
                <div className="relative bg-cover w-[500px] bg-black opacity-50 rounded-lg">
                <p className="md:text-6xlxl sm:text-4xl text-2xl text-white font-bold">Discover more</p>
                <h1 className="font-medium text-white">Discover your next adventure with us! Dive into a world of possibilities by shopping our curated collection of captivating books today</h1>
                </div>
                    <div className="relative space-y-1"> 
                        <div className="">
                        <button className="bg-red-400 w-[300px] hover:bg-red-900 duration-500 rounded-md font-bold cursor-pointer  " onClick={redirectToBookPage}>Shop now</button>
                        </div>
                    </div>
            </div>
            <img className="rounded-2xl w-[400px]"
                src="/hero.jpg"
                alt="hero"
                height={500}
                width={500}
            />
        </div>

        </div>
    
    )
}