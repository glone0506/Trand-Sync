"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header({ setModalShow }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-8 w-30 rounded-lg hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
                        >
                            최신 IT 소식
                        </Link>
                        <Link
                            href="/community"
                            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
                        >
                            정보공유
                        </Link>
                        <Link
                            href="/openai"
                            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors"
                        >
                            AI에게 물어봐
                        </Link>
                    </nav>

                    {/* Desktop Auth Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setModalShow(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            로그인
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="bg-white border-t px-2 pt-2 pb-3 space-y-1">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            최신 IT 소식
                        </Link>
                        <Link
                            href="/community"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            정보공유
                        </Link>
                        <Link
                            href="/openai"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            AI에게 물어봐
                        </Link>
                        <div className="px-3 py-2">
                            <button
                                onClick={() => {
                                    setModalShow(true);
                                    setIsOpen(false);
                                }}
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                로그인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}