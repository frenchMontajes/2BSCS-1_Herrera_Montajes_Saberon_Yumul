

export const Hero = () => {
    return(
        <div className="relative bg-cover bg-center h-[calc(100vh-81.6px)] flex items-center justify-between px-40" style={{backgroundImage: "url('/12334.jpg')" }}>
            <div className="space-y-2">
                <div>
                <p className="md:text-6xlxl sm:text-4xl text-2xl font-bold">Discover more</p>
                <h1 className="font-medium">Discover your next adventure with us! Dive into a world of possibilities by shopping our curated collection of captivating books today</h1>
                </div>
                    <div className="relative space-y-1"> 
                        <div className="">
                        <button className="bg-red-400 w-[300px] rounded-md font-bold border-2 border-black">Shop now</button>
                        </div>
                    </div>
            </div>
            <img className="rounded-2xl"
                src="/hero.jpg"
                alt="hero"
                height={500}
                width={500}
            />
        </div>
    )
}