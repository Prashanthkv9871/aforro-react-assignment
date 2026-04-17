import Layout from "../components/layout/Layout";
import SalesSummary from "../components/dashboard/SalesSummary";
import RevenueChart from "../components/dashboard/RevenueChart";
import TopProducts from "../components/dashboard/TopProducts";
import GeographyChart from "../components/dashboard/GeographyChart";
import { VisitorInsightChart } from "../components/dashboard/VisitorInsightChart";
import CustomerSatisfaction from "../components/dashboard/CustomerSatisfaction";
import TargetVsReality from "../components/dashboard/TargetVsReality";
import VolumeVsServiceLevel from "../components/dashboard/VolumeVsServiceLevel";

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SalesSummary />
        </div>

        <VisitorInsightChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 mt-6">
        <div className="col-span-4">
          <RevenueChart />
        </div>
        <div className="lg:col-span-3">
          <CustomerSatisfaction />
        </div>

        <div className="lg:col-span-3">
          <TargetVsReality />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 mt-6">
        <div className="lg:col-span-4">
          <TopProducts />
        </div>

        <div className="lg:col-span-3">
          <GeographyChart />
        </div>

        <div className="lg:col-span-3">
          <VolumeVsServiceLevel />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
