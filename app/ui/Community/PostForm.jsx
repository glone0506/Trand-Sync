import React, { useState } from "react";

const PostForm = ({ editingPost, onClose, onSubmit }) => {
    // 수정 모드(editingPost)가 있다면 해당 내용으로 초기화
    const [title, setTitle] = useState(editingPost ? editingPost.title : "");
    const [body, setBody] = useState(editingPost ? editingPost.body : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body, id: editingPost?.id });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-[#F9FAFB] border border-[rgb(23,58,203)] shadow-sm rounded-2xl p-6 space-y-4"
        >
            <h2 className="text-xl font-bold text-[rgb(23,58,203)] text-center">
                {editingPost ? "게시글 수정" : "게시글 등록"}
            </h2>

            {/* 제목 입력 */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">제목:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목 입력"
                    className="w-full border border-gray-300 rounded-md px-3 py-2
                     focus:outline-none focus:ring focus:ring-[rgb(23,58,203)]"
                />
            </div>

            {/* 내용 입력 */}
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">내용:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="내용 입력"
                    rows="5"
                    className="w-full border border-gray-300 rounded-md px-3 py-2
                     focus:outline-none focus:ring focus:ring-[rgb(23,58,203)]"
                />
            </div>

            {/* 버튼 영역 */}
            <div className="flex justify-end space-x-4">
                {/* 닫기 버튼 */}
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full
                     hover:bg-gray-400 transition-colors"
                >
                    닫기
                </button>
                {/* 등록/수정 버튼 */}
                <button
                    type="submit"
                    className="bg-[rgb(23,58,203)] text-white px-4 py-2 rounded-full
                     hover:bg-blue-600 transition-colors"
                >
                    {editingPost ? "수정 완료" : "등록"}
                </button>
            </div>
        </form>
    );
};

export default PostForm;