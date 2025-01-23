import Carousels from "@/components/carousel";

const carouselData = [
  {
    ITEM_CD_DL: "1",
    EXP_CVaRNTS: "Exp 1",
    HR_ITEM_NM: "Item 1",
    LOC: "Location 1",
    ITEM_KR_NM: "아이템 1",
  },
  {
    ITEM_CD_DL: "2",
    EXP_CVaRNTS: "Exp 2",
    HR_ITEM_NM: "Item 2",
    LOC: "Location 2",
    ITEM_KR_NM: "아이템 2",
  },
  {
    ITEM_CD_DL: "3",
    EXP_CVaRNTS: "Exp 3",
    HR_ITEM_NM: "Item 3",
    LOC: "Location 3",
    ITEM_KR_NM: "아이템 3",
  },
  // 추가 데이터...
];

export default function Page() {
  return (
    <div>
      <Carousels carouselData={carouselData} />{" "}
    </div>
  );
}
