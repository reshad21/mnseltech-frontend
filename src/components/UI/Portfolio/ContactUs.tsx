/* eslint-disable react/no-unescaped-entities */
"use client";

import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_m5j9tp8",
          "template_pjuuara",
          form.current,
          "H1FDX9WkK7hJQntOL"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message. Please try again later.");
          }
        );
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#05021d] via-[#141539] to-[#5e0a99] text-white my-5 rounded-xl">
      {/* Gradient Accent */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-[#ff4c30] to-[#f97a61] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-[#f9e6dc] to-[#ff4c30] rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto px-8 md:px-6 lg:px-0 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-[#9d98f0] mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Feel free to reach out to us with any questions or inquiries. We're
          here to help!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4c30] placeholder-gray-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4c30] placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#ff4c30] placeholder-gray-400"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-[#ff4c30] to-[#f97a61] text-white font-medium shadow-lg hover:shadow-xl hover:from-[#f97a61] hover:to-[#ff4c30] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
