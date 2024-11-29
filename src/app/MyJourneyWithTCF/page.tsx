import React from "react";

const Journey = () => {
  return (
    <div
      className="h-screen flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('/5.jpg')", // Add your image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg text-white text-center">
          <h1 className=" text-4xl font-bold mb-4">My Journey with TCF</h1>
          <p className="text-lg">
            As a proud Teacher of The Citizens Foundation, I have witnessed the transformative power of education. I invite you to join me in making a difference in the lives of underprivileged children by supporting TCF&apos;s mission.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center">
        <p>© 2024 Shama Farooq</p>
      </footer>
    </div>
  );
};

export default Journey;
