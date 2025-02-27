import ItNews from "@/app/ui/mainpage/ItNews";
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import TrendRank from "@/app/ui/mainpage/TrendRank";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Theme>
                <div className="container mx-auto px-4">
                    <div className="flex gap-8">
                        {/* 왼쪽 사이드바 */}
                        <div className="w-96 flex-shrink-0">
                            <TrendRank />
                        </div>

                        {/* 메인 콘텐츠 */}
                        <div className="flex-1 max-w-3xl">
                            <ItNews />
                        </div>
                    </div>
                </div>
            </Theme>
        </div>
    );
}