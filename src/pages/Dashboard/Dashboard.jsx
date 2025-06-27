import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
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
} from "recharts";
import {
  FiUsers,
  FiPackage,
  FiGrid,
  FiBox,
  FiMoreHorizontal,
} from "react-icons/fi";
import { Link } from "react-router";
import axios from "axios";
import api from "../../api/api";
import { ErrorAlert } from "../../utils/Alerts";

const salesData = [
  { name: "Jan", sales: 168 },
  { name: "Feb", sales: 385 },
  { name: "Mar", sales: 201 },
  { name: "Apr", sales: 298 },
  { name: "May", sales: 187 },
  { name: "Jun", sales: 195 },
  { name: "Jul", sales: 291 },
  { name: "Aug", sales: 110 },
  { name: "Sep", sales: 215 },
  { name: "Oct", sales: 390 },
  { name: "Nov", sales: 280 },
  { name: "Dec", sales: 112 },
];

const monthlyTargetData = [
  {
    name: "Progress",
    uv: 75.55,
    fill: "#465FFF",
  },
];

function Dashboard() {
  const [totalPlants, setTotalPlants] = useState(0);
  const [myPlants, setMyPlants] = useState(0);

  useEffect(() => {
    axios
      .get(`${api}/plants`)
      .then((res) => {
        setTotalPlants(res?.data?.length);
      })
      .catch((err) => {
        ErrorAlert(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${api}/plants`)
      .then((res) => {
        setMyPlants(res?.data?.length);
      })
      .catch((err) => {
        ErrorAlert(err.message);
      });
  }, []);

  return (
    <div className='min-h-screen bg-base-100 font-inter p-4 sm:p-6 lg:p-8'>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-base-content'>Dashboard</h1>
      </div>

      <div className='grid grid-cols-12 gap-6'>
        {/* Main Content */}
        <div className='col-span-12 space-y-6 xl:col-span-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6'>
            {/* Cards */}
            <div className='card rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-sm'>
              <div className='flex items-center justify-center w-12 h-12 bg-base-200 rounded-xl'>
                <FiUsers className='text-base-content size-6' />
              </div>
              <div className='flex items-end justify-between mt-5'>
                <div>
                  <span className='text-sm text-base-content/70'>
                    Total Users
                  </span>
                  <h4 className='mt-2 font-bold text-base-content text-3xl'>
                    <CountUp end={3782} duration={2} separator=',' />
                  </h4>
                </div>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-green-100 text-green-600'>
                  +11.01%
                </span>
              </div>
            </div>

            <div className='card rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-sm'>
              <div className='flex items-center justify-center w-12 h-12 bg-base-200 rounded-xl'>
                <FiPackage className='text-base-content' />
              </div>
              <div className='flex items-end justify-between mt-5'>
                <div>
                  <span className='text-sm text-base-content/70'>Orders</span>
                  <h4 className='mt-2 font-bold text-base-content text-3xl'>
                    <CountUp end={5359} duration={2} separator=',' />
                  </h4>
                </div>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-red-100 text-red-600'>
                  -9.05%
                </span>
              </div>
            </div>

            <Link
              to={"/all_plants"}
              className='card rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-sm'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-base-200 rounded-xl'>
                <FiGrid className='text-base-content' />
              </div>
              <div className='flex items-end justify-between mt-5'>
                <div>
                  <span className='text-sm text-base-content/70'>
                    Total Items
                  </span>
                  <h4 className='mt-2 font-bold text-base-content text-3xl'>
                    <CountUp end={totalPlants} duration={2} separator=',' />
                  </h4>
                </div>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-green-100 text-green-600'>
                  +5.12%
                </span>
              </div>
            </Link>

            <Link
              to={"/my_plants"}
              className='card rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-sm'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-base-200 rounded-xl'>
                <FiBox className='text-base-content' />
              </div>
              <div className='flex items-end justify-between mt-5'>
                <div>
                  <span className='text-sm text-base-content/70'>My Items</span>
                  <h4 className='mt-2 font-bold text-base-content text-3xl'>
                    <CountUp end={myPlants} duration={2} separator=',' />
                  </h4>
                </div>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-sm bg-yellow-100 text-yellow-600'>
                  +3.45%
                </span>
              </div>
            </Link>
          </div>

          {/* Monthly Sales Chart */}
          <div className='card overflow-hidden rounded-2xl border border-base-200 bg-base-100 px-5 pt-5 sm:px-6 sm:pt-6 shadow-sm mt-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-base-content'>
                Monthly Sales
              </h3>
              <div className='relative inline-block dropdown dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-sm'
                >
                  <FiMoreHorizontal className='text-base-content/50 hover:text-base-content size-6' />
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
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
            <div className='max-w-full overflow-x-auto custom-scrollbar'>
              <div
                style={{ minHeight: "195px", minWidth: "650px" }}
                className='w-full h-48'
              >
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart
                    data={salesData}
                    margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray='3 3'
                      stroke='#e0e0e0'
                      vertical={false}
                    />
                    <XAxis
                      dataKey='name'
                      axisLine={false}
                      tickLine={false}
                      className='text-xs text-base-content/60'
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      className='text-xs text-base-content/60'
                    />
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      contentStyle={{
                        backgroundColor: "#1f2937", // Tailwind's gray-800
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      labelStyle={{ color: "white" }}
                      itemStyle={{ color: "white" }}
                    />
                    <Bar
                      dataKey='sales'
                      fill='#465FFF'
                      barSize={10}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className='col-span-12 space-y-6 xl:col-span-4'>
          <div className='card rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-base-content'>
              Recent Activities
            </h3>
            <ul className='mt-4 space-y-2 text-base-content/70'>
              <li>Order #1234 placed.</li>
              <li>Product inventory updated.</li>
            </ul>
          </div>

          <div className='card rounded-2xl border border-base-200 bg-base-100 p-5 md:p-6 shadow-sm'>
            <div className='flex justify-between items-start mb-4'>
              <div>
                <h3 className='text-lg font-semibold text-base-content'>
                  Monthly Target
                </h3>
                <p className='mt-1 text-base-content/70 text-sm'>
                  Target you’ve set for each month
                </p>
              </div>
              <button className='p-1 rounded-full hover:bg-base-200 focus:outline-none'>
                <FiMoreHorizontal className='text-base-content/50 hover:text-base-content size-6' />
              </button>
            </div>

            <div className='relative'>
              <div className='max-h-[330px]'>
                <ResponsiveContainer width='100%' height={158}>
                  <RadialBarChart
                    cx='50%'
                    cy='50%'
                    innerRadius='80%'
                    outerRadius='100%'
                    barSize={10}
                    data={monthlyTargetData}
                    startAngle={180}
                    endAngle={-180}
                  >
                    <PolarAngleAxis
                      type='number'
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      dataKey='uv'
                      cornerRadius={10}
                      fill='#465FFF'
                      clockwise
                    />
                    <text
                      x='50%'
                      y='50%'
                      textAnchor='middle'
                      dominantBaseline='middle'
                      className='text-2xl font-bold fill-current text-base-content'
                    >
                      <tspan>
                        <CountUp
                          end={75.55}
                          duration={2.5}
                          decimals={2}
                          suffix='%'
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
