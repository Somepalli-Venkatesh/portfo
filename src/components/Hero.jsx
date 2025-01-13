import React, { useRef } from "react";


import Type from "./Type";
import programmer from "../assets/images/programmer.png";

const socialMediaLinks = [
  "https://www.instagram.com/venkatesh__somepalli?utm_source=qr&igsh=ZjUyam5jdGM5aTFm ",
  "https://github.com/Somepalli-Venkatesh?tab=overview&from=2024-10-01&to=2024-10-02",
  "https://www.linkedin.com/in/venkatesh-somepalli-84663a23b/",
  "https://x.com/Venkate39222289?t=UtH3B2xEzXViqdQXuFV4lA&s=08",
];

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black" // Changed to black background
    >
     
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-orange-500 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span className="text-yellow-300">Venkatesh Somepalli</span> {/* Changed to yellow */}
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-yellow-200"> {/* Changed to a lighter yellow */}
            <Type />
          </h4>
          <button className="btn-primary mt-8 bg-orange-500 hover:bg-orange-600 text-white" onClick={scrollToContact}> {/* Changed button color */}
            Connect with Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-white cursor-pointer" // Changed icon color
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
       <div className="flex-1 flex items-center justify-center h-full">
        <img src={programmer} alt="" className="md:w-2/3 h-auto object-cover" />
      </div>
      
    </section>
   
  );
};

export default Hero;
