"use client";
import { useUser } from "@/context/user.provider";
import { getSingleUserAllPosts } from "@/services/user";
import { IPost } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const PostPage = () => {
  const { user } = useUser();
  const [userAllPosts, setAllUserPost] = useState<IPost[]>([]);

  useEffect(() => {
    if (user && user._id) {
      getSingleUserAllPosts(user._id)
        .then((details) => {
          console.log("Fetched posts:", details?.data);
          setAllUserPost(details?.data); // Assuming details is an array of posts
        })
        .catch((error) => console.error("Error fetching user posts:", error));
    }
  }, [user]);

  return (
    <div className="max-w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-300 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Posts</h2>
      {userAllPosts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Post Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userAllPosts.map((post: IPost) => (
                <tr key={post._id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {post.category}
                  </td>
                  <td className="px-6 py-4">
                    {post.postImage ? (
                      <Image
                        width={50}
                        height={50}
                        src={post.postImage}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {post.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {" "}
                      {/* Wrap buttons in a div with flex and space-x-2 */}
                      <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300">
                        View
                      </button>
                      <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-300">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No posts available.</p>
      )}
    </div>
  );
};

export default PostPage;
