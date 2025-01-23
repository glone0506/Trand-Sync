"use client";

import { useState, useEffect } from "react";
import useWindowWidth from "@/utils/useWindowWidth";

const Carousels = ({ carouselData }) => {
  const width = useWindowWidth(); // 화면 크기 추적
  const [index, setIndex] = useState(0); // 현재 슬라이드의 인덱스

  // 3초마다 자동으로 슬라이드 이동
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index * 4 > carouselData.length) {
        setIndex(0); // 끝에 도달하면 다시 처음으로
      } else {
        setIndex((prev) => prev + 1); // 다음 슬라이드로
      }
    }, 3000);

    return () => clearTimeout(timeout); // 클린업
  }, [index, carouselData.length]);

  return (
    <div className="flex items-center gap-5 justify-center min-w-[1024px] max-w-1320 mx-auto">
      {/* 왼쪽 화살표 */}
      <button
        disabled={index === 0}
        className={`cursor-pointer ${index === 0 ? "opacity-50" : ""}`}
        onClick={() => index > 0 && setIndex((prev) => prev - 1)}
      >
        {"<"}
      </button>

      {/* 카드 리스트 */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-1000"
          style={{ transform: `translateX(-${index * 612}px)` }}
        >
          {carouselData.map((item, i) => (
            <div key={i} className="w-612">
              {width > 1024 && (i + 1) % 4 === 0 ? (
                <div>AdCard</div>
              ) : (
                <div>WeatherCard: {item.title}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽 화살표 */}
      <button
        disabled={index * 4 >= carouselData.length}
        className={`cursor-pointer ${
          index * 4 >= carouselData.length ? "opacity-50" : ""
        }`}
        onClick={() =>
          index * 4 < carouselData.length && setIndex((prev) => prev + 1)
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousels;
