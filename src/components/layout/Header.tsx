import { BellIcon, ChevronDownIcon, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const HeaderTitle =
    location.pathname === "/" ? "Dashboard" : location.pathname.split("/")[1];

  return (
    <div className="w-full sticky top-0 bg-white z-10 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-[#1F2937] first-letter:capitalize">
        {HeaderTitle}
      </h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-bg px-8 py-2 rounded-lg w-80 outline-none placeholder:text-[#737791] placeholder:text-sm focus:border border-gray-300"
        />
        <Search color="#5D5FEF" size={18} className="absolute left-2 top-2.5" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/assets/icons/UnitedStateFlagIcon.svg"
            alt="UnitedStateFlagIcon"
          />
          <span className="text-sm text-gray-600 font-semibold">Eng (US)</span>
          <ChevronDownIcon color="lightgray" size={20} />
        </div>

        <div className="relative p-2 rounded bg-[#FFFAF1]">
          <BellIcon color="#FFA412" size={20} />
          <span className="absolute top-1 right-1 h-1.5 w-1.5 bg-[#FFA412] rounded-full"></span>
        </div>
        <div className="flex items-center gap-3">
          <img src="/assets/icons/AvatarIcon.svg" className="w-10 h-10" />
          <div>
            <div className="flex gap-5">
              <p className="text-sm font-medium">Musfiq</p>
              <ChevronDownIcon color="gray" size={24} />
            </div>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
