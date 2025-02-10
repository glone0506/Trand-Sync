"use client";

import {useState} from "react";
import {Box, Text} from "@radix-ui/themes";
import {motion, AnimatePresence} from "framer-motion";

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
    const [direction, setDirection] = useState(1); // 1: 오른쪽 이동, -1: 왼쪽 이동

    const nextArticle = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % newsArticles.length);
    };

    const prevArticle = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + newsArticles.length) % newsArticles.length);
    };

    return (
        <Box className="relative w-90% max-w-[900px] mx-auto mt-5 mb-5 overflow-hidden ">
            <div className="flex justify-between items-center shadow-none mt-4 ">

                <button
                    className="bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-md hover:bg-black/50 transition-all"
                    onClick={() => {
                        setDirection(-1);
                        setTimeout(() => prevArticle(), 250);
                    }}
                >
                    ◀
                </button>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={index}
                        initial={{x: direction === 1 ? 100 : -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: direction === 1 ? -100 : 100, opacity: 0}}
                        transition={{duration: 0.5}}
                        className="relative w-full h-[220px] flex items-center bg-white rounded-lg overflow-hidden shadow-md gap-6"
                    >
                        {/* 뉴스 이미지 */}
                        <img src={newsArticles[index].img} alt={newsArticles[index].title}
                             className="w-1/3 h-50 object-cover rounded-l-lg"
                        />

                        {/* 뉴스 텍스트 */}
                        <div className="w-2/3 p-6">
                            <Text size="5" weight="bold" className="text-gray-900">
                                {newsArticles[index].title}
                            </Text>
                            <Text size="3" className="text-gray-600 mt-2">
                                {newsArticles[index].desc}
                            </Text>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* 오른쪽 화살표 버튼 (이미지 밖으로 이동) */}
                <button
                    className="bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-md hover:bg-black/50 transition-all"
                    onClick={() => {
                        setDirection(1);
                        setTimeout(() => nextArticle(), 250);
                    }}
                >
                    ▶
                </button>
            </div>
        </Box>
    );
}