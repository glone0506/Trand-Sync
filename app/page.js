"use client";

import ControlledCarousel from "@/components/mainpage/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import TabBar from "@/components/mainpage/Tabs";

const posts = [
  { id: 1, title: '첫 번째 게시물', content: '첫 게시물입니다.' },
  { id: 2, title: '두 번째 게시물', content: '두 번째 게시물입니다.' },
  { id: 3, title: ' 세 번째 게시물', content: '세 번째 게시물입니다.' },
];


export default function Page() {
  return (
    <div>
        <ControlledCarousel />
        <TabBar />
    </div>
  );
}
