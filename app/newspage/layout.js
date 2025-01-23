export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full ">
      <header className=" flex flex-row justify-center items-center">
        <button className="text-xl text-black">{"<"}</button>
        <h1 className="text-lg  text-black font-bold ml-2 ">
          AGI를 위해 무엇이 필요할까요?
        </h1>
      </header>
      <section className="flex flex-col justify-center items-center ">
        {children}
      </section>
      <footer className="w-full flex flex-low justify-center items-center mt-4">
        <p className=" text-xs  text-gray-600 text-center">
          AI도 실수를 할 수 있으니, 중요한 정보는 원문을 확인해 주세요.
        </p>
      </footer>
    </div>
  );
}
