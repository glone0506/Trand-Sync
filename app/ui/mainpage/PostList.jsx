"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Tag, Loader2 } from "lucide-react";
import { fetchPosts } from "@/services/PostService";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error("게시글 불러오기 실패:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center space-y-4">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    <p className="text-gray-500 animate-pulse">뉴스를 불러오는 중...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <article
                    key={post.id}
                    className="group bg-white border-l-4 border-l-transparent border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 hover:border-l-blue-500 hover:shadow-md"
                >
                    <Link href={`newspage/${post.id}`} className="block p-6">
                        <div className="flex flex-col space-y-4">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                                    <Tag className="w-3 h-3 mr-1" />
                                    {post.category || "IT"}
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>{post.date || "날짜 없음"}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                    {post.summary || "설명이 제공되지 않은 뉴스입니다."}
                                </p>
                            </div>

                            {/* Footer */}
                            {post.link && (
                                <div className="flex justify-end">
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors group-hover:translate-x-1 duration-200"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        원본 기사
                                        <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    );
}