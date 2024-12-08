"use client";

import PostContent from "@/components/UI/PostContent";
import { useGetSinglePostDetails } from "@/hooks/post.hook";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import PostDetailsSkeleton from "./PostDetailsSkeleton";

const PostDetails = ({ postId }: { postId: string }) => {
  const { mutate: fetchPostDetails, data: post } = useGetSinglePostDetails();

  useEffect(() => {
    fetchPostDetails(postId);
  }, [postId, fetchPostDetails]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Back Link */}
      <Link
        href="/"
        className="flex items-center text-white mb-5 text-lg font-medium"
      >
        <IoArrowBack className="mr-2" /> {/* Back Icon */}
        Back to Homepage
      </Link>
      <div className="w-full max-w-4xl p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg mb-5">
        {post ? (
          <>
            {/* Post Image */}
            <div className="relative h-48 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={post.data.postImage}
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                Premium
              </span>
            </div>

            {/* Post Content */}
            <div className="p-4">
              {/* Author Section */}
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14">
                  <Image
                    src={post.data.author.img}
                    alt="Author Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-2 border-white shadow-lg"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">
                    {post.data.author.name}
                  </h4>
                  <p className="text-sm text-gray-200">
                    {post.data.author.email}
                  </p>
                </div>
              </div>

              {/* Title and Content */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {post.data.title}
              </h2>
              <div className="text-white/90">
                <PostContent content={post.data.content} />
              </div>
            </div>
          </>
        ) : (
          <PostDetailsSkeleton />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
