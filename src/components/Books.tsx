
export const Books = () => {
    return (
        <div className="container">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className=" p-5 lg:col-span-1 lg:rows-start-1 lg:row-end-[-2] relative">
                <img className= "w-half h-half object-cover rounded-lg"
                       src="/hero.jpg"
                       alt="book1"
                    />
                </div>
            </div>
        </div>
    );
};