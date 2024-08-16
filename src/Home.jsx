import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaClock } from "react-icons/fa";
import logo from "./logo.png";
import logolight from "./logo-light.png";
import Slider from "react-slick";
import Frame1 from "./images/Frame1.png";
import Frame2 from "./images/Frame2.png";
import Frame3 from "./images/Frame3.png";
import Avatar1 from "./images/Avatar1.png";
import Avatar2 from "./images/Avatar2.png";
import Image1 from "./images/Image1.jpg";
import Image2 from "./images/Image2.jpg";
import Image3 from "./images/Image3.jpg";
import Avatar3 from "./images/Avatar3.png";
import Avatar4 from "./images/Avatar4.png";
import Avatar5 from "./images/Avatar5.png";
import BlogImage1 from "./images/BlogImage1.png";
import BlogImage2 from "./images/BlogImage2.png";
import BlogImage3 from "./images/BlogImage3.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [centerIndex, setCenterIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setCenterIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CourseCard = ({
    image,
    duration,
    category,
    title,
    description,
    rating,
    reviews,
    instructor,
    price,
  }) => {
    return (
      <div className="bg-white rounded-lg drop-shadow-lg p-4 m-3">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full px-1"
            style={{ width: "300px", height: "210px" }}
          />
          <div className="absolute top-2 right-3 bg-white rounded py-1 px-2 flex items-center shadow-lg">
            <FaClock className="text-purple-800 mr-1" />
            <span className="text-gray-800 text-sm font-semibold">
              {duration}
            </span>
          </div>
        </div>
        <div className="mt-6 px-2">
          <p
            className="text-sm font-semibold"
            style={{ color: "rgba(136, 73, 178, 0.94)" }}
          >
            {category}
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-2">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-sm">{rating}</span>
            <span className="text-gray-600 ml-2 text-sm">({reviews})</span>
          </div>
          <div className="flex items-center mt-6 pb-3">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-9 h-9 rounded-full"
            />
            <div className="ml-4">
              <p className="text-gray-900 text-sm font-semibold">
                {instructor.name}
              </p>
              <p className="text-gray-500 text-sm">
                {instructor.enrolled} Enrolled
              </p>
            </div>
            <div
              className="ml-auto text-2xl font-bold"
              style={{ color: "rgba(124, 65, 163, 1)" }}
            >
              ${price}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const courses = [
    {
      image: Image1,
      duration: "08 hr 12 mins",
      category: "Category",
      title: "Course Title 1",
      description: "Course description here Lorem Ipsum dolor is dummy text.",
      rating: "4.3 ★★★★★",
      reviews: "16,000",
      instructor: { name: "John Doe", enrolled: "20,000", image: Avatar3 },
      price: "20",
    },
    {
      image: Image2,
      duration: "06 hr 3 mins",
      category: "Category",
      title: "Course Title 2",
      description: "Course description here Lorem Ipsum dolor is dummy text.",
      rating: "3.9 ★★★★★",
      reviews: "500",
      instructor: { name: "John Doe", enrolled: "1000", image: Avatar4 },
      price: "10",
    },
    {
      image: Image3,
      duration: "01 hr 2 mins",
      category: "Category",
      title: "Course Title 3",
      description: "Course description here Lorem Ipsum dolor is dummy text.",
      rating: "4.2 ★★★★★",
      reviews: "125",
      instructor: { name: "John Doe", enrolled: "2000", image: Avatar5 },
      price: "11.50",
    },
  ];

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings1: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings1: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings1: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const TutorCard = ({ name, title, description, imageUrl }) => (
    <div className="bg-gray-50 p-6 text-center">
      <img
        src={Avatar1}
        alt={name}
        className="rounded-full mx-auto mb-3"
        style={{ width: "70px", height: "70px" }}
      />
      <h3 className="text-lg font-semibold text-black">{name}</h3>
      <p className="text-purple-600" style={{ color: "rgba(124, 65, 163, 1)" }}>
        {title}
      </p>
      <p className="text-gray-500 mt-1">{description}</p>
      <div className="mt-3 flex justify-center space-x-4">
        <a class="text-gray-400" href="#" title="Twitter">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-5 text-gray-400" href="#" title="LinkedIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M29 0H3C1.343 0 0 1.343 0 3v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.537 27H6.484V11.652h4.052V27zm-2.027-17.88a2.354 2.354 0 1 1 0-4.709 2.354 2.354 0 0 1 0 4.709zM27 27h-4.052V19.22c0-1.852-.036-4.229-2.575-4.229-2.577 0-2.973 2.009-2.973 4.084V27h-4.052V11.652h3.889v2.096h.055c.541-1.026 1.862-2.11 3.835-2.11 4.102 0 4.855 2.7 4.855 6.208V27z"></path>
          </svg>
        </a>
      </div>
    </div>
  );

  const tutors = [
    {
      name: "John Doe",
      title: "Application Support Analyst Lead",
      description:
        "Former co-founder of FlyDoor. Early staff at Pentify and CloudByte.",
      imageUrl: "path_to_image",
    },
    {
      name: "John Doe",
      title: "Application Support Analyst Lead",
      description:
        "Former co-founder of FlyDoor. Early staff at Pentify and CloudByte.",
      imageUrl: "path_to_image",
    },
    {
      name: "John Doe",
      title: "Application Support Analyst Lead",
      description:
        "Former co-founder of FlyDoor. Early staff at Pentify and CloudByte.",
      imageUrl: "path_to_image",
    },
    {
      name: "John Doe",
      title: "Application Support Analyst Lead",
      description:
        "Former co-founder of FlyDoor. Early staff at Pentify and CloudByte.",
      imageUrl: "path_to_image",
    },
    // Repeat for other tutors
  ];

  const blogs = [
    {
      date: "March 13, 2014",
      title: "Blog Title",
      description:
        "Agile methods seek to eliminate usability obstacles in traditional development, yet they may introduce new challenges to maintaining user experience quality.",
      categories: ["Category 1", "Category 2", "Category 3"],
      image: BlogImage1,
    },
    {
      date: "November 16, 2014",
      title: "Blog Title",
      description:
        "Delight can be felt on visceral, behavioral, and reflective levels. A great design is one that...",
      categories: ["Category 1", "Category 2"],
      image: BlogImage2,
    },
    {
      date: "September 24, 2017",
      title: "Blog Title",
      description:
        "You can apply visual design principles consistently throughout the process to craft a refined UX map.",
      categories: ["Category 1", "Category 2"],
      image: BlogImage3,
    },
  ];

  return (
    <>
      {/* Start Header */}
      <header className="p-4 bg-white text-black py-9 px-12 fixed w-full z-50">
        <div className="container flex justify-between h-9 mx-auto px-12">
          {/* Logo */}
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "70px", height: "60px" }}
            />
          </a>

          {/* Search and Explore Section */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex items-center px-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Want to learn?"
                className="outline-none border-none focus:ring-0 focus:outline-none ml-2 bg-white text-gray-500"
              />
            </div>

            {/* Dropdown Menu Button */}
            <div className="relative inline-block text-left">
              <button
                className="bg-purple-100 text-purple-900 text-sm font-semibold px-4 py-1.5 mr-1 rounded-lg flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                Explore
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-35">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="#">Course 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="#">Course 2</a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center ml-2 font-semibold -mb-1 border-b-2 border-transparent border-red-600"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
              >
                About us
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
              >
                Courses
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-1 font-semibold -mb-1 border-b-2 border-transparent"
              >
                Contact us
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center font-semibold -mb-1 border-b-2 border-transparent"
              >
                FAQ's
              </a>
            </li>
          </ul>

          {/* Authentication Buttons */}
          <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/SignIn" className="self-center px-4 py-3 font-semibold rounded">
            Sign in
          </Link>
          <Link
            to="/CreateAccount"
            className="self-center px-5 py-2 font-semibold rounded-lg border-4 text-gray-50"
            style={{
              backgroundColor: "rgba(124, 65, 163, 1)",
              borderColor: "rgba(244, 235, 255, 1)",
            }}
          >
            Create free account
          </Link>
        </div>

          {/* Mobile Menu Button */}
          <button
            className="p-4 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-64 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-2 mt-4 p-4">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">About us</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">Courses</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">Contact us</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="#">FAQ's</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <button className="w-full font-semibold text-black">
                Sign in
              </button>
            </li>
            <li className="px-4 py-2 cursor-pointer">
              <button
                className="w-full py-2 font-semibold rounded-lg border-4 text-gray-50"
                style={{
                  backgroundColor: "rgba(124, 65, 163, 1)",
                  borderColor: "rgba(244, 235, 255, 1)",
                }}
              >
                Create free account
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* End Header */}

      {/* Start Services */}
      <div className="container mx-auto px-20 py-16 bg-white">
        <h2
          className="text-center text-base font-semibold"
          style={{ color: "rgba(136, 73, 178, 0.94)" }}
        >
          Our Services
        </h2>
        <p className="text-center text-4xl font-bold text-black mt-4">
          Cultivating a lively and engaging atmosphere <br /> for learning
        </p>
        <Slider {...settings} className="mt-8">
          <div className="p-4">
            <div
              className={`rounded-xl p-6 border-2 transition-colors duration-500 ${
                centerIndex === 2 ? "" : ""
              }`}
              style={
                centerIndex === 2
                  ? { backgroundColor: "rgba(124, 65, 163, 1)", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              <div
                className={`text-2xl mb-8 mt-2 flex items-center`}
                style={
                  centerIndex === 2 ? { color: "white" } : { color: "blue" }
                }
              >
                <span
                  role="img"
                  aria-label="Interactive Design"
                  className="mr-5"
                >
                  <img
                    src={Frame1}
                    alt="Frame1"
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
                <h3
                  className={`text-xl font-bold`}
                  style={
                    centerIndex === 2 ? { color: "white" } : { color: "black" }
                  }
                >
                  UX Design Course
                </h3>
              </div>
              <p
                className={`mt-2`}
                style={
                  centerIndex === 2 ? { color: "white" } : { color: "gray" }
                }
              >
                Courses focused on the latest trends and innovations in web
                development.
              </p>
              <a
                href="#"
                className={`mt-4 inline-block font-semibold flex items-center`}
                style={
                  centerIndex === 2
                    ? { color: "white" }
                    : { color: "rgba(124, 65, 163, 1)" }
                }
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4">
            <div
              className={`rounded-xl p-6 border-2 transition-colors duration-500 ${
                centerIndex === 0 ? "" : ""
              }`}
              style={
                centerIndex === 0
                  ? { backgroundColor: "rgba(124, 65, 163, 1)", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              <div
                className={`text-2xl mb-8 mt-2 flex items-center`}
                style={
                  centerIndex === 0 ? { color: "white" } : { color: "blue" }
                }
              >
                <span
                  role="img"
                  aria-label="Interactive Design"
                  className="mr-5"
                >
                  <img
                    src={Frame2}
                    alt="Frame2"
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
                <h3
                  className={`text-xl font-bold`}
                  style={
                    centerIndex === 0 ? { color: "white" } : { color: "black" }
                  }
                >
                  Interactive Design
                </h3>
              </div>
              <p
                className={`mt-2`}
                style={
                  centerIndex === 0 ? { color: "white" } : { color: "gray" }
                }
              >
                Courses on design that explore <br /> the latest industry
                advancements.
              </p>
              <a
                href="#"
                className={`mt-4 inline-block font-semibold flex items-center`}
                style={
                  centerIndex === 0
                    ? { color: "white" }
                    : { color: "rgba(124, 65, 163, 1)" }
                }
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4">
            <div
              className={`rounded-xl p-6 border-2 transition-colors duration-500 ${
                centerIndex === 1 ? "" : ""
              }`}
              style={
                centerIndex === 1
                  ? { backgroundColor: "rgba(124, 65, 163, 1)", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              <div
                className={`text-2xl mb-8 mt-2 flex items-center`}
                style={
                  centerIndex === 1 ? { color: "white" } : { color: "blue" }
                }
              >
                <span role="img" aria-label="UI Design" className="mr-5">
                  <img
                    src={Frame3}
                    alt="Frame3"
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
                <h3
                  className={`text-xl font-bold`}
                  style={
                    centerIndex === 1 ? { color: "white" } : { color: "black" }
                  }
                >
                  User Interface Design
                </h3>
              </div>
              <p
                className={`mt-2`}
                style={
                  centerIndex === 1 ? { color: "white" } : { color: "gray" }
                }
              >
                UI Design classes that explore <br /> cutting-edge trends and
                innovations.
              </p>
              <a
                href="#"
                className={`mt-4 inline-block font-semibold flex items-center`}
                style={
                  centerIndex === 1
                    ? { color: "white" }
                    : { color: "rgba(124, 65, 163, 1)" }
                }
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Slider>
      </div>
      {/* End Services */}

      {/* Start Programs */}
      <div className="container mx-auto px-24 py-8 bg-white">
        <h2
          className="text-base font-semibold mb-2"
          style={{ color: "rgba(136, 73, 178, 0.94)" }}
        >
          Explore Programs
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Most Popular Class
        </h1>
        <p className="text-gray-500 text-xl mb-8">
          Step into our acclaimed class, where cutting-edge insights and
          expertise await to enhance your skills.
        </p>
        <Slider {...settings1}>
          {courses.map((course, index) => (
            <div key={index}>
              <CourseCard {...course} />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-14">
          <button
            href="#"
            className="bg-gray-100 text-black text-sm py-2 px-4 border-2 rounded-lg font-bold transition hover:bg-[rgba(124,65,163,1)] hover:text-white"
          >
            Explore All Programs
          </button>
        </div>
      </div>
      {/* End Programs */}

      {/* Start Tutors */}
      <div className="container bg-white mx-auto pt-10 pb-16 px-24">
        <h2
          className="text-center text-base font-semibold"
          style={{ color: "rgba(136, 73, 178, 0.94)" }}
        >
          Tutors
        </h2>
        <p className="text-center text-4xl font-bold text-black mt-3">
          Meet the Heroes
        </p>
        <p className="text-center text-xl text-gray-500 mt-5 mb-10">
          On Weekend UX, instructors from all over the world instruct millions
          of students. <br /> We offer the knowledge and abilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => (
            <TutorCard
              key={index}
              name={tutor.name}
              title={tutor.title}
              description={tutor.description}
              imageUrl={tutor.imageUrl}
            />
          ))}
        </div>
      </div>
      {/* End Tutors */}

      {/* Start info*/}
      <div className="container py-16 px-8 text-center bg-purple-100">
        <div className="inline-block text-white p-6 rounded-full mb-4">
          <img src={logo} alt="Logo" className="w-18 h-16" />
        </div>
        <p
          className="font-semibold text-purple-950 mb-8"
          style={{ fontSize: "42px" }}
        >
          The courses were fantastic! It's a premier platform for <br /> anyone
          starting a new career or seeking a refresher.
        </p>
        <div className="flex justify-center items-center pb-3">
          <img
            src={Avatar2}
            alt="John Jones"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="pb-4">
          <h3 className="text-lg font-semibold text-purple-900">John Jones</h3>
          <p className="text-gray-500">Student, National University</p>
        </div>
      </div>
      {/* End info*/}

      {/* Start Blogs */}
      <div className="container mx-auto pt-10 pb-4 bg-white px-24">
        <h2 className="text-3xl text-black font-bold mb-8">Our Recent Blogs</h2>
        <div className="flex">
          {/* Left Side Card */}
          <div className="w-2/4 pr-4">
            <div className="overflow-hidden mb-8">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="object-cover"
                style={{ width: "520px", height: "220px" }}
              />
              <div className="p-6">
                <p
                  className="text-purple-600 text-xs font-semibold mb-2"
                  style={{ color: "rgba(136, 73, 178, 0.94)" }}
                >
                  {blogs[0].date}
                </p>
                <h3 className="text-xl text-black font-semibold mb-1">
                  {blogs[0].title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {blogs[0].description}
                </p>
                <div className="flex space-x-2">
                  {blogs[0].categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 py-1 px-3 font-semibold rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="w-2/4 space-y-6">
            {blogs.slice(1).map((blog, index) => (
              <div key={index} className="flex overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-3/4 object-cover"
                  style={{ width: "380px", height: "180px" }}
                />
                <div className="pl-4 flex flex-col justify-between">
                  <div>
                    <p
                      className="text-purple-600 text-xs font-semibold mb-2"
                      style={{ color: "rgba(136, 73, 178, 0.94)" }}
                    >
                      {blog.date}
                    </p>
                    <h3 className="text-black text-base font-semibold mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                  </div>
                  <div className="flex space-x-2 mb-2">
                    {blog.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 py-1 px-3 font-semibold rounded-full text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Blogs */}

      {/* Start Footer */}
      <footer
        class="text-gray-600 body-font"
        style={{ backgroundColor: "rgba(46, 0, 64, 1)" }}
      >
        <div class="container px-24 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <img
              src={logolight}
              alt="logo-light"
              style={{ width: "70px", height: "60px" }}
            />
            <br />
            <p class="mt-2 text-base text-slate-200">
              Top learning experiences that create more talent in the world.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-400 text-sm text-sm mb-3">
                Product
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-slate-200">Overview</a>
                </li>
                <li>
                  <a class="text-slate-200">Features</a>
                </li>
                <li>
                  <a class="text-slate-200">Tutorials</a>
                </li>
                <li>
                  <a class="text-slate-200">Pricing</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-400 text-sm text-sm mb-3">
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-slate-200">About us</a>
                </li>
                <li>
                  <a class="text-slate-200">Careers</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-400 text-sm mb-3">
                Social
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-slate-200">Twitter</a>
                </li>
                <li>
                  <a class="text-slate-200">LinkedIn</a>
                </li>
                <li>
                  <a class="text-slate-200">GitHub</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-400 text-sm text-sm mb-3">
                Legal
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-slate-200">Terms</a>
                </li>
                <li>
                  <a class="text-slate-200">Privacy</a>
                </li>
                <li>
                  <a class="text-slate-200">Contact</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="pb-11">
          <div class="container mx-auto px-24 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-400 text-base text-center sm:text-left">
              © 2024 NextGen UX. All rights reserved.
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-400" href="#" title="Twitter">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-5 text-gray-400" href="#" title="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M29 0H3C1.343 0 0 1.343 0 3v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.537 27H6.484V11.652h4.052V27zm-2.027-17.88a2.354 2.354 0 1 1 0-4.709 2.354 2.354 0 0 1 0 4.709zM27 27h-4.052V19.22c0-1.852-.036-4.229-2.575-4.229-2.577 0-2.973 2.009-2.973 4.084V27h-4.052V11.652h3.889v2.096h.055c.541-1.026 1.862-2.11 3.835-2.11 4.102 0 4.855 2.7 4.855 6.208V27z"></path>
                </svg>
              </a>

              <a className="ml-5 text-gray-400" href="#" title="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a className="ml-5 text-gray-400" href="#" title="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-8.837 0-16 7.163-16 16 0 7.072 4.584 13.066 10.937 15.18 0.8 0.146 1.094-0.348 1.094-0.772 0-0.38-0.013-1.387-0.019-2.722-4.451 0.967-5.39-2.147-5.39-2.147-0.728-1.848-1.778-2.341-1.778-2.341-1.452-0.993 0.109-0.973 0.109-0.973 1.604 0.113 2.448 1.647 2.448 1.647 1.426 2.441 3.742 1.735 4.656 1.327 0.144-1.033 0.557-1.735 1.014-2.134-3.553-0.404-7.289-1.776-7.289-7.904 0-1.746 0.623-3.174 1.645-4.29-0.165-0.403-0.713-2.031 0.156-4.234 0 0 1.341-0.429 4.4 1.635 1.276-0.355 2.645-0.533 4.004-0.54 1.36 0.007 2.73 0.185 4.01 0.54 3.053-2.064 4.391-1.635 4.391-1.635 0.874 2.203 0.326 3.831 0.159 4.234 1.025 1.116 1.645 2.545 1.645 4.29 0 6.145-3.744 7.494-7.305 7.888 0.573 0.493 1.083 1.468 1.083 2.958 0 2.134-0.02 3.856-0.02 4.384 0 0.429 0.289 0.926 1.104 0.77 6.358-2.115 10.931-8.107 10.931-15.18 0-8.837-7.163-16-16-16z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Home;
