"use client";

import React, { useState } from "react";

const DepartmentContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="container py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[75rem] rounded-[1.25rem] bg-[#F6F6F6] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <h2 className="mb-10 text-center md:mb-12 lg:mb-16">Contact Us</h2>

        <form onSubmit={handleSubmit} className="mx-auto max-w-[70rem]">
          {/* Name and Email Row */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-8">
            <div>
              <label
                htmlFor="name"
                className="text-body-primary mb-3 block text-base font-medium lg:text-lg"
              >
                Your Name<span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Write your name here"
                required
                className="text-body-main focus:border-accent w-full rounded-lg border border-[#E3E3E3] bg-white px-5 py-4 text-base placeholder:text-[#D9D9D9] focus:outline-none lg:text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-body-primary mb-3 block text-base font-medium lg:text-lg"
              >
                Your Email<span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Write email address here"
                required
                className="text-body-main focus:border-accent w-full rounded-lg border border-[#E3E3E3] bg-white px-5 py-4 text-base placeholder:text-[#D9D9D9] focus:outline-none lg:text-lg"
              />
            </div>
          </div>

          {/* Phone and Department Row */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-8">
            <div>
              <label
                htmlFor="phone"
                className="text-body-primary mb-3 block text-base font-medium lg:text-lg"
              >
                Phone<span className="text-accent">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Write your phone here"
                required
                className="text-body-main focus:border-accent w-full rounded-lg border border-[#E3E3E3] bg-white px-5 py-4 text-base placeholder:text-[#D9D9D9] focus:outline-none lg:text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="department"
                className="text-body-primary mb-3 block text-base font-medium lg:text-lg"
              >
                Department
              </label>
              <div className="relative">
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="text-body-main focus:border-accent w-full appearance-none rounded-lg border border-[#E3E3E3] bg-white px-5 py-4 pr-12 text-base focus:outline-none lg:text-lg"
                  style={{
                    color: formData.department ? "#333333" : "#D9D9D9",
                  }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="surgery-allied">Surgery & Allied</option>
                  <option value="medicine-allied">Medicine & Allied</option>
                  <option value="diagnostics">Diagnostics</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="laboratory">Laboratory Services</option>
                  <option value="pharmacy">Pharmacy Services</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-body-primary"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-8 lg:mb-10">
            <label
              htmlFor="message"
              className="text-body-primary mb-3 block text-base font-medium lg:text-lg"
            >
              Your Message<span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
              rows={6}
              className="text-body-main focus:border-accent w-full resize-none rounded-lg border border-[#E3E3E3] bg-white px-5 py-4 text-base placeholder:text-[#D9D9D9] focus:outline-none lg:text-lg"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 w-full max-w-[23rem] rounded-full px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 lg:text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DepartmentContactUs;
