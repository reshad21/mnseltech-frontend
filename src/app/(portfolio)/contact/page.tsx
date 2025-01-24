"use client";
import Container from "@/components/UI/Container";
import AccentElement from "@/components/UI/Portfolio/AccentElement";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useRef } from "react";
import contactImage from "../../../../public/images/21577813cf86ffd6db3aff48efca5bd6.jpeg";
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
    <Container>
      <div className="px-4 my-24">
        {/* Section Header */}
        <div className="pb-20 mb-20 border-b-2 border-slate-400 relative">
          {/* Accent Element positioned with Tailwind */}
          <AccentElement className="absolute w-full md:w-[417.14px] md:h-[253.03px] top-[-200%] left-[-40%]" />
          <h1 className="font-syne text-4xl">Contact Me</h1>
          <span className="font-rubik bodyMedium text-[#949494]">
            For Any Project Knock Us
          </span>
        </div>

        {/* contact form section */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <h2 className="font-syne">Get in Touch With Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full py-3 border-b-2 bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full py-3 border-b-2 bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full py-3 border-b-2 bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-brandOrange font-inter text-white py-3 px-6 rounded-full shadow-md hover:bg-brandOrange-light transition duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="my-16">
          <Image
            src={contactImage}
            alt="contact image"
            layout="responsive"
            width={100}
            height={50}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </Container>
  );
}
