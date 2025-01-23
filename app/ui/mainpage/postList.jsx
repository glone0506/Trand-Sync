import React, { useState, useEffect } from 'react';

const PostList = ({ initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts || []);
    const [page, setPage] = useState(1); // 현재 페이지
    const [isFetching, setIsFetching] = useState(false); // 데이터 로딩 상태

    // 새로운 데이터를 가져오는 함수
    const fetchMorePosts = async () => {
        setIsFetching(true);
        try {
            // API 호출 예시 (페이지 기반으로 데이터 가져오기)
            const response = await fetch(`/api/posts?page=${page}`);
            const newPosts = await response.json();
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPage((prevPage) => prevPage + 1); // 페이지 증가
        } catch (error) {
            console.error("Error fetching more posts:", error);
        } finally {
            setIsFetching(false);
        }
    };

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100 // 약간의 여유를 둠
        ) {
            if (!isFetching) fetchMorePosts();
        }
    };

    // 스크롤 이벤트 등록
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching]); // isFetching이 변경될 때마다 재등록

    return (
        <div className="p-5">
            {posts && posts.length > 0 ? (
                <ul className="list-none space-y-2">
                    {posts.map((post, index) => (
                        <li key={index} className="text-gray-700">
                            <h2 className="text-lg font-semibold">{post.title}</h2>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">게시물이 없습니다.</p>
            )}

            {/* 로딩 상태 표시 */}
            {isFetching && <p className="text-center text-gray-500 mt-5">로딩 중...</p>}
        </div>
    );
};

export default PostList;