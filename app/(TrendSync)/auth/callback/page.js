"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function KakaoCallbackPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [code, setCode] = useState(null);

    useEffect(() => {
        setCode(searchParams.get("code")); // ✅ 클라이언트에서만 실행되도록 설정

        if (code) {
            fetch("/api/auth/kakao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            })
                .then(async (res) => {
                    if (!res.ok) throw new Error("로그인 실패");
                    return res.json();
                })
                .then((data) => {
                    console.log("로그인 성공:", data);
                    localStorage.setItem("token", data.access_token);
                    router.push("/");
                })
                .catch((error) => {
                    console.error("로그인 에러:", error);
                });
        }
    }, [searchParams, router, code]);

    return <p>카카오 로그인 중...</p>;
}