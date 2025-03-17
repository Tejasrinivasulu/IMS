import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.3,
    }
  ]
};

const inventoryData = {
  labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'],
  datasets: [
    {
      label: 'Stock Levels',
      data: [120, 90, 60, 45, 75],
      backgroundColor: [
        'rgba(59, 130, 246, 0.5)',
        'rgba(16, 185, 129, 0.5)',
        'rgba(245, 158, 11, 0.5)',
        'rgba(239, 68, 68, 0.5)',
        'rgba(139, 92, 246, 0.5)',
      ],
    }
  ]
};

export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Analytics & Reports</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Sales Trend</h2>
          <Line data={salesData} />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Inventory by Category</h2>
          <Bar data={inventoryData} />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Key Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-600">Total Sales</p>
              <p className="mt-2 text-2xl font-semibold text-blue-900">$45,678</p>
              <p className="mt-1 text-sm text-blue-600">+12.3% from last month</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm font-medium text-green-600">Profit Margin</p>
              <p className="mt-2 text-2xl font-semibold text-green-900">32.8%</p>
              <p className="mt-1 text-sm text-green-600">+2.1% from last month</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm font-medium text-yellow-600">Average Order Value</p>
              <p className="mt-2 text-2xl font-semibold text-yellow-900">$123</p>
              <p className="mt-1 text-sm text-yellow-600">-0.8% from last month</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4">
              <p className="text-sm font-medium text-purple-600">Stock Turnover</p>
              <p className="mt-2 text-2xl font-semibold text-purple-900">4.2x</p>
              <p className="mt-1 text-sm text-purple-600">+0.3x from last month</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Low Stock Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-red-50 p-4">
              <div>
                <p className="font-medium text-red-700">Wireless Headphones</p>
                <p className="text-sm text-red-600">Only 2 units left</p>
              </div>
              <button className="rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-200">
                Reorder
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-4">
              <div>
                <p className="font-medium text-yellow-700">Smart Watch</p>
                <p className="text-sm text-yellow-600">5 units left</p>
              </div>
              <button className="rounded-md bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 hover:bg-yellow-200">
                Reorder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}