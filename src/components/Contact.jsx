import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "venkateshsomepalli0@gmail.com" },
    { logo: "call-outline", text: "+91 6300223042" },
    {
      logo: "location",
      text: "Ongole,Andhra Pradesh, India",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 bg-black text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-orange-500">Me</span>
        </h3>
        <p className="text-yellow-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex flex-col md:flex-row gap-10 max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
          {/* Form Section */}
          <form className="flex flex-col flex-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-md bg-gray-800 text-white border-2 border-transparent focus:border-orange-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-4 rounded-md bg-gray-800 text-white border-2 border-transparent focus:border-orange-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-4 rounded-md bg-gray-800 text-white border-2 border-transparent focus:border-orange-500 transition"
            ></textarea>
            <button className="w-full p-3 bg-orange-500 rounded-md text-white font-semibold hover:bg-orange-600 transition-all duration-300">
              Send Message
            </button>
          </form>

          {/* Contact Information Section */}
          <div className="flex flex-col gap-6">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 items-center relative transition-all duration-300 p-4 rounded-lg"
              >
                <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-orange-500 rounded-full transition-transform duration-300">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                {/* Text is always visible now */}
                <p className="md:text-base text-sm break-words text-white">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
