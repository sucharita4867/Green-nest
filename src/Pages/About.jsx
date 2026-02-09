import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-11/12 mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-[#0D3C00]  text-4xl font-bold">
            About This Project
          </h1>
          <p className="flex justify-center text-lg mt-2 text-[#848483]">
            Learn more about this React project, its purpose, and the
            technologies used to build it.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            This project is built using
            <span className="font-semibold">React</span>
            to understand component-based architecture, routing, and UI
            development. The main goal is to practice building real-world
            layouts with clean and reusable components.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Navigation between pages is handled using{" "}
            <span className="font-semibold">React Router DOM</span>, allowing
            smooth client-side routing without reloading the browser.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Styling is done with{" "}
            <span className="font-semibold">Tailwind CSS</span>, which helps
            create modern and responsive designs quickly using utility classes.
          </p>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Technologies Used
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                React Router
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                JavaScript (ES6+)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
