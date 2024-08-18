import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white pt-36 pb-16">
      <div className="bg-white p-8 pb-16 rounded-lg drop-shadow-lg max-w-4xl w-full">
        <h2
          className="text-center text-purple-700 font-semibold text-2xl mb-6 pb-2 underline underline-offset-8"
          style={{ color: "rgba(136, 73, 178, 0.94)" }}
        >
          CONTACT US
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg text-black font-semibold mb-4">
              Leave us a message
            </h3>
            <form>
              <div className="mb-5">
                <label className="block text-black">Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-white border border-gray-300 text-gray-300 focus:outline-none focus:border-purple-700"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded bg-white border border-gray-300 text-gray-300 focus:outline-none focus:border-purple-700"
                />
              </div>
              <div className="mb-8">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded bg-white border border-gray-300 text-gray-300 focus:outline-none focus:border-purple-700"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white p-2 text-lg rounded font-semibold focus:outline-none"
                style={{ backgroundColor: "rgba(136, 73, 178, 0.94)" }}
              >
                Send
              </button>
            </form>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="text-black mb-7 mt-16">
              <p className="pl-14 text-base">NextGen UX</p>
              <p className="pl-14">2335 Orchard View Lane, Escondido</p>
              <p className="pl-14 pb-2">California - 92027</p>
              <p className="mt-4 pl-14">1 (213) 429-9013</p>
              <p className="pl-14">contact@nextgen.com</p>
              <div className="flex mt-2 pl-14 space-x-4 items-center">
                <a href="#" aria-label="YouTube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    className="fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-96 h-36">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4604.510007749279!2d-117.01060585123841!3d33.119068497518676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf2676912cf35%3A0x77cf1158314111de!2s2335%20Orchard%20View%20Ln%2C%20Escondido%2C%20CA%2092027%2C%20USA!5e0!3m2!1sen!2sin!4v1723895067472!5m2!1sen!2sin"
                width="600"
                height="450"
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
