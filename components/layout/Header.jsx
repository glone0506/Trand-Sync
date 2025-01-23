// Header 컴포넌트
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/우리FIS - logo.png" alt="Logo" />
      </div>
      <div className="auth-buttons">
        <button className="auth-login">로그인</button>
      </div>
    </header>
  );
}
