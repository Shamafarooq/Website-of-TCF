import React from "react";

const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "url('/3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">About TCF</h1>
          <p className="text-lg mb-4">
            The Citizens Foundation (TCF) is a leading education-focused
            non-profit organization in Pakistan, providing quality education to
            over <b>280,000 children</b> across <b>1,652 schools</b>.
          </p>
          <p className="text-lg">
            TCF&apos;s mission is to foster intellectual, social, and moral development
            in children, empowering them to become agents of positive change.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center mt-auto">
        <p>© 2024 Shama Farooq </p>
      </footer>
    </div>
  );
};

export default About;
