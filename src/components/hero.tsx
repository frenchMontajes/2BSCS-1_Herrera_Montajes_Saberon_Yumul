export const Hero = () => {
    return(
        <div className="relative bg-cover bg-center h-[calc(100vh-81.6px)] flex items-center justify-between px-40" style={{backgroundImage: "url('/12334.jpg')" }}>
            <div className="space-y-2">
                <div>
                <p className="md:text-6xl sm:text-4xl text-2xl font-bold">Discover more</p>
                <h1 className="font-medium">Discover your next adventure with us! Dive into a world of possibilities by shopping our curated collection of captivating books today</h1>
                </div>
                <form className="h-[180px] relative">
                    <div className="relative space-y-1">
                        <input type="search" placeholder="type here" className=" w-[600px] p-4 rounded-lg bg-white border-black border-2"></input> 
                        <div className="">
                        <button className="bg-slate-300 hover:bg-slate-400 w-[300px] rounded-md font-bold border-2 border-black">Shop now</button>
                        </div>
                    </div>
                </form>
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