import React from "react";

const ContactUs = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-9 md:py-16">
        {/* left */}
        <div className="bg-white pb-10">
          {/* Header */}
          <div className="text-center bg-blue-600 text-white py-4">
            <h2 className="text-2xl font-semibold">
              Get In Touch With Us Now!
            </h2>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-4 md:px-10 mt-8">
            {/* Phone Number */}
            <div className="flex flex-col items-center bg-background shadow-md rounded-lg p-6">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.3 2.3a2 2 0 012.828 0L7.41 4.58a2 2 0 010 2.83L6.18 8.64c.34.22.688.45 1.05.68l.94-.94a2 2 0 012.83 0l2.28 2.28a2 2 0 010 2.83l-.94.94c.23.36.46.71.68 1.05l1.23-1.23a2 2 0 012.83 0l2.28 2.28a2 2 0 010 2.83l-2.28 2.28a2 2 0 01-2.83 0l-1.23-1.23a8.93 8.93 0 01-1.05-.68l-.94.94a2 2 0 01-2.83 0l-2.28-2.28a2 2 0 010-2.83l.94-.94a8.93 8.93 0 01-.68-1.05L4.58 7.41a2 2 0 01-2.28-2.3zm4.24 1.17a1 1 0 00-1.41 0L4.22 4.6a1 1 0 000 1.41l2.83 2.83a1 1 0 001.41 0l.94-.94L6.54 4.4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Phone Number
              </h3>
              <p className="text-gray-600 mt-2">+91 80004 36640</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-background shadow-md rounded-lg p-6">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.94 6.94a1 1 0 011.415 0l5.066 5.066a1 1 0 001.415 0L15.92 6.94a1 1 0 011.415 1.414l-7.072 7.072a3 3 0 01-4.243 0L1.524 8.354a1 1 0 011.414-1.414z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">info@expertwebdesigning.com</p>
              <p className="text-gray-600">sales@expertwebdesigning.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center bg-background shadow-md rounded-lg p-6">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a6 6 0 100 12 6 6 0 000-12zm0 4a1 1 0 110 2 1 1 0 010-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600 mt-2 text-center">
                518, Rhythm Plaza, Amar Javan Circle, Nikol, Ahmedabad, Gujarat
                - 382350
              </p>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col items-center bg-background shadow-md rounded-lg p-6">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.993.883L11 4v5h4a1 1 0 01.117 1.993L15 11h-5a1 1 0 01-.993-.883L9 10V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Working Hours
              </h3>
              <p className="text-gray-600 mt-2">Monday to Saturday</p>
              <p className="text-gray-600">09:00 AM to 06:00 PM</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="bg-white pb-10">
          {/* Header */}
          <div className="text-center bg-blue-600 text-white py-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>

          {/* Form */}
          <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-8 mt-6">
            <form className="space-y-6">
              {/* First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center bg-white rounded-md shadow-sm p-2">
                  <span className="text-gray-500 pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 100 12 6 6 0 000-12z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-full bg-background input focus:outline-none text-gray-700"
                    required
                  />
                </div>
                <div className="flex items-center bg-white rounded-md shadow-sm p-2">
                  <span className="text-gray-500 pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 100 12 6 6 0 000-12z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-background input focus:outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Mobile No and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center bg-white rounded-md shadow-sm p-2">
                  <span className="text-gray-500 pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Mobile No *"
                    className="w-full bg-background input focus:outline-none text-gray-700"
                    required
                  />
                </div>
                <div className="flex items-center bg-white rounded-md shadow-sm p-2">
                  <span className="text-gray-500 pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Email ID *"
                    className="w-full bg-background input focus:outline-none text-gray-700"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="px-6">
                <textarea
                  placeholder="Message"
                  className="w-full bg-background rounded-md shadow-sm p-2 h-24 focus:outline-none text-gray-700"
                ></textarea>
              </div>


              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-800"
                >
                  Submit
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-9.193 4.957 3.197-9.232a11.019 11.019 0 0115.052-7.424"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
