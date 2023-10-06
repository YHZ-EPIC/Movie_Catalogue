export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-6xl text-red-500 font-bold">404</h1>
        <p className="text-gray-700 text-2xl mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          The Page You Are Looking For is Not Found
        </p>
        <br />
        <p className="text-7xl">&#128169;</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-red-600 transition duration-300">
          <a href="/"> Go Home </a>
        </button>
      </div>
    </div>
  );
}
