import { ReactElement } from "react";
import DashboardLayout from "../../components/dashboard-layout";
import type { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
