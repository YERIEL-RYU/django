import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("=== django - react 연동 꾸꾸 ===");
    const fetchArticles = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const post = await res.json();
      setPosts(post);
    };
    fetchArticles();
  }, []);
  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.content}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
