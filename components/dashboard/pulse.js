import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import Container from "../container";
import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const columns = [
  { key: 'label', label: 'Month' },
  { key: 'data', label: 'Data' },
];

const rows = data.labels.map((label, index) => ({
  id: index + 1,
  label,
  data: data.datasets[0].data[index],
}));

export default function PulseSection() {
  return (
    <Container className="flex flex-wrap justify-center mt-20">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-center mb-4">Line Example</h2>
        <Line
          data={data}
          width={400}
          height={400}
        />
      </div>
      <Table aria-label="Example table with dynamic content" className="w-full md:w-1/2 lg:w-1/3">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>{getKeyValue(row, column.key)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
