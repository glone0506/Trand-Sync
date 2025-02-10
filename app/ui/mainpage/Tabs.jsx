"use client";

import React, { useState,  } from "react";
import { Box, Text, Button, Separator, Flex } from "@radix-ui/themes";
import PostList from "@/components/mainpage/PostList";

export default function CategoryBar() {
    // 🔥 카테고리 목록
    const categories = [
        { id: "all", name: "📢 전체 보기" },
        { id: "ai", name: "🧠 인공지능" },
        { id: "webdev", name: "💻 웹 개발" },
        { id: "cloud", name: "☁️ 클라우드" },
        { id: "security", name: "🔒 보안" },
    ];

    // ✅ 현재 선택된 카테고리
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);


    return (
        <Box className="max-w-4xl mx-auto bg-white rounded-md p-9">
            {/* 카테고리 버튼 그룹 */}
            <Flex gap="3" className="mb-4 mt-5 justify-center">
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "solid" : "soft"}
                        color={selectedCategory === category.id ? "blue" : "gray"}
                        onClick={() => setSelectedCategory(category.id)}
                        className="px-4 py-2 text-sm font-semibold rounded-full"
                    >
                        {category.name}
                    </Button>
                ))}
            </Flex>

            <Separator className="my-4" />

            {/* 선택된 카테고리에 따른 콘텐츠 표시 */}
            <Box pt="3">
                {selectedCategory === "all" && <PostList />}
                {selectedCategory === "webdev" && <Text size="2">💻 최신 웹 개발 뉴스!</Text>}
                {selectedCategory === "design" && <Text size="2">🎨 UI/UX 디자인 트렌드</Text>}
                {selectedCategory === "performance" && <Text size="2">🚀 성능 최적화 가이드</Text>}
            </Box>
        </Box>
    );
}