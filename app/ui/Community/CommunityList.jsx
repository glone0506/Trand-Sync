import React from "react";
import { Box, Text, Separator, Flex, Button } from "@radix-ui/themes";
import mockPosts from "@/data/mockPosts";

const CommunityList = ({ onDeletePost, onUpdatePost }) => {
    return (
        // 전체 컨테이너
        <Box className="max-w-3xl mx-auto bg-transparent rounded-2xl  p-6  mt-8">

            {/* 게시물 목록 */}
            <ul>
                {mockPosts.map((post, index) => (
                    <React.Fragment key={post.id}>
                        {/* 개별 게시물(카드) */}
                        <Flex
                            // 수평이 아닌 수직 정렬을 위해 direction="column"
                            direction="column"
                            className="p-4 mb-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-50 transition duration-300"
                        >
                            {/* 게시물 정보 */}
                            <Text
                                size="4"
                                weight="bold"
                                className="text-[rgb(23,58,203)]"
                            >
                                {post.title}
                            </Text>
                            <Text
                                size="2"
                                className="text-gray-700 mt-1 line-clamp-2"
                            >
                                {post.body}
                            </Text>

                            {/* 메타 정보 + 수정/삭제 버튼 (한 줄에 배치) */}
                            <div className="mt-2 text-gray-500 flex items-center flex-wrap gap-2">
                <span>
                  📝 {post.author} ・ 📅 {post.date} ・ 👁 {post.views} ・ 💬 {post.comments}
                </span>
                                <Button
                                    // 버튼을 작게 보이도록 px-2/py-1, text-xs 등 적용
                                    className=" text-black  transition-colors duration-300 px-2 py-1 text-xs rounded-full"
                                    onClick={() => onUpdatePost(post)}
                                >
                                    수정
                                </Button>
                                <Button
                                    className=" text-black  transition-colors duration-300 px-2 py-1 text-xs rounded-full"
                                    onClick={() => onDeletePost(post.id)}
                                >
                                    삭제
                                </Button>
                            </div>
                        </Flex>

                        {/* 리스트 구분선 (마지막 항목 제외) */}
                        {index < mockPosts.length - 1 && <Separator className="my-2" />}
                    </React.Fragment>
                ))}
            </ul>
        </Box>
    );
};

export default CommunityList;