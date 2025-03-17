import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Package, ShoppingCart, AlertTriangle, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  {
    name: 'Total Products',
    value: '2,543',
    change: '+12.3%',
    icon: Package,
  },
  {
    name: 'Pending Orders',
    value: '45',
    change: '-2.3%',
    icon: ShoppingCart,
  },
  {
    name: 'Low Stock Items',
    value: '12',
    change: '+3.2%',
    icon: AlertTriangle,
  },
  {
    name: 'Revenue',
    value: '$45,678',
    change: '+15.3%',
    icon: TrendingUp,
  },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.3,
    },
    {
      label: 'Orders',
      data: [28, 48, 40, 19, 86, 27],
      borderColor: 'rgb(99, 102, 241)',
      tension: 0.3,
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-lg bg-white p-6 shadow-sm"
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={cn(
                      'ml-2 text-sm',
                      stat.change.startsWith('+')
                        ? 'text-green-600'
                        : 'text-red-600'
                    )}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Sales Overview</h3>
          <Line data={chartData} />
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Low Stock Alerts</h3>
          <div className="space-y-4">
            {/* Sample low stock items */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-lg bg-red-50 p-4"
              >
                <div>
                  <p className="font-medium text-red-700">Product {item}</p>
                  <p className="text-sm text-red-600">Only 2 units left</p>
                </div>
                <button className="rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-200">
                  Reorder
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}