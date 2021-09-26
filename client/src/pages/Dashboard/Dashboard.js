import "./Dashboard.scss";
import NumberMade from "../../components/DashboardRoute/NumberMade/NumberMade";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__header">Dashboard</h1>
      <div className="dashboard__made-components">
        <NumberMade />
        <NumberMade />
        <NumberMade />
        <NumberMade />
      </div>
    </div>
  );
};

export default Dashboard;
