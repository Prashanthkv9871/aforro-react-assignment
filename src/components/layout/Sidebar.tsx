import React from "react";
import {
  LayoutDashboard,
  BarChart2,
  ShoppingCart,
  Settings,
  LogOut,
  Handbag,
  User2,
  MessageSquareMore,
} from "lucide-react";
import { PageRoutes } from "../../utils/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { SideMenuItem } from "../../types/common";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const sideMenus: SideMenuItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, path: PageRoutes.Dashboard },
    { name: "Users", icon: User2, path: PageRoutes.Users },
    { name: "Leaderboard", icon: BarChart2, path: PageRoutes.Leaderboard },
    { name: "Order", icon: ShoppingCart, path: PageRoutes.Orders },
    { name: "Products", icon: Handbag, path: PageRoutes.Products },
    { name: "Sales Report", icon: BarChart2, path: PageRoutes.SalesReport },
    { name: "Messages", icon: MessageSquareMore, path: PageRoutes.Messages },
    { name: "Settings", icon: Settings, path: PageRoutes.Settings },
    {
      name: "Sign Out",
      icon: LogOut,
      onClick: () => {
        console.log("Handle Logout functionality");
        navigate(PageRoutes.Dashboard);
      },
    },
  ];

  return (
    <div className="w-68 bg-white flex flex-col">
      <div>
        <div className="sticky top-0 bg-white flex items-center gap-4 mb-4 px-4 py-2">
          <img src="/logo.svg" alt="Logo" />
          <h1 className="font-semibold text-3xl text-[#151D48]">Dabang</h1>
        </div>

        <div className="space-y-2 whitespace-break-spaces p-4">
          {sideMenus.map((menu) => {
            const Icon = menu.icon;
            return (
              <React.Fragment key={menu.name}>
                {menu.path ? (
                  <Link
                    to={menu.path}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${menu.path === location.pathname ? "bg-[#5D5FEF] text-white" : "text-[#737791] hover:bg-gray-100"}`}
                  >
                    <Icon size={18} />
                    {menu.name}
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-500 hover:bg-gray-100"
                    onClick={() => menu.onClick()}
                  >
                    <Icon size={18} />
                    {menu.name}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="mx-4 relative overflow-hidden flex flex-col gap-2 items-center justify-center bg-[#5D5FEF] text-white px-4 py-8 rounded-xl text-center mt-20 mb-10">
        <img src="/ProRightTopCorner.svg" className="absolute right-0 top-0" />
        <img
          src="/ProLeftBottomCorner.svg"
          className="absolute left-0 bottom-0"
        />

        <img src="/logo2.svg" alt="Logo2" />
        <p className="font-semibold">Dabang Pro</p>
        <p className="text-xs opacity-80 mb-4">
          Get access to all features on tetumbas
        </p>
        <button className="bg-white font-bold text-[#5D5FEF] px-5 py-1 rounded-md text-sm cursor-pointer">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
