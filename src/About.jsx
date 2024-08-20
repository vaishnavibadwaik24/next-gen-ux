import React from "react";
import AUimage1 from "./images/AUimage1.png";
import AUimage2 from "./images/AUimage2.png";

export default function About() {
  return (
  //  Start About
    <div className="flex flex-col md:flex-row items-center pt-32 px-24 justify-between gap-10 p-8 bg-white">
      <div className="flex-1">
        <h2
          className="text-purple-600 text-6xl font-bold mb-5"
          style={{ color: "rgba(124, 65, 163, 1)" }}
        >
          About Us
        </h2>
        <h3 className="text-4xl font-bold mb-5 text-black">
          <span className="text-orange-400"> NextGen UX </span>Providing The
          Best Opportunities To The Students Around The Globe.
        </h3>
        <p className="text-black text-base mb-4" style={{ textIndent: "20px" }}>
          NextGen UX is a UI/UX Design Academy based in California, dedicated to
          providing comprehensive training and consulting in User Experience
          (UX) and User Interface (UI) Design. Founded in 2024, the academy is
          driven by a passion for UI/UX Design and Human-Computer Interaction.
        </p>
        <p
          className="text-gray-700 text-base mb-6"
          style={{ textIndent: "20px" }}
        >
          At NextGen UX, we empower individuals to build a solid foundation in
          UI/UX design through cutting-edge courses designed to enhance your
          skills and broaden your understanding of the field.
        </p>
        <a
          href="#join-us"
          className="inline-block bg-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          style={{ backgroundColor: "rgba(124, 65, 163, 1)" }}
        >
          Join Us &rarr;
        </a>
      </div>
      <div className="flex-1 flex flex-col gap-5 relative">
        <div className="bg-gray-100 flex flex-col gap-5">
          <div className="w-full h-52 rounded-lg overflow-hidden bg-gray-100 relative">
            <img
              src={AUimage1}
              alt="Image"
              className="absolute right-0 top-0 w-3/4 h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-52 rounded-lg overflow-hidden bg-gray-100 relative">
            <img
              src={AUimage2}
              alt="Image"
              className="absolute left-0 bottom-0 w-3/4 h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  //  End About

 
  );
}
