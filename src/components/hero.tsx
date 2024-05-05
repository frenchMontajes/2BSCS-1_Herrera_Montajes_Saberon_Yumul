export const Hero = () => {
    return(
        <div className="bg-white h-[calc(100vh-81.6px)] flex items-center justify-between px-32">
            <div className="space-y-2">
                <div>
                <p className="md:text-6xlxl sm:text-4xl text-2xl font-bold">The City of Golden Bones</p>
                <h1 className="">your next great read is here</h1>
                </div>
                <button className="bg-slate-300 w-[300px] rounded font-bold">Shop now</button>
                <form className="w-[440px] relative">
                    <div className="relative">
                        <input type="search" placeholder="type here" className=" w-full p-4 rounded bg-slate-300"></input>
                    </div>

                </form>
            </div>
            <img
                src="/hero.jpg"
                alt="hero"
                height={500}
                width={500}
            />

        </div>
    )
}