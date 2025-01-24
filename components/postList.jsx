"use client";

async function fetchPosts(albumId) {
  // 3초 지연 테스트
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  return data.filter((post) => post.albumId === albumId);
}

export default async function PostList({ albumId }) {
  const posts = await fetchPosts(albumId);

  return (
    <ul>
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
