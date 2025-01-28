"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function PostList({  }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // JSONPlaceholder API에서 데이터 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
            // "https://jsonplaceholder.typicode.com/photos"
            "https://picsum.photos/v2/list"
        );
        const data = await response.json();
        // const filteredPosts = data.filter((post) => post.id === id);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
      <div className="container mt-4">
        <ul className="list-unstyled row g-4">
          {posts.map((post) => (
              <li
                  key={post.id}
                  className="col-md-4 col-sm-6 d-flex align-items-stretch"
              >
                <Link
                    href={`newspage/${post.id}`}
                    className="card shadow-sm text-decoration-none"
                    style={{ width: "100%" }}
                >
                  <img
                      src={post.download_url}
                      alt={post.author}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                      }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{post.author}</h5>
                    {/*<p className="card-text text-muted">Album ID: {post.albumId}</p>*/}
                  </div>
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
}