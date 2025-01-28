import React from "react";

const CommList = ({ posts, onDeletePost, onUpdatePost }) => {
    return (
        <ul className="divide-y divide-gray-200 rounded-lg shadow-lg bg-white">
            {posts.map((post) => (
                <li
                    key={post.id}
                    className="flex justify-between items-center p-4 hover:bg-gray-50 transition duration-200"
                >
                    {/* 게시물 제목 및 내용 */}
                    <div>
                        <h5 className="text-lg font-semibold text-gray-800">{post.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">
                            {post.body || "내용 없음"}
                        </p>
                    </div>

                    {/* 버튼 그룹 */}
                    <div className="flex space-x-2">
                        <button
                            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 border border-blue-500 rounded-full shadow-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
                            onClick={() => onUpdatePost(post)}
                        >
                            수정
                        </button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 border border-red-500 rounded-full shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all duration-200"
                            onClick={() => onDeletePost(post.id)}
                        >
                            삭제
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CommList;