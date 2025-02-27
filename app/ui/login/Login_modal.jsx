import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ChatFill } from "react-bootstrap-icons"; // 아이콘 import

export default function CustomModal(props) {
  // 카카오 로그인 URL을 하드코딩한 API 키와 리다이렉트 URI로 설정
  const kakaoAPIKey = "d9c6c50b0ff436053e2ffa56d9e6fc9d"; // 여기에 실제 API 키를 입력하세요
  const redirectURI = "http://localhost:3000"; // 리다이렉트 URI 설정

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoAPIKey}&redirect_uri=${redirectURI}&response_type=code`;

  // 카카오 로그인 핸들러
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{
          borderBottom: "none", // 회색 선 제거
        }}
      ></Modal.Header>
      <Modal.Body
        style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}
      >
        <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>
          변화의 흐름을 읽다
          <br />
          <span style={{ fontSize: "24px" }}>Trand Sync</span>
        </h5>
        <p style={{ marginBottom: "30px", color: "#666" }}>
          IT 트렌드의 중심에서
          <br />
          세상을 바꾸는 아이디어를 발견하세요.
        </p>
        <Button
          style={{
            backgroundColor: "#FFD400",
            border: "none",
            color: "#000",
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
            padding: "15px",
            borderRadius: "50px",
            marginBottom: "15px",
            display: "flex", // 아이콘과 텍스트 정렬
            alignItems: "center",
            justifyContent: "center",
            gap: "10px", // 아이콘과 텍스트 간격
          }}
          onClick={handleKakaoLogin} // Trigger Kakao login on click
        >
          <ChatFill size={20} style={{ marginRight: "10px" }} />
          카카오로 3초만에 시작하기
        </Button>
      </Modal.Body>
    </Modal>
  );
}
