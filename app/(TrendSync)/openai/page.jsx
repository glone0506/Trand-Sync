"use client";
import React, { useState } from "react";

const Page = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = async () => {
    if (!inputText) return;

    setLoading(true);
    try {
      const res = await fetch("/api/askOpenAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.response);
      } else {
        setResponse("에러가 발생했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      setResponse("서버에 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen flex flex-col">
        {/* 상단 여백 추가 */}
        <div className="h-12"></div>

        <div className="max-w-4xl mx-auto w-full px-4 py-8">
          {/* 메인 질문 섹션 */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            {/* 헤더 여백 */}
            <div className="h-8"></div>

            {/* 제목 */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                IT에 관한 것 무엇이든 물어봐요!
              </h1>
              <p className="text-gray-500">
                최신 기술 동향부터 개발 지식까지, 궁금한 점을 질문해보세요.
              </p>
            </div>

            {/* 질문 입력 폼 */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="궁금한 점을 무엇이든 물어보세요."
                  className="flex-1 w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleButtonClick()}
              />
              <button
                  onClick={handleButtonClick}
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
              >
                {loading ? (
                    <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  로딩 중...
                </span>
                ) : (
                    <span className="flex items-center">
                  물어보기
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h15"></path>
                  </svg>
                </span>
                )}
              </button>
            </div>
          </div>

          {/* AI 답변 섹션 */}
          {response && response !== "에러가 발생했습니다. 다시 시도해 주세요." && (
              <div className="bg-white rounded-2xl p-6 mb-8 animate-fadeIn">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                    <span className="text-xl">💡</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">AI의 답변</h2>
                </div>
                <div className="pl-2 border-l-4 border-blue-100">
                  <p className="text-lg text-gray-700 whitespace-pre-line">{response}</p>
                </div>
              </div>
          )}

          {/* 오류 섹션 */}
          {response === "에러가 발생했습니다. 다시 시도해 주세요." && (
              <div className="bg-white rounded-2xl p-6 mb-8 animate-fadeIn">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <h2 className="text-xl font-semibold text-red-600">오류 발생</h2>
                </div>
                <div className="pl-2 border-l-4 border-red-100">
                  <p className="text-lg text-red-600">무언가 잘못되었습니다. 다시 시도해 주세요.</p>
                </div>
              </div>
          )}

          {/* 하이라이트 카드 섹션 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">인기 IT 콘텐츠</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center hover:translate-y-[-4px] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  😍
                </div>
                <h4 className="text-base font-semibold text-center text-gray-800 mb-2">
                  웹 개발자에게 필요한 네트워크 기초 지식
                </h4>
                <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                기초 지식
              </span>
              </div>

              <div className="bg-white rounded-2xl p-5 flex flex-col items-center hover:translate-y-[-4px] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🔥
                </div>
                <h4 className="text-base font-semibold text-center text-gray-800 mb-2">
                  요즘IT 2024 상반기 개발 인기 콘텐츠
                </h4>
                <span className="text-xs px-2 py-1 bg-amber-50 text-amber-600 rounded-full">
                인기 콘텐츠
              </span>
              </div>

              <div className="bg-white rounded-2xl p-5 flex flex-col items-center hover:translate-y-[-4px] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h4 className="text-base font-semibold text-center text-gray-800 mb-2">
                  요즘IT TOP 12 역주행 콘텐츠
                </h4>
                <span className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded-full">
                역주행 콘텐츠
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;