import React from 'react';
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Container from "./container";

const AboutUsSection = () => {

  // Información de los integrantes del proyecto
  const teamMembers = [
    {
      name: 'Jorge Alberto Valenzuela Castañon',
      role: 'IoT, Frontend y Backend',
      description: 'Estudiante de Tecnologías de la Información con experiencia en IoT, desarrollo frontend y backend.',
      icon: <AcademicCapIcon className="w-12 h-12 text-gray-700" />,
    },
    {
      name: 'Gael Flores López',
      role: 'Desarrollador Frontend',
      description: 'Estudiante especializado en el desarrollo frontend.',
      icon: <AcademicCapIcon className="w-12 h-12 text-gray-700" />,
    },
    {
      name: 'Gerardo Alberto Zapata Sanchez',
      role: 'Desarrollador Backend',
      description: 'Estudiante especializado en el desarrollo backend.',
      icon: <AcademicCapIcon className="w-12 h-12 text-gray-700" />,
    },
    {
      name: 'Dayana Jatziry Cruz Garza',
      role: 'Especialista en IoT',
      description: 'Estudiante enfocada en el desarrollo de soluciones IoT.',
      icon: <AcademicCapIcon className="w-12 h-12 text-gray-700" />,
    },
  ];

  return (
    <Container className="py-16 bg-gray-100 dark:bg-transparent">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`p-8 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 dark:bg-[#0b4b7d] bg-white`}>
              {React.cloneElement(member.icon, {
                className: `w-12 h-12 text-gray-400`, 
              })}
              <h3 className="text-lg font-bold my-4 text-gray-800 dark:text-white">{member.name}</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-400">{member.role}</p>
              <p className="text-center text-gray-700 dark:text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AboutUsSection;
