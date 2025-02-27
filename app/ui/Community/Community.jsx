"use client";
import React, { useState } from "react";
import PostForm from "@/app/ui/Community/PostForm";
import CommunityList from "@/app/ui/Community/CommunityList";


export default function Community({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
    const [showForm, setShowForm] = useState(false);
    // const [editingPost, setEditingPost] = useState(null);

    // 새 게시글 추가
    const handleAddPost = async (newPost) => {
        try {
            const maxId = posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 0;
            const id = maxId + 1;
            const response = await createPost({ ...newPost, id });
            setPosts([response.data, ...posts]);
        } catch (error) {
            console.error("게시글 등록 실패:", error);
        }
    };

    // 게시글 삭제
    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
            setPosts(posts.filter((post) => post.id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    // 게시글 수정
    const handleUpdatePost = async (updatedPost) => {
        try {
            // await editPost(updatedPost.id, updatedPost);
            setPosts((prevPosts) =>
                prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
            );
            alert("게시글이 수정되었습니다!");
        } catch (error) {
            console.error("게시글 수정 실패:", error);
        }
    };

    // 수정할 게시글 설정 & 폼 열기
    const handleEditPost = (post) => {
        setEditingPost(post);
        setShowForm(true);
    };

    return (
        <div className="max-w-4xl mx-auto bg-[#F9FAFB] rounded-2xl border border-[rgb(23,58,203)] p-6 shadow-sm mt-8">
            <h2 className="text-[rgb(23,58,203)] text-xl font-bold mb-4">정보 공유</h2>

            {showForm ? (
                <PostForm
                    // onAddPost={handleAddPost}
                    // onUpdatePost={handleUpdatePost}
                    onClose={() => {
                        setShowForm(false);
                        setEditingPost(null);
                    }}
                    // editingPost={editingPost}
                />
            ) : (
                <>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-4 py-2 bg-[rgb(23,58,203)] text-white rounded-full hover:bg-blue-600 shadow-md transition duration-200"
                        >
                            게시글 등록
                        </button>
                    </div>
                    <CommunityList
                        posts={posts}
                        // onDeletePost={handleDeletePost}
                        // onUpdatePost={handleEditPost}
                    />
                </>
            )}
        </div>
    );
}