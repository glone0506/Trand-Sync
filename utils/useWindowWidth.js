import { useState, useEffect } from "react";

function useWindowWidth() {
  const isClient = typeof window === "object"; // 클라이언트인지 확인 (SSR 방지)
  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 0
  );

  useEffect(() => {
    if (!isClient) return;

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize); // 화면 크기 변경 이벤트
    handleResize(); // 초기 크기 설정

    return () => window.removeEventListener("resize", handleResize); // 클린업
  }, [isClient]);

  return windowWidth;
}

export default useWindowWidth;
