function AboutPage() {
  return (
    <div className="container py-16 px-4" style={{ backgroundImage: "url('12334.jpg')", backgroundSize: "cover", backgroundPosition: "center", 
                                                  backgroundRepeat: "no-repeat", minHeight: "90vh", minWidth: "98.8vw" }}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-left text-white pr-0 md:pr-8 md:pl-20 ml-8 mt-12 relative rounded-xl 
        overflow-hidden py-8"> 
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-5xl mb-8 relative z-10 font-semibold" 
          style={{ fontFamily: "Open Sans, sans-serif" }}>About Us</h1> 
          <p className="text-lg leading-relaxed relative z-10" style={{ fontFamily: "Open Sans, sans-serif", 
          fontWeight: 400 }}> 
            Welcome to Book Worm, your go-to destination for all things literary! At Book Worm,
            we're passionate about books and committed to providing you with a curated selection
            that caters to every reader's taste. From timeless classics to contemporary bestsellers,
            we've got something for everyone. But we're more than just a bookstore; we're a community 
            of book lovers united by our shared love for storytelling. Join us on our journey as we
            celebrate the written word and connect readers from around the world. Happy reading!
          </p>
        </div>
        <div className="max-w-xl ml-24 mt-12 mr-14">
          <img src="bk.jpg" alt="Book Worm" className="w-full max-w-lg" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
