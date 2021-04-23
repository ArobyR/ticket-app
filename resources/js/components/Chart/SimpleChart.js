import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleChart = ({datos}) => {
    const data = [
        {
        name: 'Page A',
        cancelados: 4000,
        atendidos: 2400,
        },
        {
        name: 'Page B',
        cancelados: 3000,
        atendidos: 1398,
        },
        {
        name: 'Page C',
        cancelados: 2000,
        atendidos: 9800,
        },
        {
        name: 'Page D',
        cancelados: 2780,
        atendidos: 3908,
        },
        {
        name: 'Page E',
        cancelados: 1890,
        atendidos: 4800,
        },
        {
        name: 'Page F',
        cancelados: 2390,
        atendidos: 3800,
        },
        {
        name: 'Page G',
        cancelados: 3490,
        atendidos: 4300,
        },
    ];
    return (
        <ResponsiveContainer style={{width: '100%', height: '200px'}}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cancelados" fill="#ee400b"  />
                <Bar dataKey="atendidos" fill="#82ca9d" />
            </BarChart>
      </ResponsiveContainer>
    );
}
 
export default SimpleChart;