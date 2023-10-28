import React from "react";

const GoogleMaps = () => {
  const handleGetInTouch = () => {
    window.location.href = "https://wa.me/9677260436";
  };
  return (
    <div className="m-2 p-2 rounded-lg flex-row md:flex">
      <div className="m-2 p-2 w-full md:w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0411860450704!2d72.7722221744062!3d21.190522780499624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db4781a0d65%3A0x8da1587b467bf4d5!2sGalaxy%20Enclave!5e0!3m2!1sen!2sin!4v1698459063749!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full md:w-full flex-col justify-center items-center">
        <div className="flex justify-center items-center md:flex-row">
          <a href="https://wa.me/9677260436">
            <span className="block bg-white rounded-full text-blue-500 text-lg font-bold px-3 py-2 leading-none flex items-center">
              Get in Touch
            </span>
          </a>
        </div>
        <div className="text-xl mt-4 md:text-2xl">
          We'd love to hear from you
        </div>
        <div className="w-full text-md mt-2 md:text-lg mb-4 p-2">
          Whether you have a question about your progress or your doubts, our
          team is ready to guide you.
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
