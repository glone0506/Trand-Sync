"use client";

import React, { useState, useEffect } from "react";

export default function PostList({albumId}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // JSONPlaceholder API에서 데이터 가져오기
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                const data = await response.json();
                const filteredPosts = data.filter((post) => post.albumId === albumId);
                setPosts(filteredPosts);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [albumId]);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <ul >
            {posts.map((post) => (
                <li key={post.id} className="list-group-item d-flex align-items-center">
                    <img
                        src={post.thumbnailUrl}
                        alt={post.title}
                        className="img-thumbnail me-3"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />

                    <div className="align-items-center">
                        <h5>{post.title}</h5>
                        <p>Album ID: {post.albumId}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
