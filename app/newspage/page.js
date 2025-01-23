import NewsHashtag from "@/components/mainpage/newshashtag";
import NewsHeader from "@/components/mainpage/newsheader";
import NewsSection from "@/components/mainpage/newssection";

export default function NewsPage() {
  return (
    <div>
      <NewsHeader />
      <NewsSection />
      <NewsHashtag />
    </div>
  );
}
