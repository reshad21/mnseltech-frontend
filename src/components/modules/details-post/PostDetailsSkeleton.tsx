const PostDetailsSkeleton = () => {
  return (
    <>
      <div className="flex flex-col w-full  shadow-md rounded-lg overflow-hidden animate-pulse my-5">
        {/* Image Skeleton */}
        <div className="relative h-48 md:h-86 bg-gray-300 mx-4"></div>

        {/* Content Skeleton */}
        <div className="p-4 flex flex-col">
          {/* Author Information Skeleton */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </div>

          {/* Title Skeleton */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>

          {/* Content Skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailsSkeleton;
