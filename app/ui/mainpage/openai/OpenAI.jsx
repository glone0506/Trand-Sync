"use client";

import React, { useState } from "react";

const OpenAI = () => {
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
      console.log(data);
      if (res.ok) {
        setResponse(data.response); // 받은 답변을 저장
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-3xl font-bold mb-2">
          IT 실무 팁, 무엇이든 물어봐요!
        </div>
        <div className="text-gray-600">
          AI 고양이 '요고'가 기본 개념, 프레임 워크 등 궁금한 점을 알려드려요.
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-4">😍</span>
          <div className="text-lg font-semibold text-center">
            웹 개발자에게 필요한 네트워크 기초 지식
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-4">🔥</span>
          <div className="text-lg font-semibold text-center">
            요즘IT 2024 상반기 개발 인기 콘텐츠
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-4">🚀</span>
          <div className="text-lg font-semibold text-center">
            요즘IT TOP 12 역주행 콘텐츠
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 flex flex-col items-center">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="궁금한 점을 무엇이든 물어보세요."
          className="border rounded-lg px-4 py-2 w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleButtonClick}
          className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          {loading ? "로딩 중..." : "물어보기"}
        </button>
      </div>

      {/* Response Section */}
      {response && (
        <div className="mt-8 w-full max-w-3xl p-6 bg-white rounded-lg shadow-xl transition-all transform duration-300 ease-in-out">
          {/* 응답 카드 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-purple-600">💡</span>
              <h2 className="text-xl font-semibold text-gray-800">
                AI의 답변:
              </h2>
            </div>
            <p className="text-lg text-gray-700 text-center">{response}</p>
          </div>
        </div>
      )}

      {/* Error Response Section */}
      {response === "에러가 발생했습니다. 다시 시도해 주세요." && (
        <div className="mt-8 p-4 bg-red-200 text-red-700 rounded-lg w-full max-w-3xl">
          <strong>오류 발생:</strong> 다시 시도해 주세요.
        </div>
      )}
    </div>
  );
};

export default OpenAI;
