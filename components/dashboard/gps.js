//gps.js
import React, { useEffect, useState, useRef } from 'react';
import Container from '../container';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/react';
import { auth, database } from '../../config/firebase';
import { Button } from '@nextui-org/react';
import { Link } from 'react-feather';
import { useTranslation } from 'react-i18next';

const GPSScreen = () => {
  const { t } = useTranslation("translation");
  const chartRef = useRef(null);
  const [locationsData, setLocationsData] = useState([]);

  const extractLatitudFromLink = (link) => {
    // Implementa la lógica para extraer la latitud del enlace
    // Este es solo un ejemplo, ajusta según tu estructura de enlaces
    const match = link.match(/place\/([-0-9.]+),([-0-9.]+)/);
    return match ? match[1] : '';
  };

  const extractLongitudFromLink = (link) => {
    // Implementa la lógica para extraer la longitud del enlace
    // Este es solo un ejemplo, ajusta según tu estructura de enlaces
    const match = link.match(/place\/([-0-9.]+),([-0-9.]+)/);
    return match ? match[2] : '';
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;

        // Obtener datos de ubicaciones
        const locationsRef = database.ref(`users/${currentUser.uid}/localization`);
        const locationsSnapshot = await locationsRef.get();

        if (locationsSnapshot.exists()) {
          const locationsData = locationsSnapshot.val();
          const allLocations = Object.keys(locationsData).map(key => ({
            key,
            link: locationsData[key].link,
            timestamp: locationsData[key].timestamp,
          }));

          // Ordenar todas las ubicaciones por timestamp de forma descendente
          allLocations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

          setLocationsData(allLocations);
        } else {
          setLocationsData([]);
        }
      } catch (error) {
        console.error(t("gps.error"), error.message);
      }
    };

    fetchData();
  }, []);

  const tableColumns = [
    { key: 'timestamp', label: t("gps.lastUpdated") },
    { key: 'latitud', label: t("gps.latitude") },
    { key: 'longitud', label: t("gps.longitude") },
    { key: 'ubicacion', label: t("gps.location") },
  ];

  const tableRows = locationsData.map((row) => ({
    id: row.key,
    timestamp: formatTimestamp(row.timestamp),
    latitud: extractLatitudFromLink(row.link),
    longitud: extractLongitudFromLink(row.link),
    ubicacion: (
    <Button
      color="primary"  // Cambia el color según tus preferencias
      variant="text"   // Utiliza el estilo de botón de texto
      aria-label="View Location"
      className="text-[#127cb1] hover:underline"
    >
      <a href={row.link} target="_blank" rel="noopener noreferrer">
        <Link />
      </a>
    </Button>
    ),
  }));

  return (
    <Container className="flex flex-wrap justify-center mt-20">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center dark:text-gray-200">{t("gps.title")}</h1>
        <p className="text-gray-500 text-lg text-center mb-6 dark:text-gray-300">{t("gps.subtitle")}</p>
        <div>
          {/* Tabla */}
          <div className="w-2/3 mx-auto max-h-[400px] overflow-y-auto">
            <Table aria-label="GPS Data Table" className="border border-gray-50 rounded-2xl shadow-xl">
              <TableHeader>
                {tableColumns.map((column) => (
                  <TableColumn className="text-xl dark:text-gray-200" key={column.key}>{column.label}</TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {tableRows.map((row) => (
                  <TableRow key={row.id}>
                    {tableColumns.map((column) => (
                      <TableCell className="text-gray-500 text-lg dark:text-gray-300" key={column.key}>{getKeyValue(row, column.key)}</TableCell>
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

export default GPSScreen;
