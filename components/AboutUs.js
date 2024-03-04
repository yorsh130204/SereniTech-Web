import React from 'react';
import { UserIcon } from "@heroicons/react/24/solid";
import Container from "./container";
import { useTranslation } from 'react-i18next';

const AboutUsSection = () => {
  const { t } = useTranslation("translation");
  
  // Información de los integrantes del proyecto
  const teamMembers = [
    {
      name: t("teamMembers.e1.name"),
      role: t("teamMembers.e1.role"),
      description: t("teamMembers.e1.description"),
      icon: <UserIcon className="w-12 h-12 text-gray-700" />,
    },
    {
      name: t("teamMembers.e2.name"),
      role: t("teamMembers.e2.role"),
      description: t("teamMembers.e2.description"),
      icon: <UserIcon className="w-12 h-12 text-gray-700" />,
    },
    {
      name: t("teamMembers.e3.name"),
      role: t("teamMembers.e3.role"),
      description: t("teamMembers.e3.description"),
      icon: <UserIcon className="w-12 h-12 text-gray-700" />,
    },
    {
      name: t("teamMembers.e4.name"),
      role: t("teamMembers.e4.role"),
      description: t("teamMembers.e4.description"),
      icon: <UserIcon className="w-12 h-12 text-gray-700" />,
    },
  ];

  return (
    <Container className="py-16 bg-gray-100 dark:bg-transparent rounded-[20px]">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">{t("teamMembers.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`p-8 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-105 dark:bg-[#0b4b7d] bg-white `}>
              {React.cloneElement(member.icon, {
                className: `w-12 h-12 text-gray-400 hover:text-[#0c5a8d] dark:hover:text-white`, 
              })}
              <h3 className="text-center text-lg font-bold my-4 text-gray-800 dark:text-white">{member.name}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{member.role}</p>
              <p className="text-center text-gray-700 dark:text-gray-300 italic transition duration-300 hover:text-[#0c5a8d] dark:hover:text-white">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AboutUsSection;
