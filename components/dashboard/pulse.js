// pulse.js
import React, { useEffect, useState, useRef } from 'react';
import Container from '../container';
import ApexCharts from 'apexcharts';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/react';
import { auth, database } from '../../config/firebase';
import { useTranslation } from 'react-i18next';

const PulseSection = () => {
  const { t } = useTranslation("translation");
  const chartRef = useRef(null);
  const [pulsesData, setPulsesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        const pulsesRef = database.ref(`users/${currentUser.uid}/pulse`);
        const pulsesSnapshot = await pulsesRef.get();

        if (pulsesSnapshot.exists()) {
          const pulsesData = pulsesSnapshot.val();
          const allPulses = Object.keys(pulsesData).map(key => ({
            key,
            valor: pulsesData[key].valor,
            timestamp: pulsesData[key].timestamp,
          }));

          // Ordenar todas las pulsaciones por timestamp de forma descendente
          allPulses.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

          setPulsesData(allPulses);

          // Configuración del gráfico con los datos
          const options = {
            chart: {
              type: 'line',
              foreColor: '#6B7280', // Color de la leyenda
            },
            series: [{
              name: t("pulse.title"),
              data: allPulses.map(pulse => pulse.valor),
            }],
            xaxis: {
              categories: allPulses.map(pulse => formatTimestamp(pulse.timestamp)),
              labels: {
                style: {
                  colors: '#9CA3AF', // Color de las etiquetas del eje x
                },
              },
              tickPlacement: 'between',
            },
            yaxis: {
              labels: {
                style: {
                  colors: '#9CA3AF', // Color de las etiquetas del eje y
                },
              },
            },
            grid: {
              borderColor: '#D1D5DB', // Color del borde de la cuadrícula
            },
            colors: ["#FF1654"], // Color de la línea del gráfico
            tooltip: {
              theme: 'dark', // Tema oscuro para el tooltip
            },
            markers: {
              size: 6, // Tamaño de los marcadores en el gráfico
              colors: "#ffffff", // Color de los marcadores
              strokeColors: '#FF1654', // Color del borde de los marcadores
              strokeWidth: 2, // Ancho del borde de los marcadores
            },
          };

          const chart = new ApexCharts(chartRef.current, options);
          chart.render();

        } else {
          setPulsesData([]);
        }
      } catch (error) {
        console.error(t("pulse.error"), error.message);
      }
    };

    fetchData();
  }, []);

  const tableColumns = [
    { key: 'timestamp', label: t("pulse.lastUpdated") },
    { key: 'valor', label: t("pulse.currentPulse") },
  ];

  return (
    <Container className="flex flex-wrap justify-center mt-20 pb-0">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center dark:text-gray-200">{t("pulse.title")}</h1>
        <p className="text-gray-500 text-lg text-center mb-6 dark:text-gray-300">{t("pulse.subtitle")}</p>
        <div className="flex flex-col md:flex-row items-center">
          {/* Gráfica */}
          <div className="mb-4 md:mr-4 md:mb-0 w-full md:w-1/2" id="chart" ref={chartRef}></div>

          {/* Tabla */}
          <div className="w-full md:w-1/2">
            <Table aria-label="Pulse Data Table" className="border border-gray-50 rounded-2xl shadow-md w-full md:max-w-md lg:max-w-lg">
              <TableHeader>
                {tableColumns.map((column) => (
                  <TableColumn className="text-xl dark:text-gray-200" key={column.key}>{column.label}</TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {pulsesData.map((row) => (
                  <TableRow key={row.key} className={row.valor > 100 ? 'bg-red-300 rounded-lg' : ''}>
                    {tableColumns.map((column) => (
                      <TableCell className='text-gray-500 text-lg dark:text-gray-300' key={column.key}>
                        {column.key === 'timestamp' ? formatTimestamp(row[column.key]) : getKeyValue(row, column.key)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default PulseSection;
