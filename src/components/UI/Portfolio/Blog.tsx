"use client";

import Image from "next/image";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Technology",
      description:
        "Explore the latest trends shaping the future of technology, including AI, blockchain, and quantum computing.",
      image: "https://source.unsplash.com/800x600/?technology,ai",
      date: "November 20, 2024",
      author: "John Doe",
    },
    {
      id: 2,
      title: "10 Tips for Personal Growth",
      description:
        "Learn actionable tips to boost your personal and professional growth and achieve your goals.",
      image: "https://source.unsplash.com/800x600/?growth,success",
      date: "November 18, 2024",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Traveling the World on a Budget",
      description:
        "Discover how to explore the world without breaking the bank, with travel hacks and tips.",
      image: "https://source.unsplash.com/800x600/?travel,adventure",
      date: "November 15, 2024",
      author: "Emily Davis",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#1e1c45] via-[#302d6b] to-[#5e0a99] text-white my-5 rounded-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#e3e2fd]">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 duration-300 bg-[#302d6b]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={blog.id === 1}
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#e3e2fd" }}
                >
                  {blog.title}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "#d182e3", fontSize: "0.95rem" }}
                >
                  {blog.description}
                </p>
                <div
                  className="flex items-center justify-between text-sm mb-4"
                  style={{ color: "#9d98f0" }}
                >
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <button className="py-2 px-4 rounded-lg shadow-md transition duration-300 bg-gradient-to-r from-[#9d98f0] to-[#5e0a99] text-white hover:from-[#d182e3] hover:to-[#9d98f0]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
