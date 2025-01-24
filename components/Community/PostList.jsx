import React from "react";

const PostList = ({ posts, onDeletePost, onUpdatePost }) => {
    return (
        <ul className="list-group">
            {posts.map((post) => (
                <li
                    key={post.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    {/* 게시물 제목 및 내용 */}
                    <div>
                        <h5 className="mb-1">{post.title}</h5>
                        <p
                            className="mb-0 text-muted"
                            style={{ fontSize: "0.9rem" }}
                        >
                            {post.body || "내용 없음"}
                        </p>
                    </div>

                    {/* 버튼 그룹 */}
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => onUpdatePost(post)}
                        >
                            수정
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
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

export default PostList;