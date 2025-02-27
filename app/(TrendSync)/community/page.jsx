import Community from "@/app/ui/Community/Community";
import { fetchPosts } from "@/services/PostService";

export default async function Page() {
    // 서버에서 데이터를 패칭합니다.
    const response = await fetchPosts();
    const posts = response.data

    return <Community initialPosts={posts} />;
}


