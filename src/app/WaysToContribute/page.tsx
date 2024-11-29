import React from "react";

const WaysToContribute = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('/4.jpg')", // Background image
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-4">Ways to Contribute</h1>
          <p className="text-lg mb-4">You can make a difference by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Making a donation to support TCF&apos;s mission</li>
            <li>Volunteering with TCF</li>
            <li>Spreading awareness about TCF in your community</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center">
        <p>© 2024 Shama Farooq</p>
      </footer>
    </div>
  );
};

export default WaysToContribute;
