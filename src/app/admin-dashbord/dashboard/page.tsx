import Sidebar from "../sidebar/page";

export default function Dashboard() {
    return (

      <div className="flex gap-4">
        <Sidebar />
        <div >
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Total Sales: $10,000</div>
          <div className="bg-white p-4 rounded shadow">Active Users: 150</div>
          <div className="bg-white p-4 rounded shadow">Pending Orders: 5</div>
        </div>
        </div>
        
      </div>
    );
  }
  