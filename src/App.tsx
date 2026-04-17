import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRoutes } from "./utils/routes";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Leaderboard from "./pages/Leaderboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import SalesReport from "./pages/SalesReport";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageRoutes.Dashboard} element={<Dashboard />} />
        <Route path={PageRoutes.Users} element={<Users />} />
        <Route path={PageRoutes.Leaderboard} element={<Leaderboard />} />
        <Route path={PageRoutes.Orders} element={<Orders />} />
        <Route path={PageRoutes.Products} element={<Products />} />
        <Route path={PageRoutes.SalesReport} element={<SalesReport />} />
        <Route path={PageRoutes.Messages} element={<Messages />} />
        <Route path={PageRoutes.Settings} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
