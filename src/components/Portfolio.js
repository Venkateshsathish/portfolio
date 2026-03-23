import React, { useState } from "react";
import Hull from "../asset/Hullu.png";
import Weather from "../asset/Weather.png";
import TodoList from "../asset/TodoList.png";
import Amazon from "../asset/amazon.png";
import Quziapp from "../asset/Quziapp.png";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: Hull,
      code: "https://github.com/Venkateshsathish/Hulu_Clone",
    },
    {
      id: 2,
      src: Weather,
      code: "",
    },
    {
      id: 3,
      src: TodoList,
      code: "",
    },
    {
      id: 4,
      src: Amazon,
      code: "https://github.com/Venkateshsathish/amazon",
    },
    {
      id: 5,
      src: Quziapp,
      code: "",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of my work right here
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                
                {/* Demo Button */}
                <button
                  onClick={() => setSelectedImage(src)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 rounded"
                >
                  Demo
                </button>

                {/* Code Button */}
                <button
                  onClick={() => code && window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-green-500 rounded"
                >
                  Code
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Modal for Demo Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          
          <div className="relative">
            <img
              src={selectedImage}
              alt="preview"
              className="max-w-[90vw] max-h-[80vh] rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 px-3 py-1 rounded"
            >
              X
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Portfolio;