import ItNews from "@/app/ui/mainpage/ItNews";
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Theme>
                <div className="container mx-auto px-4 py-6">
                    {/* 상단 여백 추가 */}
                    <div className="h-8"></div>

                    {/* ItNews를 가운데 배치 */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl mx-auto">
                            <ItNews />
                        </div>
                    </div>
                </div>
            </Theme>
        </div>
    );
}