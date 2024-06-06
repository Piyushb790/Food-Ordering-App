const Shimmer = () => {
  const shimmerArray = new Array(20).fill(null);
  return (
    <div className="shimmer-container flex flex-wrap gap-5 mt-20 ">
      {shimmerArray.map((_, index) => (
        <div
          className="shimmer w-[280px] h-80  mb-8 bg-gray-200 rounded-xl p-2  "
          key={index}
        >
          <div className="img w-64 h-40 rounded-lg bg-gray-400"></div>
          <div className="title mt-2 h-4 rounded-sm bg-gray-300 w-28 "></div>
          <div className="price h-4 bg-gray-300 rounded-sm mt-2 w-52"></div>
          <div className="description h-6 rounded-sm bg-gray-300 mt-2 w-64"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
