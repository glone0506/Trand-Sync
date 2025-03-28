"use client";
import React, { useState } from "react";
import PostForm from "@/app/ui/Community/PostForm";
import CommunityList from "@/app/ui/Community/CommunityList";

export default function Community({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts || []);
    const [showForm, setShowForm] = useState(false);
    const [editingPost, setEditingPost] = useState(null);

    // 새 게시글 추가
    const handleAddPost = async (newPost) => {
        try {
            const maxId = posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 0;
            const id = maxId + 1;

            // API 호출이 비활성화된 상태라면 직접 상태 업데이트
            // 실제 환경에서는 createPost API 사용
            // const response = await createPost({ ...newPost, id });
            const currentDate = new Date().toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });

            const newPostWithDetails = {
                ...newPost,
                id,
                date: currentDate,
                views: 0,
                comments: 0
            };

            setPosts([newPostWithDetails, ...posts]);
            setShowForm(false);

            // 성공 메시지 표시
            alert("게시글이 등록되었습니다!");
        } catch (error) {
            console.error("게시글 등록 실패:", error);
        }
    };

    // 게시글 삭제
    const handleDeletePost = async (postId) => {
        try {
            // 삭제 확인
            if (!window.confirm("정말 이 게시글을 삭제하시겠습니까?")) {
                return;
            }

            // API 호출이 비활성화된 상태라면 직접 상태 업데이트
            // 실제 환경에서는 deletePost API 사용
            // await deletePost(postId);

            setPosts(posts.filter((post) => post.id !== postId));

            // 성공 메시지 표시
            alert("게시글이 삭제되었습니다.");
        } catch (error) {
            console.error("게시글 삭제 실패:", error);
        }
    };

    // 게시글 수정
    const handleUpdatePost = async (updatedPost) => {
        try {
            // API 호출이 비활성화된 상태라면 직접 상태 업데이트
            // 실제 환경에서는 editPost API 사용
            // await editPost(updatedPost.id, updatedPost);

            setPosts((prevPosts) =>
                prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
            );

            setShowForm(false);
            setEditingPost(null);

            // 성공 메시지 표시
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
        <div className="w-full max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl p-6">
                {/* 헤더 섹션 - 여백 추가 */}
                <div className="h-8"></div>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">정보 공유</h2>
                        <p className="text-sm text-gray-500 mt-1">개발자들과 유용한 정보를 공유해보세요</p>
                    </div>

                    {!showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            게시글 등록
                        </button>
                    )}
                </div>

                {/* 구분선 */}
                <div className="relative mb-6">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"/>
                </div>

                {/* 폼 또는 게시글 목록 */}
                {showForm ? (
                    <div className="bg-gray-50 rounded-xl p-6 mb-6 animate-fadeIn">
                        <PostForm
                            onAddPost={handleAddPost}
                            onUpdatePost={handleUpdatePost}
                            onClose={() => {
                                setShowForm(false);
                                setEditingPost(null);
                            }}
                            editingPost={editingPost}
                        />
                    </div>
                ) : (
                    <CommunityList
                        posts={posts}
                        onDeletePost={handleDeletePost}
                        onUpdatePost={handleEditPost}
                    />
                )}

                {/* 게시글 작성 취소 버튼 (폼이 표시된 경우만) */}
                {showForm && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => {
                                setShowForm(false);
                                setEditingPost(null);
                            }}
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-200"
                        >
                            취소하고 목록으로 돌아가기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}