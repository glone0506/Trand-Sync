export default function NewsHeader() {
  return (
    <header className="flex flex-col items-center mb-2">
      <h2 className="text-base text-black font-bold mb-2">
        AGI를 위해 무엇이 필요할까요? 최근의 생각들
      </h2>
      <div className="flex justify-between mb-4">
        <span className="text-sm text-black font-bold">Forbes</span>
        <span className="text-sm text-black">2025.01.23</span>
        <span className="text-sm text-black">John Werner, Contributor</span>
      </div>
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/6791a1ccdd151f12cde7ccc8/Abstract-flowing-data-ramp-/960x0.jpg?format=jpg&amp;width=full"
        alt="Article Cover"
        className="w-full h-48 rounded-lg mb-4"
      />

      <h3 className="text-base text-black font-bold mb-2">TL;DR AI</h3>
    </header>
  );
}
