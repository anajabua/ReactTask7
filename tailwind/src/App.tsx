import CardsGrid from "./CardsGrid";

const cardsData = [
  { title: "Work", hours: "32hrs", last: "36hrs", bgColor: "bg-[#FF8B64]" },
  { title: "Play", hours: "10hrs", last: "8hrs", bgColor: "bg-[#55C2E6]" },
  { title: "Study", hours: "4hrs", last: "7hrs", bgColor: "bg-[#FF5E7D]" },
  { title: "Exercise", hours: "4hrs", last: "5hrs", bgColor: "bg-[#4BCF82]" },
  { title: "Social", hours: "5hrs", last: "10hrs", bgColor: "bg-[#7335D2]" },
  { title: "Self Care", hours: "2hrs", last: "2hrs", bgColor: "bg-[#F1C75B]" },
];

function App() {
  return (
    <div className="p-6 bg-[#0E1323] min-h-screen flex justify-center">
      <div className="max-w-6xl w-full flex gap-8 flex-col lg:flex-row">

        <CardsGrid cards={cardsData} />
      </div>
    </div>
  );
}

export default App;