"use client";

import { useState } from "react";
import { Box, Text } from "@radix-ui/themes";
import { motion, AnimatePresence } from "framer-motion";

const newsArticles = [
    {
        title: "🚀 React 19 출시, 새로운 기능 공개!",
        desc: "React 19가 드디어 공개되었습니다. 더욱 강력한 성능과 새로운 기능들이 추가되었습니다.",
        img: "/first.jpg"
    },
    {
        title: "🔥 Next.js 14, 더 빠른 빌드 속도 제공",
        desc: "Next.js 14에서는 빌드 속도가 더욱 빨라지고, 새로운 서버 컴포넌트 기능이 추가되었습니다.",
        img: "/second.jpg"
    },
    {
        title: "💡 Radix UI, 새로운 디자인 트렌드를 반영",
        desc: "Radix UI는 더 나은 접근성과 디자인 트렌드를 반영한 새로운 컴포넌트들을 추가했습니다.",
        img: "/third.jpg"
    }
];

export default function NewsCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextArticle = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % newsArticles.length);
    };

    const prevArticle = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + newsArticles.length) % newsArticles.length);
    };

    return (
        <Box className="relative w-full max-w-3xl mx-auto mt-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex"
                    >
                        {/* 뉴스 이미지 영역 */}
                        <img
                            src={newsArticles[index].img}
                            alt={newsArticles[index].title}
                            className="w-1/2 object-cover"
                        />
                        {/* 뉴스 텍스트 영역 */}
                        <div className="w-1/2 p-6 flex flex-col justify-center bg-white">
                            <Text as="h3" size="5" weight="bold" className="text-gray-900">
                                {newsArticles[index].title}
                            </Text>
                            <Text size="3" className="text-gray-600 mt-4">
                                {newsArticles[index].desc}
                            </Text>
                        </div>
                    </motion.div>
                </AnimatePresence>
                {/* 좌측 화살표 버튼 */}
                <button
                    aria-label="이전 뉴스"
                    onClick={prevArticle}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-gray-50 transition transform hover:scale-105 duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {/* 우측 화살표 버튼 */}
                <button
                    aria-label="다음 뉴스"
                    onClick={nextArticle}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-gray-50 transition transform hover:scale-105 duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            {/* 페이지 인디케이터 (Pagination Dots) */}
            <div className="flex justify-center mt-4 space-x-2">
                {newsArticles.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </Box>
    );
}