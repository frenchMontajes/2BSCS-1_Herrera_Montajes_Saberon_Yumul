import React from 'react';
export const Contact = () => {
  return (
    <div className="relative bg-cover bg-center h-[calc(100vh-81.6px)] flex items-center justify-between px-40" style={{backgroundImage: "url('/12334.jpg')" }}>
      <div className="card space-y-2 mb-40 mr-20">
          <p className="md:text-6xl sm:text-4xl text-2xl font-bold">Contact Us</p>
          <h1 className="text-xl font-medium mt-1.5 ml-1">Got an issue? Want to send feedback? Let us know.</h1>
      </div>
      
      <div className="card relative bg-cover bg-center h-[calc(100vh-81.6px)] flex flex-col px-50"> 
        <div className="mt-20 mr-20">
          <h1 className="text-3xl font-bold mb-10 ml-10 text-center">Send Us a Message</h1>
          <div className="flex flex-wrap">
            <div>
              {/* NAME BOX */}
              <label htmlFor="user_name" className="block mb-2">Your Name:</label>
              <input name="Name" id="user_name" placeholder="Name" className="w-[285px] p-4 rounded-lg bg-white border-black border-2" />
            </div>
            <div className="w-full sm:w-1/2 pl-4 mt-0"> 
              {/* EMAIL BOX */}
              <label htmlFor="user_email" className="block mb-2">Your Email:</label>
              <input name="Email" id="user_email" placeholder="Email" className="w-[330px] p-4 rounded-lg bg-white border-black border-2" required />
            </div>
          </div>
          <div> {/* MESSAGE BOX */}
            <label htmlFor="user_message" className="block mt-2">Your Message:</label>
            <textarea id="user_message" name="message" placeholder="Enter message" className="mt-2 w-[660px] p-4 rounded-lg bg-white border-black border-2" />  
          </div>
          <div>
            {/* Submit button */}
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-slate-300 text-black rounded-lg border-2 border-black hover:bg-slate-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
