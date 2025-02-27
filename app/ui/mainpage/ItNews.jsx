"use client";

import React, { useState } from "react";
import PostList from "@/app/ui/mainpage/PostList";

export default function CategoryBar() {
    const categories = [
        { id: "all", name: "전체", icon: "📢" },
        { id: "ai", name: "인공지능", icon: "🧠" },
        { id: "webdev", name: "웹 개발", icon: "💻" },
        { id: "cloud", name: "클라우드", icon: "☁️" },
        { id: "security", name: "보안", icon: "🔒" },
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

    return (
        <div className="w-full max-w-4xl mx-auto mt-1">
            <div className="bg-white rounded-2xl  border-gray-200 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                        카테고리별 보기
                    </h3>
                    <span className="text-sm text-gray-500">
            {categories.find(cat => cat.id === selectedCategory)?.name} 선택됨
          </span>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
                  relative flex items-center gap-2
                  px-4 py-2 rounded-full
                  text-sm font-medium
                  transition-all duration-300 ease-in-out
                  hover:scale-105
                  active:scale-95
                  ${isSelected
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                }
                `}
                            >
                <span className="text-lg transform transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </span>
                                <span>{category.name}</span>
                                <span
                                    className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 
                    w-1 h-1 rounded-full 
                    transition-all duration-300
                    ${isSelected ? 'bg-white opacity-100' : 'opacity-0'}
                  `}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                    <div className="pt-6">
                        {selectedCategory === "all" && (
                            <div className="animate-fadeIn">
                                <PostList />
                            </div>
                        )}
                        {selectedCategory === "ai" && (
                            <div className="text-gray-600 animate-fadeIn">
                                <h4 className="text-lg font-semibold mb-4">인공지능 관련 소식</h4>
                                <p>최신 AI 트렌드와 기술 동향을 확인하세요.</p>
                            </div>
                        )}
                        {selectedCategory === "webdev" && (
                            <div className="text-gray-600 animate-fadeIn">
                                <h4 className="text-lg font-semibold mb-4">웹 개발 뉴스</h4>
                                <p>최신 웹 개발 기술과 프레임워크 소식을 만나보세요.</p>
                            </div>
                        )}
                        {selectedCategory === "cloud" && (
                            <div className="text-gray-600 animate-fadeIn">
                                <h4 className="text-lg font-semibold mb-4">클라우드 서비스</h4>
                                <p>클라우드 컴퓨팅 및 서비스 동향을 알아보세요.</p>
                            </div>
                        )}
                        {selectedCategory === "security" && (
                            <div className="text-gray-600 animate-fadeIn">
                                <h4 className="text-lg font-semibold mb-4">보안 소식</h4>
                                <p>최신 보안 동향과 취약점 정보를 확인하세요.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}