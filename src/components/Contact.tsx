
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = (abc: { preventDefault: () => void; }) => {
    abc.preventDefault();
    if (!isSubmitting && form.current) {
      setIsSubmitting(true);
      emailjs.sendForm('service_4io8lwd', 'template_dz88lm9', form.current, 'bwh55ZhlrXXbto34T')
        .then(
          (result: { text: any; }) => {
            console.log(result.text);
            setIsSubmitting(false);
            window.alert('Your message has been submitted successfully!');
            window.location.reload(); 
          },
          (error: { text: any; }) => {
            console.log(error.text);
            setIsSubmitting(false);
          }
        );
    } else {
      console.error("Form ref is null or already submitting.");
    }
  };
  return (
    /*DESIGN*/
    <div className="relative bg-cover bg-center h-[calc(100vh-81.6px)] flex items-center justify-between px-40" style={{backgroundImage: "url('/12334.jpg')" }}>
      <div className="card space-y-2 mb-40 mr-20">
        <p className="md:text-6xl sm:text-4xl text-2xl font-bold">Contact Us</p>
        <h1 className="text-xl font-medium mt-1.5 ml-1">Got an issue? Want to send feedback? Let us know.</h1>
      </div>
      
      <div className="card relative bg-cover bg-center h-[calc(100vh-81.6px)] flex flex-col px-50"> 
        <div className="mt-20 mr-20">
          <h1 className="text-3xl font-bold mb-10 ml-10 text-center">Send Us a Message</h1>
          
          <form  ref={form} onSubmit={sendEmail}> {/* Attach onSubmit event */}
            <div className="flex flex-wrap">
              <div>
                {/* NAME BOX */}
                <label className="block mb-2">Your Name:</label>
                <input type="text" name="from_name" placeholder="Name" className="w-[285px] p-4 rounded-lg bg-white border-black border-2" />
              </div>
              <div className="w-full sm:w-1/2 pl-4 mt-0"> 
                {/* EMAIL BOX */}
                <label className="block mb-2">Your Email:</label>
                <input type="email" name="user_email" placeholder="Email" className="w-[330px] p-4 rounded-lg bg-white border-black border-2" required />
              </div>
            </div>
            <div> {/* MESSAGE BOX */}
              <label className="block mt-2">Your Message:</label>
              <textarea name="message" placeholder="Enter message" className="mt-2 w-[660px] p-4 rounded-lg bg-white border-black border-2" />  
            </div>
            <div>
              {/* Submit button */}
              <button
                type="submit"
                value="Send"
                className="mt-2 px-4 py-2 bg-red-400 text-black rounded-lg border-2 border-black hover:bg-red-900"
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
