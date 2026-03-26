import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white gap-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <button
        onClick={() => navigate("/create")}
        className="px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
      >
        Create Post
      </button>

      <button
        onClick={() => navigate("/feed")}
        className="px-6 py-2 bg-green-500 rounded-xl hover:bg-green-600 transition"
      >
        Feed
      </button>
    </div>
  );
};

export default Home;
