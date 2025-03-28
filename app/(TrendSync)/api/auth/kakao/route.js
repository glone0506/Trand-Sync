import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { code } = await req.json();

        if (!code) {
            console.error("❌ 카카오 인증 코드 없음");
            return NextResponse.json({ error: "카카오 인증 코드 없음" }, { status: 400 });
        }

        console.log("✅ 받은 카카오 인증 코드:", code);

        // Spring Boot 서버에 요청 보내기
        const backendResponse = await fetch("http://localhost:9091/oauth/kakao/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
        });

        console.log("🔄 Spring Boot 응답 상태 코드:", backendResponse.status);

        // ✅ 응답을 `text()`로 받아서 JSON인지 확인
        const backendText = await backendResponse.text();
        console.log("📄 Spring Boot 응답 본문:", backendText);

        if (!backendResponse.ok) {
            console.error("❌ Spring Boot 로그인 실패:", backendText);
            return NextResponse.json(
                { error: "Spring Boot 로그인 실패", details: backendText },
                { status: backendResponse.status }
            );
        }

        // ✅ JSON 응답이 올바른지 확인 후 처리
        try {
            const backendData = JSON.parse(backendText);
            return NextResponse.json(backendData);
        } catch (jsonError) {
            console.error("❌ JSON 파싱 오류:", jsonError);
            return NextResponse.json(
                { error: "Spring Boot 응답이 올바른 JSON 형식이 아닙니다.", details: backendText },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("❌ Next.js 서버 오류:", error);
        return NextResponse.json({ error: "서버 오류", details: error.message }, { status: 500 });
    }
}