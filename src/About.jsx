import React from "react";
import AUimage1 from "./images/AUimage1.png";
import AUimage2 from "./images/AUimage2.png";
import FeatureImg from "./images/FeatureImg.png";
import Ellipse1 from "./images/Ellipse1.png";
import Ellipse2 from "./images/Ellipse2.png";

export default function About() {
  const benefits = [
    {
      id: 1,
      title: "Standardization",
      description:
        "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are...",
      link: "#",
    },
    {
      id: 2,
      title: "Reduced Costs",
      description:
        "With NextGen UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning...",
      link: "#",
    },
    {
      id: 3,
      title: "More Customization",
      description:
        "Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different...",
      link: "#",
    },
    {
      id: 4,
      title: "Affordable Pricing",
      description:
        "With NextGen UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning...",
      link: "#",
    },
    {
      id: 5,
      title: "Learner Satisfaction",
      description:
        "If you really want students to retain what they learn, you'll need to aim for high satisfaction rates. Bad...",
      link: "#",
    },
    {
      id: 6,
      title: "Multimedia Materials",
      description:
        "One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for...",
      link: "#",
    },
  ];
  return (
    <>
      {/*  Start About */}
      <div className="flex flex-col md:flex-row items-center pb-1 pt-32 px-24 justify-between gap-10 p-8 bg-white">
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
          <p
            className="text-black text-base mb-4"
            style={{ textIndent: "20px" }}
          >
            NextGen UX is a UI/UX Design Academy based in California, dedicated
            to providing comprehensive training and consulting in User
            Experience (UX) and User Interface (UI) Design. Founded in 2024, the
            academy is driven by a passion for UI/UX Design and Human-Computer
            Interaction.
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
            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300"
            style={{ backgroundColor: "rgba(124, 65, 163, 1)" }}
          >
            Join Us &rarr;
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-5 relative">
          <div className="bg-neutral-100 flex flex-col gap-5">
            <div className="w-full h-52 rounded-lg overflow-hidden bg-neutral-100 relative">
              <img
                src={AUimage1}
                alt="Image"
                className="absolute right-0 top-0 w-3/4 h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-52 rounded-lg overflow-hidden bg-neutral-100 relative">
              <img
                src={AUimage2}
                alt="Image"
                className="absolute left-0 bottom-0 w-3/4 h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End About */}

      {/* Start Features */}
      <section className="bg-white text-black px-24">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="relative flex items-center justify-center pt-24 p-4 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <div
              className="absolute w-full h-full bg-neutral-100 rounded-lg"
              style={{
                top: "16px",
                left: "1px",
                zIndex: 1,
              }}
            ></div>
            <img
              src={FeatureImg}
              alt="Image"
              className="relative z-10 object-cover h-96 w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1
              className="text-2xl font-bold"
              style={{ color: "rgba(124, 65, 163, 1)" }}
            >
              Features
            </h1>
            <h1 className="text-5xl mt-2 font-semibold">
              We are constantly striving to deliver the best features in every
              aspect.
            </h1>
            <p className="mt-6 text-sm">
              At NextGen UX, our primary goal is to help students gain clarity
              about their aspirations, build consistency in their ambitions, and
              develop the confidence needed to navigate their journey over time.
            </p>
            <p className="mt-6 text-sm">
              You will find every little thing on the internet in just a click
              of hand, but here we admire that without knowledge and practice
              the internet may even also fail you in your life
            </p>
            <p className="mt-6 mb-8 text-sm">
              While the internet offers instant access to everything at the
              click of a button, we believe that without proper knowledge and
              practice, even the vast resources online may fall short in helping
              you succeed in life.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-3 text-base rounded-full bg-red-600 text-gray-50"
                style={{ backgroundColor: "rgba(124, 65, 163, 1)" }}
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Features */}

      {/* Start Benefits */}
      <div className="bg-white px-28 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-purple-600 text-2xl font-bold"
            style={{ color: "rgba(124, 65, 163, 1)" }}
          >
            Our Benefits
          </h2>
          <p className="mt-6 text-5xl font-semibold text-gray-900">
            By joining the NextGen UX platform, you <br /> can unlock a wide
            range of benefits.
          </p>
          <p className="mt-6 text-base text-black">
            Install our top-rated dropshipping app to your e-commerce site and
            get <br /> access to US Suppliers, AliExpress vendors, and the best.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`p-6 rounded-lg border text-left relative ${
                index % 2 === 0 ? "bg-purple-50" : "bg-white"
              }`}
            >
              <div className="relative flex items-left justify-left">
                <img
                  src={ index % 2 === 0 ? Ellipse1 : Ellipse2}
                  alt="Ellipse"
                  className="absolute inset-0 w-10 h-10"
                />
                <div className="relative text-3xl font-semibold z-10" style={{ color: "rgba(124, 65, 163, 1)" }}>
                  {String(benefit.id).padStart(2, "0")}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-5">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-black">
                {benefit.description}
                <span><a
                href={benefit.link}
                className="mt-4 font-small font-semibold hover:underline"
                style={{ color: "rgba(124, 65, 163, 1)" }}
              >
                Read More
              </a></span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* End Benefits */}
    </>
  );
}
