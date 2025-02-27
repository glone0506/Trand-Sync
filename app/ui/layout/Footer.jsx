// Footer 컴포넌트
export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-4 mt-8">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
                {/* 왼쪽: 저작권 문구 */}
                <p className="text-gray-600 text-sm">
                    © 2025 Woorifisa 금융. All rights reserved.
                </p>

                {/* 오른쪽: 링크 메뉴 */}
                <div className="flex space-x-4 mt-2 sm:mt-0">
                    <a
                        href="#"
                        className="text-gray-500 hover:text-[rgb(23,58,203)] text-sm transition-colors"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-[rgb(23,58,203)] text-sm transition-colors"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}