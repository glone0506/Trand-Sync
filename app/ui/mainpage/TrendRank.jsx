"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, ChevronDown, ChevronUp, ArrowUp, ArrowDown, Minus } from "lucide-react";

const TREND_ICONS = {
    up: (props) => <ArrowUp {...props} className="text-green-500 h-3 w-3" />,
    down: (props) => <ArrowDown {...props} className="text-red-500 h-3 w-3" />,
    same: (props) => <Minus {...props} className="text-gray-400 h-3 w-3" />
};

const TrendingItem = ({ post, index }) => (
    <div className="flex items-center py-2 px-3 hover:bg-gray-50 cursor-pointer">
        <span className="text-sm text-gray-500 w-6">{index + 1}</span>
        <span className="flex-grow text-sm truncate mr-2">{post.title}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-500">{post.views}</span>
            {TREND_ICONS[post.change]()}
        </div>
    </div>
);

const TrendingSidebar = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        const fetchTrendingPosts = () => {
            const data = [
                { id: 1, title: "Next.js 따라다니는 모달창", change: "up", views: "2.1k" },
                { id: 2, title: "React 최신 기능 소개", change: "down", views: "1.8k" },
                { id: 3, title: "JavaScript 성능 최적화", change: "same", views: "1.5k" },
                { id: 4, title: "AI 기술 트렌드", change: "up", views: "1.3k" },
                { id: 5, title: "코딩 면접 대비 팁", change: "same", views: "1.2k" }
            ];
            setTrendingPosts(data);
        };

        fetchTrendingPosts();
        const interval = setInterval(fetchTrendingPosts, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-60 w-64 mt-20 ml-4 bg-white border rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-3 border-b bg-white">
                <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">트렌딩</span>
                </div>
                <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100"
                >
                    {isMinimized ? (
                        <ChevronUp className="h-4 w-4" />
                    ) : (
                        <ChevronDown className="h-4 w-4" />
                    )}
                </button>
            </div>

            {!isMinimized && (
                <div>
                    {trendingPosts.map((post, index) => (
                        <TrendingItem
                            key={post.id}
                            post={post}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrendingSidebar;