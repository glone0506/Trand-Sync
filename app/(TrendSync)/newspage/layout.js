

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full ">

      <section className="flex flex-col justify-center shadow-2xl items-center ">
        {children}
      </section>
    </div>
  );
}
