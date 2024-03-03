import React, { useEffect, useRef } from 'react';
import Container from '../container';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/react';
import { auth, database } from '../../config/firebase';
import { useTranslation } from 'react-i18next';
import ApexCharts from 'apexcharts';

const PulseSection = () => {
  const { t } = useTranslation("Translation")
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
    { key: 'label', label: 'Fecha' },
    { key: 'data', label: 'Latitud' },
    { key: 'additionalData1', label: 'Longitud' },
    { key: 'additionalData2', label: 'Ubicación' },
  ];

  const tableRows = chartData.options.xaxis.categories.map((label, index) => ({
    id: index + 1,
    label,
    data: chartData.series[0].data[index],
    additionalData1: chartData.series[0].data[index],
    additionalData2: (
      typeof window !== 'undefined' && (
        <a href={`https://www.google.com/maps/@${chartData.series[0].data[index]},${chartData.series[0].data[index]}`} target="_blank" rel="noopener noreferrer">
          <button>Ir a Ubicación</button>
        </a>
      )
    ),
  }));

  useEffect(() => {
  }, []);

  return (
    <Container className="flex flex-wrap justify-center mt-20">
      <h1 className="text-4xl font-bold text-center">{t("accountSection.pageTitle")}</h1>
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