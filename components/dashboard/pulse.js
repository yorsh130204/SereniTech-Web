import React, { useEffect, useRef } from 'react';
import Container from '../container';
import ApexCharts from 'apexcharts';
import ThemeChanger from "../DarkSwitch";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/react';

const PulseSection = () => {
  const chartRef = useRef(null);

  const chartData = {
    series: [{
      name: 'My First dataset',
      data: [65, 59, 80, 81, 56, 55, 40]
    }],
    options: {
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      }
    }
  };

  const tableColumns = [
    { key: 'label', label: 'Month' },
    { key: 'data', label: 'Data' },
  ];

  const tableRows = chartData.options.xaxis.categories.map((label, index) => ({
    id: index + 1,
    label,
    data: chartData.series[0].data[index],
  }));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const options = {
        chart: {
          type: 'line'
        },
        series: chartData.series,
        xaxis: chartData.options.xaxis
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <Container className="flex flex-wrap justify-center mt-20">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-center mb-4">Line Example</h2>
        <div id="chart" ref={chartRef}></div>
      </div>
      <Table aria-label="Example table with dynamic content" className="w-full md:w-1/2 lg:w-1/3">
        <TableHeader>
          {tableColumns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row.id}>
              {tableColumns.map((column) => (
                <TableCell key={column.key}>{getKeyValue(row, column.key)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default PulseSection;
