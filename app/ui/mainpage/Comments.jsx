"use client";

import React, { useState } from "react";

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        // 임시 댓글 생성 (실제 구현 시 API 호출로 저장)
        const newComment = {
            id: Date.now(),
            text: commentText,
            author: "익명",
            date: new Date().toLocaleString(),
        };

        setComments([...comments, newComment]);
        setCommentText("");
    };

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">댓글</h2>
            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-gray-500">아직 댓글이 없습니다.</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="p-4 bg-white border rounded shadow-sm">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>{comment.author}</span>
                                <span>{comment.date}</span>
                            </div>
                            <p className="mt-2 text-gray-800">{comment.text}</p>
                        </div>
                    ))
                )}
            </div>

            <form onSubmit={handleSubmit} className="mb-6">
        <textarea
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="댓글을 입력하세요..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
                <button
                    type="submit"
                    className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                    댓글 달기
                </button>
            </form>

        </div>
    );
}