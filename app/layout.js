import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-2 bg-lime-200 text-black">Header</header>
        {/* 1. children props를 통해 page.js의 컴포넌트가 전달됨 */}
        {children}
        <footer className="p-1 bg-orange-200 text-black">Footer</footer>
      </body>

      {/* 2. 최상위 경로인 app/layout.js에 작성했기 때문에
          모든 하위 라우트 경로들의 레이아웃으로 결정됨
          ex. 
          localhost:3-/profile
          localhost:3-/dashboard 등 테스트
      */}
    </html>
  );
}
