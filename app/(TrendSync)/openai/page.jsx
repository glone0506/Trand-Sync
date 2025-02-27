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
      <div className="bg-white min-h-screen flex flex-col">
          <div className="max-w-6xl mx-auto py-8 px-4 text-center">
            <h1 className="text-3xl font-bold text-[rgb(23,58,203)] mb-2">
              IT에 관한 것 무엇이든 물어봐요!
            </h1>
            {/* 질문 입력 폼 */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
              <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="궁금한 점을 무엇이든 물어보세요."
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2
                         text-gray-700 focus:outline-none focus:ring-2
                         focus:ring-[rgb(23,58,203)] transition duration-300"
              />
              <button
                  onClick={handleButtonClick}
                  className="bg-[rgb(23,58,203)] text-white px-6 py-2 rounded-lg
                         hover:bg-blue-600 focus:outline-none focus:ring-2
                         focus:ring-[rgb(23,58,203)] transition duration-300"
              >
                {loading ? "로딩 중..." : "물어보기"}
              </button>
            </div>
          </div>

          {/* AI 답변 섹션 */}
          {response && response !== "에러가 발생했습니다. 다시 시도해 주세요." && (
              <section className="mb-8 w-full p-6 bg-white rounded-lg shadow-xl
                             transition-all transform duration-300 ease-in-out
                             border border-gray-200">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl text-[rgb(23,58,203)]">💡</span>
                    <h2 className="text-xl font-semibold text-gray-800">AI의 답변:</h2>
                  </div>
                  <p className="text-lg text-gray-700 text-center">{response}</p>
                </div>
              </section>
          )}

          {/* 오류 섹션 */}
          {response === "에러가 발생했습니다. 다시 시도해 주세요." && (
              <section className="mb-8 p-4 bg-red-200 text-red-700 rounded-lg w-full
                             border border-red-300">
                <strong>오류 발생:</strong> 다시 시도해 주세요.
              </section>
          )}

          {/* 하이라이트 카드 3개 */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-[rgb(23,58,203)] rounded-lg p-6
                          flex flex-col items-center shadow-sm hover:shadow-md
                          transition duration-300">
              <span className="text-4xl mb-4">😍</span>
              <div className="text-lg font-semibold text-center text-gray-800">
                웹 개발자에게 필요한 네트워크 기초 지식
              </div>
            </div>
            <div className="bg-white border border-[rgb(23,58,203)] rounded-lg p-6
                          flex flex-col items-center shadow-sm hover:shadow-md
                          transition duration-300">
              <span className="text-4xl mb-4">🔥</span>
              <div className="text-lg font-semibold text-center text-gray-800">
                요즘IT 2024 상반기 개발 인기 콘텐츠
              </div>
            </div>
            <div className="bg-white border border-[rgb(23,58,203)] rounded-lg p-6
                          flex flex-col items-center shadow-sm hover:shadow-md
                          transition duration-300">
              <span className="text-4xl mb-4">🚀</span>
              <div className="text-lg font-semibold text-center text-gray-800">
                요즘IT TOP 12 역주행 콘텐츠
              </div>
            </div>
          </section>
      </div>
  );
};

export default Page;