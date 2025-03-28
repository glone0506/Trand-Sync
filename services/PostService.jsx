// /services/PostService.js

// (1) 임시 데이터 (나중에 서버에서 fetch할 내용)
const mockPosts = [
    {
        id: 1,
        title: "SK하이닉스 자회사 솔리다임, 소비자용 SSD 시장 철수…AI용 낸드 집중",
        summary:
            "SK하이닉스의 자회사 솔리다임이 소비자용 SSD 시장에서 철수하고, AI용 낸드 플래시 메모리에 집중하기로 결정했습니다.",
        date: "2025-02-08",
        category: "기술",
        author: "Kim Hyeon-woo",
        content: `
SK하이닉스의 자회사 솔리다임이 소비자용 SSD 시장 철수를 발표했습니다.
이번 결정은 AI용 낸드 플래시 메모리에 집중하기 위한 전략적 판단으로 알려졌습니다.

업계 관계자들은 솔리다임의 이번 철수가
반도체 업계 경쟁 구도에 어떤 영향을 미칠지 주목하고 있습니다.
    `,
    },
    {
        id: 2,
        title: "과기정통부-시스코, 한국 청년 대상 사이버보안 교육 실시",
        summary:
            "과학기술정보통신부와 시스코가 협력하여 한국 청년들을 위한 사이버보안 교육 프로그램을 시작합니다.",
        date: "2025-02-07",
        category: "보안",
        author: "Park Ji-eun",
        content: `
과학기술정보통신부와 시스코가 공동으로 사이버보안 교육 프로그램을 마련했습니다.
한국 청년들을 대상으로 실무형 보안 기술 교육을 제공하여
사이버보안 전문가 양성에 기여할 것으로 기대를 모으고 있습니다.
    `,
    },
    {
        id: 3,
        title: "니콘이미징코리아, 고객 참여형 '니콘 캘린더 프로젝트' 실시",
        summary:
            "니콘이미징코리아가 고객들이 직접 참여하는 '니콘 캘린더 프로젝트'를 통해 새로운 마케팅 활동을 전개합니다.",
        date: "2025-02-06",
        category: "IT",
        author: "Lee So-ra",
        content: `
니콘이미징코리아가 고객 참여형 이벤트 '니콘 캘린더 프로젝트'를 시작했습니다.
고객들이 직접 사진을 제출하고, 선정된 작품이 공식 캘린더에 실릴 예정입니다.

이 프로젝트를 통해 니콘이미징코리아는 브랜드 충성도와 고객 만족도를 높이고자 합니다.
    `,
    },
    {
        id: 4,
        title: "NIPA, 올해 AI 컴퓨팅 인프라에 5634억 원 투자",
        summary:
            "정보통신산업진흥원(NIPA)이 올해 AI 컴퓨팅 인프라에 총 5634억 원을 투자하여 관련 산업을 지원합니다.",
        date: "2025-02-05",
        category: "AI",
        author: "Choi Min-jun",
        content: `
정보통신산업진흥원(NIPA)은 올해 AI 컴퓨팅 인프라에 5634억 원을 투자할 계획입니다.
이는 AI 연구개발과 서비스 활성화를 위한 대규모 예산으로,
스타트업 및 중소기업의 AI 활용을 적극 지원한다는 방침입니다.
    `,
    },
    {
        id: 5,
        title: "삼성전자, 갤럭시 S25 시리즈 공개",
        summary:
            "삼성전자가 최신 스마트폰 갤럭시 S25 시리즈를 공개하며, 향상된 성능과 새로운 기능을 선보였습니다.",
        date: "2025-02-04",
        category: "모바일",
        author: "Han Yu-jin",
        content: `
삼성전자가 갤럭시 S25 시리즈를 공개했습니다.
새로운 프로세서와 카메라 기능이 탑재되어 사용자 경험을 한층 향상시켔다는 평가입니다.

공개된 모델은 기본형과 플러스, 울트라 등 3종으로, 각 모델별 차별화된 기능을 갖추고 있습니다.
    `,
    },
    {
        id: 6,
        title: "오픈AI, GPT-5 출시로 AI 성능 대폭 향상",
        summary:
            "오픈AI가 최신 AI 모델인 GPT-5를 출시하여 자연어 처리 능력이 크게 향상되었습니다.",
        date: "2025-02-03",
        category: "AI",
        author: "Kim Na-ri",
        content: `
오픈AI가 GPT-5 모델을 공개하며, 전 세계 개발자들의 관심이 집중되고 있습니다.
이전 버전 대비 대규모 파라미터 증가와 새로운 학습 기법을 도입해
텍스트 생성 품질과 속도를 모두 향상시켰다는 평가입니다.
    `,
    },
    {
        id: 7,
        title: "애플, 새로운 AR 글래스 공개",
        summary:
            "애플이 증강현실(AR) 기능을 탑재한 새로운 AR 글래스를 공개하여 주목받고 있습니다.",
        date: "2025-02-02",
        category: "기술",
        author: "Jung Hyo-rin",
        content: `
애플이 오랫동안 소문만 무성했던 AR 글래스를 공식 발표했습니다.
얇고 가벼운 디자인에 강력한 AR 기능을 탑재해 사용자들에게 색다른 경험을 제공할 것으로 기대됩니다.

출시 시기와 가격은 아직 확정되지 않았으나, 업계의 관심이 뜨겁습니다.
    `,
    },
    {
        id: 8,
        title: "구글, 클라우드 게임 서비스 '스태디아' 종료 발표",
        summary:
            "구글이 클라우드 게임 서비스인 '스태디아'의 서비스를 종료하기로 결정하였습니다.",
        date: "2025-02-01",
        category: "게임",
        author: "Seo Hyeon-woo",
        content: `
구글이 클라우드 게임 플랫폼 '스태디아'의 종료를 공식 발표했습니다.
기존 이용자들은 일정 기간 내 환불 절차를 밟을 수 있으며, 구글은
이번 결정을 통해 AI 및 다른 서비스에 집중할 계획이라고 밝혔습니다.
    `,
    },
    {
        id: 9,
        title: "테슬라, 완전 자율주행 소프트웨어 업데이트",
        summary:
            "테슬라가 완전 자율주행 기능을 제공하는 소프트웨어 업데이트를 발표하였습니다.",
        date: "2025-01-31",
        category: "자동차",
        author: "Park Dae-hyun",
        content: `
테슬라가 완전 자율주행(FSD) 소프트웨어의 신규 업데이트를 배포했습니다.
해당 업데이트를 통해 특정 지역에서 제한적으로 완전 자율주행이 가능해졌으며,
운전자 모니터링 기능도 한층 강화되었습니다.
    `,
    },
    {
        id: 10,
        title: "마이크로소프트, 윈도우 12 출시 예정",
        summary:
            "마이크로소프트가 차세대 운영체제인 윈도우 12를 곧 출시할 예정이라고 발표하였습니다.",
        date: "2025-01-30",
        category: "소프트웨어",
        author: "Lee Seung-hwan",
        content: `
마이크로소프트가 윈도우 12의 출시를 예고했습니다.
향상된 보안 기능과 새로운 UI, 그리고 AI 기능이 대거 도입될 예정이라는 소문이 있습니다.

정식 출시일과 가격 정책은 추후 공개될 예정입니다.
    `,
    },
    {
        id: 11,
        title: "아마존, 드론 배송 서비스 시작",
        summary:
            "아마존이 드론을 활용한 배송 서비스를 일부 지역에서 시작하였습니다.",
        date: "2025-01-29",
        category: "물류",
        author: "Chae Mi-kyung",
        content: `
아마존이 드론 배송 서비스를 시범 운영하기 시작했습니다.
초기에는 일부 지역과 특정 상품에 한정되지만, 성공적으로 자리 잡으면
배송 시장에 큰 변화를 가져올 것으로 기대됩니다.
    `,
    },
    {
        id: 12,
        title: "페이스북, 메타버스 플랫폼 '호라이즌' 출시",
        summary:
            "페이스북이 메타버스 플랫폼인 '호라이즌'을 공식 출시하여 가상현실 시장에 진출하였습니다.",
        date: "2025-01-28",
        category: "IT",
        author: "Oh Jeong-hun",
        content: `
페이스북(메타)이 메타버스 플랫폼 '호라이즌'을 정식 출시했습니다.
가상현실(VR) 환경에서 사용자들이 소통하고, 게임을 즐기며, 상거래까지 할 수 있는
종합 메타버스 서비스를 목표로 하고 있습니다.
    `,
    },
    {
        id: 13,
        title: "인텔, 14세대 코어 프로세서 발표",
        summary:
            "인텔이 최신 14세대 코어 프로세서를 발표하여 성능과 전력 효율을 개선하였습니다.",
        date: "2025-01-27",
        category: "하드웨어",
        author: "Moon Sang-hoon",
        content: `
인텔이 14세대 코어 프로세서를 공개했습니다.
이전 세대 대비 성능과 전력 효율을 대폭 개선했으며, AI 연산에 특화된 기능이 추가되었습니다.

게이머와 크리에이터들에게 더욱 매력적인 옵션이 될 것으로 예상됩니다.
    `,
    },
    {
        id: 14,
        title: "소니, 플레이스테이션 6 개발 중",
        summary:
            "소니가 차세대 게임 콘솔인 플레이스테이션 6를 개발 중이라고 밝혔습니다.",
        date: "2025-01-26",
        category: "게임",
        author: "Ryu Min-seok",
        content: `
소니가 플레이스테이션 6 개발 소식을 공식적으로 인정했습니다.
새로운 하드웨어 성능과 혁신적인 컨트롤러 기능 등이 예고되고 있어
게임 팬들의 기대를 한몸에 받고 있습니다.
    `,
    },
    {
        id: 15,
        title: "LG전자, 롤러블 TV 출시",
        summary:
            "LG전자가 화면을 말아서 보관할 수 있는 롤러블 TV를 출시하였습니다.",
        date: "2025-01-25",
        category: "가전",
        author: "Bae Jung-ho",
        content: `
LG전자가 혁신적인 롤러블 TV를 선보였습니다.
사용하지 않을 때는 화면을 말아 넣어 공간 활용도를 높였고,
고급 패널을 적용해 화질도 뛰어납니다.
    `,
    },
    {
        id: 16,
        title: "우버, 자율주행 택시 서비스 시작",
        summary:
            "우버가 일부 도시에서 자율주행 택시 서비스를 시작하였습니다.",
        date: "2025-01-24",
        category: "교통",
        author: "Han Su-jin",
        content: `
우버가 일부 도시에서 자율주행 택시 시범 서비스를 개시했습니다.
안전 요원이 탑승하긴 하지만, 향후 완전 무인화를 목표로 하고 있어
모빌리티 시장에 큰 변화를 가져올 것으로 기대됩니다.
    `,
    },
    {
        id: 17,
        title: "🎮 넷플릭스, 게임 스트리밍 서비스 출시",
        summary:
            "넷플릭스가 게임 스트리밍 서비스를 출시하며, 게임 시장에 본격적으로 진입하였습니다.",
        date: "2025-01-23",
        category: "게임",
        author: "Kim Eun-ji",
        content: `
넷플릭스가 영화·드라마 스트리밍을 넘어 게임 스트리밍 서비스까지 영역을 확장했습니다.
독점 게임 콘텐츠와 멀티플레이 기능을 제공해 경쟁사와 차별화하려고 합니다.
    `,
    },
    {
        id: 18,
        title: "🔋 삼성SDI, 차세대 전고체 배터리 공개",
        summary:
            "삼성SDI가 전기차 및 모바일 기기를 위한 차세대 전고체 배터리를 공개하였습니다.",
        date: "2025-01-22",
        category: "배터리",
        author: "Yoon Tae-hyeon",
        content: `
삼성SDI가 전고체 배터리 시제품을 발표했습니다.
안전성과 에너지 밀도를 동시에 잡았다는 평가가 나오며,
전기차 시장에서 큰 관심을 받고 있습니다.
    `,
    },
    {
        id: 19,
        title: "⚡ 퀄컴, 스냅드래곤 9 시리즈 발표",
        summary:
            "퀄컴이 차세대 모바일 프로세서인 스냅드래곤 9 시리즈를 발표하였습니다.",
        date: "2025-01-21",
        category: "모바일",
        author: "Song Ga-eul",
        content: `
퀄컴이 스냅드래곤 9 시리즈 프로세서를 발표하며,
모바일 칩셋 시장에서 경쟁이 더욱 치열해질 전망입니다.
AI 연산 성능이 크게 강화되었고, 배터리 효율도 개선되었다고 밝혔습니다.
    `,
    },
    {
        id: 20,
        title: "🌍 스타링크, 한국에서도 서비스 개시",
        summary:
            "일론 머스크의 스타링크 위성 인터넷 서비스가 한국에서도 사용 가능해졌습니다.",
        date: "2025-01-20",
        category: "인터넷",
        author: "Oh Ji-hye",
        content: `
일론 머스크가 이끄는 스페이스X의 스타링크 서비스가 한국에서도 시작됩니다.
오지나 섬 지역 등 기존 인터넷 인프라가 부족한 곳에서 초고속 인터넷 접속이 가능해져,
통신 시장에 새로운 활력을 불어넣을 것으로 기대됩니다.
    `,
    },
];

// (1) 네이버 뉴스 API에서 데이터 가져오기
export async function fetchPosts() {
    try {
        const response = await fetch("http://192.168.0.57:9091/news/it");

        if (!response.ok) {
            throw new Error("네이버 뉴스 API 요청 실패");
        }

        const data = await response.json();

        // 네이버 뉴스 API의 데이터 형식에 맞춰 변환 (가정: items 배열 존재)
        const formattedPosts = data.items.map((item, index) => ({
            id: index + 1, // 네이버 API에는 id가 없으므로 임의로 생성
            title: item.title,
            summary: item.description,
            date: item.pubDate || "날짜 없음",
            category: "IT", // 카테고리 정보가 없을 경우 기본값 지정
            author: "네이버 뉴스",
            content: item.description,
            link: item.link
        }));

        return formattedPosts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // 실패 시 빈 배열 반환
    }
}

// (2) 특정 ID 게시글 가져오기
export async function fetchPostById(id) {
    const allPosts = await fetchPosts();
    return allPosts.find((post) => post.id === Number(id));
}
// // (2) 모든 게시글 가져오기
// export async function fetchPosts() {
//     // 실제 서버와 연동 시에는 여기서 fetch("API_URL") 등을 호출.
//     // 지금은 mockPosts를 반환.
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(mockPosts);
//         }, 300); // 0.3초 후 응답 시뮬레이션
//     });
// }
//
// // (3) 특정 ID 게시글 가져오기
// export async function fetchPostById(id) {
//     const allPosts = await fetchPosts();
//     return allPosts.find((post) => post.id === Number(id));
// }