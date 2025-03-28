import React from "react";
import { Box, Text, Flex, Button } from "@radix-ui/themes";
import mockPosts from "@/data/mockPosts";

const CommunityList = ({ onDeletePost, onUpdatePost }) => {
    return (
        // 전체 컨테이너
        <Box className="w-full max-w-4xl mx-auto mt-6">
            <div className="bg-white rounded-2xl border-gray-200 p-6 shadow-sm">
                {/* 헤더 */}
                <div className="flex items-center justify-between mb-6">
                    <Text as="h3" size="5" weight="bold" className="text-gray-900">
                        정보 공유
                    </Text>
                    <Text size="2" className="text-gray-500">
                        최신 기술 정보를 공유해보세요
                    </Text>
                </div>

                {/* 게시물 목록 */}
                <ul className="space-y-4">
                    {mockPosts.map((post) => (
                        <li
                            key={post.id}
                            className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                        >
                            <Flex
                                direction="column"
                                className="p-5"
                            >
                                {/* 카테고리 태그 */}
                                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                    {post.category || "기술"}
                  </span>
                                </div>

                                {/* 게시물 제목 */}
                                <Text
                                    size="5"
                                    weight="bold"
                                    className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {post.title}
                                </Text>

                                {/* 게시물 내용 */}
                                <Text
                                    size="2"
                                    className="text-gray-700 mt-2 line-clamp-2"
                                >
                                    {post.body}
                                </Text>

                                {/* 메타 정보 + 액션 버튼 */}
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-sm text-gray-500 flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">👤</span> {post.author}
                    </span>
                                        <span className="flex items-center gap-1">
                      <span className="text-green-500">📅</span> {post.date}
                    </span>
                                        <span className="flex items-center gap-1">
                      <span className="text-amber-500">👁</span> {post.views}
                    </span>
                                        <span className="flex items-center gap-1">
                      <span className="text-purple-500">💬</span> {post.comments}
                    </span>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button
                                            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 px-3 py-1 text-xs rounded-full"
                                            onClick={() => onUpdatePost(post)}
                                        >
                                            수정
                                        </Button>
                                        <Button
                                            className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-300 px-3 py-1 text-xs rounded-full"
                                            onClick={() => onDeletePost(post.id)}
                                        >
                                            삭제
                                        </Button>
                                    </div>
                                </div>
                            </Flex>
                        </li>
                    ))}
                </ul>

                {/* 더보기 버튼 */}
                <div className="mt-8 text-center">
                    <button
                        className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        더 많은 게시글 보기
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </Box>
    );
};

export default CommunityList;