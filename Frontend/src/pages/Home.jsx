import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>

      <button
        onClick={() => navigate("/create-post")}
        className="home-btn create-btn"
      >
        Create Post
      </button>

      <button
        onClick={() => navigate("/feed")}
        className="home-btn feed-btn"
      >
        Feed
      </button>
    </div>
  );
};

export default Home;