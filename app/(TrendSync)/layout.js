"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/globals.css";


import Header from "@/app/ui/layout/Header";
import Footer from "@/app/ui/layout/Footer";
import MyVerticallyCenteredModal from "@/app/ui/login/Login_modal";
import { useState } from "react";
import DarkButton from "@/app/ui/mainpage/DarkButton"; // useState 추가

// Geist 폰트 설정
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono 폰트 설정
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [modalShow, setModalShow] = useState(false); // 모달 상태 관리

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>IT트렌드 싱크</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
         min-h-screen
    `}
      >
        {/*<div className="wrapper">*/}
          <Header setModalShow={setModalShow} /> {/* setModalShow 전달 */}
          <main className="min-h-screen bg-transparent">{children}</main>
             <DarkButton />
          <Footer />
        {/*</div>*/}
        {/* 모달 컴포넌트 렌더링 */}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)} // 모달 닫기
        />
      </body>
    </html>
  );
}
