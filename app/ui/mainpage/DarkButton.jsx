import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"; // Radix-UI의 아이콘 사용

export default function DarkButton() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className=" bg-white dark:bg-black text-black dark:text-white">
            {/* 플로팅 버튼 */}
            <button
                className="fixed bottom-4 right-4 bg-[rgb(23,58,203)] text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Dark Mode"
            >
                {darkMode ? (
                    <SunIcon width={16} height={16} className="text-yellow-400" /> // 해 모양 아이콘 (라이트 모드)
                ) : (
                    <MoonIcon width={16} height={16} className="text-yellow-400" /> // 달 모양 아이콘 (다크 모드)
                )}
            </button>
        </div>
    );
}