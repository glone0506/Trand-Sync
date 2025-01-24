import React, { useState, useEffect } from "react";
import { getPosts, createPost, deletePost, editPost } from "@/service/PostService";
import PostForm from "@/components/Community/PostForm";
import PostList from "@/components/Community/PostList";

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingPost, setEditingPost] = useState(null);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                const limitedPosts = response.data.slice(0, 10);
                setPosts(limitedPosts);
                // setPosts(response.data); // posts 데이터 설정
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);
    //
    // const handleAddPost = async (newPost) => {
    //     try {
    //         const response = await createPost(newPost);
    //         setPosts([response.data, ...posts]); // 새 게시글 추가
    //     } catch (error) {
    //         console.error("Error adding post:", error);
    //     }
    // };

    const handleAddPost = async (newPost) => {
        try {
            // const id = posts.length + 1; // 중복 가능성 있음
            const maxId = posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 0;
            const id = maxId + 1; // 고유한 ID 생성
            console.log(posts);
            const response = await createPost({ ...newPost, id });
            setPosts([response.data, ...posts]); // 새 게시글 상태 업데이트
        } catch (error) {
            console.error("게시글 등록 실패:", error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
            setPosts(posts.filter((post) => post.id !== postId)); // 삭제 후 목록 업데이트
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    const handleUpdatePost = async (updatedPost) => {
        try {
            // await editPost(updatedPost.id, updatedPost); // 서버에 수정 요청
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === updatedPost.id ? updatedPost : post
                )
            ); // 상태 업데이트
            alert("게시글이 수정되었습니다!");
        } catch (error) {
            console.error("게시글 수정 실패:", error);
        }
    };
    // const handleUpdatePost = async (updatedPost) => {
    //     try {
    //         const response = await editPost(updatedPost.id, updatedPost); // 업데이트 API 호출
    //         setPosts(
    //             posts.map((post) =>
    //                 post.id === updatedPost.id ? response.data : post
    //             )
    //         ); // posts 상태 업데이트
    //         setEditingPost(null); // 수정 상태 초기화
    //         setShowForm(false); // 폼 닫기
    //     } catch (error) {
    //         console.error("Error updating post:", error);
    //     }
    // };


    const handleEditPost = (post) => {
        setEditingPost(post); // 수정할 게시글 설정
        setShowForm(true); // 폼 열기
    };


    return  (
        <div>
            {showForm ? (
                <PostForm onAddPost={handleAddPost}  onUpdatePost={handleUpdatePost} onClose={()=>{setShowForm(false), setEditingPost(null);} } editingPost={editingPost}  />
            ) : (
                <>
                <div className="flex justify-end ">
                    <button
                        onClick={() => setShowForm(true)}// 버튼 클릭 시 폼 열기
                        className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 shadow-md transition duration-200"
                        style={{marginBottom: "20px"}}
                    >
                        게시글 등록
                    </button>
                   </div>
                    <PostList posts={posts} onDeletePost={handleDeletePost} onUpdatePost={handleEditPost} />
                </>
                )}
                </div>
            );
            };

            export default Community;