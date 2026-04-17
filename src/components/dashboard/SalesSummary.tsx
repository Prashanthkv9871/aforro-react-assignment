import { Share } from "lucide-react";
import type { SalesCardType } from "../../types/dashboard";

const cards: SalesCardType[] = [
  {
    iconPath: "/assets/icons/SalesIcon.svg",
    iconColor: "#FA5A7D",
    title: "Total Sales",
    value: "$1k",
    change: "+8% from yesterday",
    color: "bg-red-100",
  },
  {
    iconPath: "/assets/icons/OrderIcon.svg",
    iconColor: "#FF947A",
    title: "Total Order",
    value: "300",
    change: "+5% from yesterday",
    color: "bg-yellow-100",
  },
  {
    iconPath: "/assets/icons/DiscIcon.svg",
    iconColor: "#3CD856",
    title: "Product Sold",
    value: "5",
    change: "+12% from yesterday",
    color: "bg-green-100",
  },
  {
    iconPath: "/assets/icons/AvatarPlusIcon.svg",
    iconColor: "#BF83FF",
    title: "New Customers",
    value: "8",
    change: "+0.5% from yesterday",
    color: "bg-purple-100",
  },
];

const SalesSummary = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-card border border-gray-50">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="font-semibold text-[#05004E]">Today’s Sales</h2>
          <p className="text-xs text-gray-400">Sales Summary</p>
        </div>
        <button className="flex gap-3 cursor-pointer items-center border border-gray-300 px-3 py-1 rounded-md text-sm">
          <Share size={14} /> Export
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          return (
            <div
              key={card.title}
              className={`flex flex-col gap-3 p-4 rounded-xl ${card.color}`}
            >
              <div
                className={`flex w-fit rounded-full p-2`}
                style={{ backgroundColor: card.iconColor }}
              >
                <img src={card.iconPath} alt={card.title} />
              </div>
              <h3 className="text-xl font-bold">{card.value}</h3>
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <p className="text-xs text-blue-500 mt-1">{card.change}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesSummary;
