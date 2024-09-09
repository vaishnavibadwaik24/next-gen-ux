import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./logo.svg";
import Hero from "./images/Hero.svg";
import Speak from "./images/Speak.png";
import Vector from "./images/Vector.png";
import idea from "./images/idea.svg";
import Circle1 from "./images/Circle1.svg";
import Circle2 from "./images/Circle2.svg";
import Circle3 from "./images/Circle3.svg";
import ProgressCircle from "./images/ProgressCircle.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import Squares from "./images/Squares.svg";
import { FaClock } from "react-icons/fa";
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
import BlogImage1 from "./images/BlogImage1.svg";
import BlogImage2 from "./images/BlogImage2.svg";
import BlogImage3 from "./images/BlogImage3.svg";

function Home() {
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
        <a className="text-gray-400" href="#" aria-label="Twitter">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-5 text-gray-400" href="#" aria-label="LinkedIn">
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
      {/* Start Hero */}
      <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto pt-28">
          <div className="relative flex-1 text-left md:pr-8 lg:pt-28">
            <img
              src={Circle3}
              alt="Circle"
              className="absolute left-8 translate-y-4 hidden md:block"
            />

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black pb-2">
              Upgrade Your{" "}
              <span style={{ color: "rgba(124, 65, 163, 1)" }}>Skills</span>{" "}
              <br />
              To <span style={{ color: "rgba(124, 65, 163, 1)" }}>
                Advance
              </span>{" "}
              Your <br />
              <span style={{ color: "rgba(124, 65, 163, 1)" }}>
                Career
              </span>{" "}
              Path
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-base text-gray-600 max-w-lg">
              Learn UI-UX Design skills with NextGen UX. The latest online{" "}
              <br />
              learning system and material that help you to be creative.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link
                to="#"
                className="px-5 py-3 font-semibold rounded-lg text-white"
                style={{ backgroundColor: "#7C41A3" }}
              >
                Get Started
              </Link>
              <Link
                to="#"
                className="px-5 py-3 font-semibold rounded-lg bg-purple-100"
                style={{ color: "#7C41A3" }}
              >
                Get free trial
              </Link>
            </div>
            <img
              src={Circle2}
              alt="Circle"
              className="absolute translate-x-[22rem] translate-y-3/2"
            />
            <div className="mt-10 flex space-x-6">
              <div className="flex items-center space-x-2">
                <img src={Speak} alt="Public Speaking" className="w-6 h-6" />
                <span className="text-gray-600">Public Speaking</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={Vector} alt="Career-Oriented" className="w-6 h-6" />
                <span className="text-gray-600">Career-Oriented</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={idea} alt="Creative Thinking" className="w-6 h-6" />
                <span className="text-gray-600">Creative Thinking</span>
              </div>
            </div>
            <div
              className="mt-6 text-2xl font-bold"
              style={{ color: "#7C41A3" }}
            >
              <img
                src={Circle1}
                alt="Circle"
                className="transform translate-x-48 translate-y-2"
              />
              <img
                src={Circle3}
                alt="Circle"
                className="absolute right-96 translate-y-4 hidden md:block"
              />
              250+ <br />
              <span className="text-black font-normal">Collaboration</span>
            </div>
          </div>

          <div className="flex-1 relative md:mt-0 hidden md:block">
            <div className="relative">
              <img
                src={Hero}
                alt="Hero Image"
                className="rounded-full mx-auto border-solid md:w-80 md:h-80 md:border-8 lg:w-[420px] lg:h-[420px] lg:border-[60px]"
                style={{
                  borderColor: "rgba(124, 65, 163, 1)",
                }}
              />

              <div className="absolute top-5 right-8 transform translate-x-8 -translate-y-8 bg-neutral-50 p-4 rounded-lg shadow-2xl border border-purple-700">
                <div className="px-3 pb-2">
                  <img
                    src={ProgressCircle}
                    alt="Progress Circle"
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">
                  <span className="font-bold text-black text-2xl">5K+</span>
                  <br /> Online Courses
                </p>
              </div>
              <div className="absolute top-1/3 left-1/8 transform -translate-x-16 -translate-y-1/2 bg-neutral-50 px-4 space-x-5 py-3 rounded-lg shadow-2xl flex border border-purple-700">
                <img
                  src={icon1}
                  alt="icon"
                  style={{ width: "46px", height: "46px" }}
                />
                <p className="text-gray-500 text-sm">
                  <span className="font-bold text-black text-2xl">2K+</span>{" "}
                  <br />
                  Video Courses
                </p>
              </div>
              <div className="absolute bottom-16 right-8 transform translate-x-1 translate-y-14 bg-neutral-50 px-4 space-x-2 py-3 rounded-lg shadow-2xl flex border border-purple-700">
                <img
                  src={icon2}
                  alt="icon"
                  style={{ width: "46px", height: "46px" }}
                />
                <p className="text-sm text-gray-500">
                  Tutors
                  <br />
                  <span className="font-bold text-black text-2xl">250+</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 transform -translate-x-1/8 translate-y-40 hidden md:block">
            <img src={Squares} alt="svg" style={{ width: "150px" }} />
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Start Services */}
      <div className="w-full bg-white py-18 pb-12 pt-32">
        <div className="container mx-auto px-6 lg:px-24">
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
                    ? {
                        backgroundColor: "rgba(124, 65, 163, 1)",
                        color: "white",
                      }
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
                      centerIndex === 2
                        ? { color: "white" }
                        : { color: "black" }
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
                  Courses focused on the latest trends <br /> and innovations in
                  web development.
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
                    ? {
                        backgroundColor: "rgba(124, 65, 163, 1)",
                        color: "white",
                      }
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
                      centerIndex === 0
                        ? { color: "white" }
                        : { color: "black" }
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
                    ? {
                        backgroundColor: "rgba(124, 65, 163, 1)",
                        color: "white",
                      }
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
                      centerIndex === 1
                        ? { color: "white" }
                        : { color: "black" }
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
      </div>
      {/* End Services */}

      {/* Start Programs */}
      <div className="w-full bg-white py-8">
        <div className="container mx-auto px-6 lg:px-24">
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
      </div>
      {/* End Programs */}

      {/* Start Tutors */}
      <div className="w-full bg-white pt-10 pb-16">
        <div className="container mx-auto px-6 lg:px-24">
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
      </div>
      {/* End Tutors */}

      {/* Start info*/}
      <div className="w-full py-16 px-6 text-center bg-purple-100">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block text-white p-6 rounded-full mb-4">
            <img src={logo} alt="Logo" className="w-18 h-16" />
          </div>
          <h1 className="font-semibold text-purple-950 mb-8 text-4xl">
            The courses were fantastic! It's a premier platform for anyone
            starting a new career or seeking a refresher.
          </h1>
          <div className="flex justify-center items-center pb-3">
            <img
              src={Avatar2}
              alt="John Jones"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-purple-900">
              John Jones
            </h3>
            <p className="text-gray-500">Student, National University</p>
          </div>
        </div>
      </div>
      {/* End info*/}

      {/* Start Blogs */}
      <div className="w-full bg-white pt-10 pb-4">
        <div className="container mx-auto px-24">
          <h2 className="text-3xl text-black font-bold mb-8">
            Our Recent Blogs
          </h2>
          <div className="flex flex-wrap">
            {/* Left Side Card */}
            <div className="w-full lg:w-2/4 pr-4">
              <div className="overflow-hidden mb-8">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="object-cover w-full"
                  style={{ height: "220px" }}
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
                        className="bg-purple-100 text-purple-800 py-1 px-2 font-semibold rounded-full text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="w-full lg:w-2/4 space-y-6">
              {blogs.slice(1).map((blog, index) => (
                <div key={index} className="flex overflow-hidden mb-6">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-1/2"
                    style={{ height: "180px" }}
                  />
                  <div className="pl-4 flex flex-col justify-between w-1/2">
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
                          className="bg-purple-100 text-purple-800 py-1 px-2 font-semibold rounded-full text-xs"
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
      </div>
      {/* End Blogs */}
    </>
  );
}

export default Home;
