"use client";

import { useGetAllPost } from "@/hooks/getAllPost.hook";
import { IPost } from "@/types";
import { convert } from "html-to-text";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Blog() {
  const { mutate: getPosts, isSuccess, error, data } = useGetAllPost();

  // Fetch posts when the component mounts
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Function to truncate content to a specified word limit
  const truncateContent = (content: string, wordLimit: number) => {
    const plainText = convert(content, { wordwrap: false });
    const words = plainText.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : plainText;
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#1e1c45] via-[#302d6b] to-[#5e0a99] text-white my-5 rounded-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#e3e2fd]">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {error ? (
            <p className="text-red-500">
              Error fetching posts: {error.message}
            </p>
          ) : isSuccess && data ? (
            data.data.map((post: IPost) => (
              <div
                key={post._id}
                className="rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 duration-300 bg-[#302d6b]"
              >
                <div className="relative w-full h-48">
                  {post.postImage && (
                    <Image
                      src={post.postImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{ color: "#e3e2fd" }}
                  >
                    {post.title}
                  </h3>
                  {/* <p
                    className="text-sm mb-4"
                    style={{ color: "#d182e3", fontSize: "0.95rem" }}
                  >
                    {post.content}
                  </p> */}
                  <p
                    className="text-sm mb-4"
                    style={{ color: "#d182e3", fontSize: "0.95rem" }}
                  >
                    {truncateContent(post?.content, 50)}
                  </p>
                  <div
                    className="flex items-center justify-between text-sm mb-4"
                    style={{ color: "#9d98f0" }}
                  >
                    <span>By {post.author.name}</span>
                    {/* <span>{post.date}</span> */}
                  </div>
                  <Link
                    href={`/post/${post._id}`}
                    className="py-2 px-4 rounded-lg shadow-md transition duration-300 bg-gradient-to-r from-[#9d98f0] to-[#5e0a99] text-white hover:from-[#d182e3] hover:to-[#9d98f0]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <li className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
              Loading posts...
            </li>
          )}
        </div>
      </div>
    </section>
  );
}
