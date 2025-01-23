"use client";
import React from "react";

export default function Header({ setModalShow }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="/우리FIS - logo.png" alt="Logo" />
      </div>
      <div className="auth-buttons">
        <button className="auth-login" onClick={() => setModalShow(true)}>
          로그인
        </button>
      </div>
    </header>
  );
}
