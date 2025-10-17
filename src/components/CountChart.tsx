"use client"  // Since it's a client component

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 2342,
        fill: 'white',
    },
    {
        name: 'Boys',
        count: 1289,
        fill: '#C3EBFA',
    },
    {
        name: 'Girls',
        count: 1053,
        fill: '#FAE27C',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl  w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
                // label={{ position: 'insideStart', fill: '#fff' }}
                background
                dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
            </RadialBarChart>
        </ResponsiveContainer>

        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-kjcSky rounded-full">

                    </div>
                    <h1 className="font-bold"> 1 289</h1>
                    <h2 className="text-xs text-gray-500">Boys  (54%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-kjcYellow rounded-full">

                    </div>
                    <h1 className="font-bold"> 1 053</h1>
                    <h2 className="text-xs text-gray-500">Girls  (46%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart