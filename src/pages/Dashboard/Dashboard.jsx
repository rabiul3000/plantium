import React from 'react';
import CountUp from 'react-countup';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts';
import {
  FiUsers,
  FiPackage,
  FiGrid,
  FiBox,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { Link } from 'react-router';

// Data for the charts
const salesData = [
  { name: 'Jan', sales: 168 },
  { name: 'Feb', sales: 385 },
  { name: 'Mar', sales: 201 },
  { name: 'Apr', sales: 298 },
  { name: 'May', sales: 187 },
  { name: 'Jun', sales: 195 },
  { name: 'Jul', sales: 291 },
  { name: 'Aug', sales: 110 },
  { name: 'Sep', sales: 215 },
  { name: 'Oct', sales: 390 },
  { name: 'Nov', sales: 280 },
  { name: 'Dec', sales: 112 },
];

// Data for Monthly Target RadialBarChart
const monthlyTargetData = [
  {
    name: 'Progress',
    uv: 75.55,
    fill: '#465FFF',
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter p-4 sm:p-6 lg:p-8">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main content area */}
        <div className="col-span-12 space-y-6 xl:col-span-8">
          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            {/* Customers Card */}
            <div className="card rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                <FiUsers className="text-gray-800 size-6" size={24} />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-sm text-gray-500">Total Users</span>
                  <h4 className="mt-2 font-bold text-gray-800 text-3xl">
                    <CountUp end={3782} duration={2} separator="," />
                  </h4>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-green-50 text-green-600">
                  +11.01%
                </span>
              </div>
            </div>

            {/* Orders Card */}
            <div className="card rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                <FiPackage className="text-gray-800" size={24} />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-sm text-gray-500">Orders</span>
                  <h4 className="mt-2 font-bold text-gray-800 text-3xl">
                    <CountUp end={5359} duration={2} separator="," />
                  </h4>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-red-50 text-red-600">
                  -9.05%
                </span>
              </div>
            </div>

            {/* Total Items Card */}
            <Link to={'/all_plants'} className="card rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                <FiGrid className="text-gray-800" size={24} />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-sm text-gray-500">Total Items</span>
                  <h4 className="mt-2 font-bold text-gray-800 text-3xl">
                    <CountUp end={1204} duration={2} separator="," />
                  </h4>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-green-50 text-green-600">
                  +5.12%
                </span>
              </div>
            </Link>

            {/* My Items Card */}
            <Link to={'/my_plants'} className="card rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                <FiBox className="text-gray-800" size={24} />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-sm text-gray-500">My Items</span>
                  <h4 className="mt-2 font-bold text-gray-800 text-3xl">
                    <CountUp end={230} duration={2} separator="," />
                  </h4>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-yellow-50 text-yellow-600">
                  +3.45%
                </span>
              </div>
            </Link>
          </div>

          {/* Monthly Sales Chart */}
          <div className="card overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 shadow-sm mt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Monthly Sales</h3>
              <div className="relative inline-block dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-sm"
                >
                  <FiMoreHorizontal
                    className="text-gray-400 hover:text-gray-700 size-6"
                    size={20}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Action 1</a>
                  </li>
                  <li>
                    <a>Action 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto custom-scrollbar">
              <div
                style={{ minHeight: '195px', minWidth: '650px' }}
                className="w-full h-48"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={salesData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e0e0e0"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      className="text-xs text-gray-500"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      className="text-xs text-gray-500"
                    />
                    <Tooltip
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{
                        backgroundColor: 'rgb(55 65 81)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                      }}
                      labelStyle={{ color: 'white' }}
                      itemStyle={{ color: 'white' }}
                    />
                    <Bar
                      dataKey="sales"
                      fill="#465FFF"
                      barSize={10}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="col-span-12 space-y-6 xl:col-span-4">
          {/* Recent Activities */}
          <div className="card rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Order #1234 placed.</li>
              <li>Product inventory updated.</li>
            </ul>
          </div>

          {/* Monthly Target Card */}
          <div className="card rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Monthly Target</h3>
                <p className="mt-1 text-gray-500 text-sm">Target you’ve set for each month</p>
              </div>
              <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none">
                <FiMoreHorizontal className="text-gray-400 hover:text-gray-700 size-6" />
              </button>
            </div>

            <div className="relative">
              <div className="max-h-[330px]">
                <ResponsiveContainer width="100%" height={158}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="80%"
                    outerRadius="100%"
                    barSize={10}
                    data={monthlyTargetData}
                    startAngle={180}
                    endAngle={-180}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      dataKey="uv"
                      cornerRadius={10}
                      fill="#465FFF"
                      clockwise={true}
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold fill-gray-900"
                    >
                      <tspan>
                        <CountUp
                          end={75.55}
                          duration={2.5}
                          decimals={2}
                          suffix="%"
                        />
                      </tspan>
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
