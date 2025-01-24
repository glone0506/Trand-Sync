import React, {useEffect, useState} from "react";

const PostForm = ({ onAddPost,onUpdatePost,onClose,editingPost }) => {


    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPost) {
            onUpdatePost({ ...editingPost, title, body }); // 수정 작업
            onClose();
        } else {
            onAddPost({ title, body }); // 새 게시글 추가
            onClose();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
        >
            <h2 className="text-2xl font-bold text-gray-800 text-center">   {editingPost ? "게시글 수정" : "게시글 등록"}</h2>
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">제목:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목 입력"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-gray-700 font-medium">내용:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="내용 입력"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    rows="5"
                />
            </div>
            <div className="flex justify-end space-x-4">
                {/* 닫기 버튼 */}
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                    닫기
                </button>
                {/* 등록 버튼 */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    {editingPost ? "수정 완료" : "등록"}
                </button>
            </div>
        </form>
    );
};

export default PostForm;