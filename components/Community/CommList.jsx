import React from "react";
import { Box, Text, Separator, Flex, Button } from "@radix-ui/themes";
import mockPosts from "@/data/mockPosts";

const CommList = ({ onDeletePost, onUpdatePost }) => {
    return (
        <Box className="bg-white rounded-lg p-4 shadow-md max-w-3xl mx-auto">
            <ul>
                {mockPosts.map((post, index) => (
                    <React.Fragment key={post.id}>
                        <Flex justify="between" align="center" className="p-4 hover:bg-gray-50 transition duration-200">
                            {/* 게시물 정보 */}
                            <div>
                                <Text size="4" weight="bold" className="text-gray-900">{post.title}</Text>
                                <Text size="2" className="text-gray-600 mt-1">{post.body}</Text>
                                <Text size="2" className="text-gray-500 mt-2">
                                    📝 {post.author} ・ 📅 {post.date} ・ 👁 {post.views} ・ 💬 {post.comments}
                                </Text>
                            </div>

                            {/* 버튼 그룹 */}
                            <Flex gap="3">
                                <Button color="blue" variant="soft" onClick={() => onUpdatePost(post)}>수정</Button>
                                <Button color="red" variant="soft" onClick={() => onDeletePost(post.id)}>삭제</Button>
                            </Flex>
                        </Flex>

                        {/* 리스트 구분선 (마지막 항목 제외) */}
                        {index < mockPosts.length - 1 && <Separator />}
                    </React.Fragment>
                ))}
            </ul>
        </Box>
    );
};

export default CommList;