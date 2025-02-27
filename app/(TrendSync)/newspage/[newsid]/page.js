// app/(TrendSync)/newspage/[newsid]/page.js
import { fetchPostById } from "@/services/PostService";
import Comments from "@/app/ui/mainpage/Comments.jsx"; // 일반 import

export default async function Newspost({ params }) {
    const post = await fetchPostById(params.newsid);

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">게시글을 찾을 수 없습니다.</h1>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-4">작성일: {post.date}</span>
                <span>작성자: {post.author}</span>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
            </p>
            <div className="mt-6">
                <a href="#" className="text-blue-600 hover:underline text-sm">
                    관련 기사 더보기
                </a>
            </div>
            {/* 클라이언트 컴포넌트를 직접 사용 */}
            <Comments postId={post.id} />
        </div>
    );
}