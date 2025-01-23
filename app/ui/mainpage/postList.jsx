import React from 'react';




const PostList = ({ posts }) => {
    return (
        <div className="p-5">
            {posts && posts.length > 0 ? (
                <ul className="list-none space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="border border-gray-300 rounded-lg shadow-md p-4"
                        >
                            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-700">{post.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">게시물이 없습니다.</p>
            )}
        </div>
    );
};

export default PostList;