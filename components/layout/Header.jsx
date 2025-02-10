"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Text } from "@radix-ui/themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ setModalShow }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔥 실시간 인기 글 목록
    const popularPosts = [
        "1️⃣ 딥시크",
        "2️⃣ 삼성전자",
        "3️⃣ 엔디비아",
        "4️⃣ Radix UI 디자인 시스템",
        "5️⃣ 프론트엔드 성능 최적화 팁",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % popularPosts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-100 flex justify-between items-center py-3 px-5 shadow-md z-50">
            {/* 로고 */}
            <div className="logo">
                <Link href="/">
                    <img src="/logo.png" alt="Logo" className="h-10 cursor-pointer" />
                </Link>
            </div>

            {/* 네비게이션 메뉴 */}
            <nav className="flex space-x-6">
                <Link href="/" className="text-gray-700 hover:underline hover:font-bold transition-all">
                    최신 IT 소식
                </Link>
                <Link href="/community" className="text-gray-700 hover:underline hover:font-bold transition-all">
                    정보공유
                </Link>
                <Link href="/openai" className="text-gray-700 hover:underline hover:font-bold transition-all">
                    AI에게 물어봐
                </Link>
            </nav>

            {/* 🔥 실시간 인기 글 (위로 사라지고, 새로운 글이 아래에서 등장) */}
            <Box className="relative flex justify-center items-center text-center w-[250px] h-10 mt-3 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }} // 새 글이 아래에서 시작
                        animate={{ opacity: 1, y: 0 }} // 자연스럽게 올라오면서 나타남
                        exit={{ opacity: 0, y: -20 }} // 이전 글이 위로 사라짐
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute w-full text-center"
                    >
                        <Text size="3" weight="bold" className="text-gray-900">
                            {popularPosts[currentIndex]}
                        </Text>
                    </motion.div>
                </AnimatePresence>
            </Box>

            {/* 로그인 버튼 */}
            <div className="auth-buttons">
                <button
                    className="text-gray-500 px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:underline hover:font-bold"
                    onClick={() => setModalShow(true)}
                >
                    로그인
                </button>
            </div>
        </header>
    );
}