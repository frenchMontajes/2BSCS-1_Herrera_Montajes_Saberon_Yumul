function AboutPage() {
    return (
      <div className="container mx-auto py-12 px-4 flex items-center justify-center" style={{ backgroundImage: "url('/book.jpg')", 
      backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="max-w-3xl mx-auto text-center text-black">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to Book Worm, your go-to destination for all things literary! At Book Worm,
            we're passionate about books and committed to providing you with a curated selection
            that caters to every reader's taste. From timeless classics to contemporary bestsellers,
            we've got something for everyone. But we're more than just a bookstore; we're a community
            of book lovers united by our shared love for storytelling. Join us on our journey as we
            celebrate the written word and connect readers from around the world. Happy reading!
          </p>
        </div>
      </div>
    );
  }
  
  export default AboutPage;