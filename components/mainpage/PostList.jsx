"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Box, Text } from "@radix-ui/themes";

export default function PostList() {
  // 🔥 최신 뉴스 데이터 (하드코딩)
  const [posts] = useState([
    {
      id: 1,
      title: "SK하이닉스 자회사 솔리다임, 소비자용 SSD 시장 철수…AI용 낸드 집중",
      summary: "SK하이닉스의 자회사 솔리다임이 소비자용 SSD 시장에서 철수하고, AI용 낸드 플래시 메모리에 집중하기로 결정했습니다.",
      image: "/images/sk_hynix.jpg",
      date: "2025-02-08",
      category: "기술"
    },
    {
      id: 2,
      title: "과기정통부-시스코, 한국 청년 대상 사이버보안 교육 실시",
      summary: "과학기술정보통신부와 시스코가 협력하여 한국 청년들을 위한 사이버보안 교육 프로그램을 시작합니다.",
      image: "/images/cisco_security.jpg",
      date: "2025-02-07",
      category: "보안"
    },
    {
      id: 3,
      title: "니콘이미징코리아, 고객 참여형 '니콘 캘린더 프로젝트' 실시",
      summary: "니콘이미징코리아가 고객들이 직접 참여하는 '니콘 캘린더 프로젝트'를 통해 새로운 마케팅 활동을 전개합니다.",
      image: "/images/nikon_calendar.jpg",
      date: "2025-02-06",
      category: "IT"
    },
    {
      id: 4,
      title: "NIPA, 올해 AI 컴퓨팅 인프라에 5634억 원 투자",
      summary: "정보통신산업진흥원(NIPA)이 올해 AI 컴퓨팅 인프라에 총 5634억 원을 투자하여 관련 산업을 지원합니다.",
      image: "/images/nipa_ai.jpg",
      date: "2025-02-05",
      category: "AI"
    },
    {
      id: 5,
      title: "삼성전자, 갤럭시 S25 시리즈 공개",
      summary: "삼성전자가 최신 스마트폰 갤럭시 S25 시리즈를 공개하며, 향상된 성능과 새로운 기능을 선보였습니다.",
      image: "/images/galaxy_s25.jpg",
      date: "2025-02-04",
      category: "모바일"
    },
    {
      id: 6,
      title: "오픈AI, GPT-5 출시로 AI 성능 대폭 향상",
      summary: "오픈AI가 최신 AI 모델인 GPT-5를 출시하여 자연어 처리 능력이 크게 향상되었습니다.",
      image: "/images/gpt5.jpg",
      date: "2025-02-03",
      category: "AI"
    },
    {
      id: 7,
      title: "애플, 새로운 AR 글래스 공개",
      summary: "애플이 증강현실(AR) 기능을 탑재한 새로운 AR 글래스를 공개하여 주목받고 있습니다.",
      image: "/images/apple_ar_glass.jpg",
      date: "2025-02-02",
      category: "기술"
    },
    {
      id: 8,
      title: "구글, 클라우드 게임 서비스 '스태디아' 종료 발표",
      summary: "구글이 클라우드 게임 서비스인 '스태디아'의 서비스를 종료하기로 결정하였습니다.",
      image: "/images/google_stadia.jpg",
      date: "2025-02-01",
      category: "게임"
    },
    {
      id: 9,
      title: "테슬라, 완전 자율주행 소프트웨어 업데이트",
      summary: "테슬라가 완전 자율주행 기능을 제공하는 소프트웨어 업데이트를 발표하였습니다.",
      image: "/images/tesla_autopilot.jpg",
      date: "2025-01-31",
      category: "자동차"
    },
    {
      id: 10,
      title: "마이크로소프트, 윈도우 12 출시 예정",
      summary: "마이크로소프트가 차세대 운영체제인 윈도우 12를 곧 출시할 예정이라고 발표하였습니다.",
      image: "/images/windows_12.jpg",
      date: "2025-01-30",
      category: "소프트웨어"
    },
    {
      id: 11,
      title: "아마존, 드론 배송 서비스 시작",
      summary: "아마존이 드론을 활용한 배송 서비스를 일부 지역에서 시작하였습니다.",
      image: "/images/amazon_drone.jpg",
      date: "2025-01-29",
      category: "물류"
    },
    {
      id: 12,
      title: "페이스북, 메타버스 플랫폼 '호라이즌' 출시",
      summary: "페이스북이 메타버스 플랫폼인 '호라이즌'을 공식 출시하여 가상현실 시장에 진출하였습니다.",
      image: "/images/facebook_horizon.jpg",
      date: "2025-01-28",
      category: "IT"
    },
    {
      id: 13,
      title: "인텔, 14세대 코어 프로세서 발표",
      summary: "인텔이 최신 14세대 코어 프로세서를 발표하여 성능과 전력 효율을 개선하였습니다.",
      image: "/images/intel_14th_gen.jpg",
      date: "2025-01-27",
      category: "하드웨어"
    },
    {
      id: 14,
      title: "소니, 플레이스테이션 6 개발 중",
      summary: "소니가 차세대 게임 콘솔인 플레이스테이션 6를 개발 중이라고 밝혔습니다.",
      image: "/images/ps6.jpg",
      date: "2025-01-26",
      category: "게임"
    },
    {
      id: 15,
      title: "LG전자, 롤러블 TV 출시",
      summary: "LG전자가 화면을 말아서 보관할 수 있는 롤러블 TV를 출시하였습니다.",
      image: "/images/lg_rollable_tv.jpg",
      date: "2025-01-25",
      category: "가전"
    },
    {
      id: 16,
      title: "우버, 자율주행 택시 서비스 시작",
      summary: "우버가 일부 도시에서 자율주행 택시 서비스를 시작하였습니다.",
      image: "/images/uber_self_driving.jpg",
      date: "2025-01-24",
      category: "교통"
    },
    {
      id: 17,
      title: "🎮 넷플릭스, 게임 스트리밍 서비스 출시",
      summary: "넷플릭스가 게임 스트리밍 서비스를 출시하며, 게임 시장에 본격적으로 진입하였습니다.",
      image: "/images/netflix_games.jpg",
      date: "2025-01-23",
      category: "게임"
    },
    {
      id: 18,
      title: "🔋 삼성SDI, 차세대 전고체 배터리 공개",
      summary: "삼성SDI가 전기차 및 모바일 기기를 위한 차세대 전고체 배터리를 공개하였습니다.",
      image: "/images/samsung_battery.jpg",
      date: "2025-01-22",
      category: "배터리"
    },
    {
      id: 19,
      title: "⚡ 퀄컴, 스냅드래곤 9 시리즈 발표",
      summary: "퀄컴이 차세대 모바일 프로세서인 스냅드래곤 9 시리즈를 발표하였습니다.",
      image: "/images/qualcomm_snapdragon9.jpg",
      date: "2025-01-21",
      category: "모바일"
    },
    {
      id: 20,
      title: "🌍 스타링크, 한국에서도 서비스 개시",
      summary: "일론 머스크의 스타링크 위성 인터넷 서비스가 한국에서도 사용 가능해졌습니다.",
      image: "/images/starlink_korea.jpg",
      date: "2025-01-20",
      category: "인터넷"
    }
]);
      return (
      <Box className="max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
        <ul>
          {posts.map((post, index) => (
              <li key={post.id} className="p-5 flex items-start gap-6 border-b border-gray-300 last:border-none">
                {/* 뉴스 이미지 */}
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-36 h-24 object-cover rounded-md"
                />

                {/* 뉴스 텍스트 */}
                <Box className="flex-1">
                  <Link href={`newspage/${post.id}`} className="block text-gray-900 font-bold text-lg hover:underline">
                    {post.title}
                  </Link>
                  <Text size="2" className="text-gray-600 mt-1">{post.summary}</Text>
                  <Text size="1" className="text-gray-400 mt-2">
                    📅 {post.date} ・ 🏷 {post.category}
                  </Text>
                </Box>
              </li>
          ))}
        </ul>
      </Box>
  );
}