//dashboard.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import Navbar from '../components/dashboard/navbar3';
import CustomHead from '../components/CustomHead';
import dynamic from 'next/dynamic';

const PulseSection = dynamic(() => import('../components/dashboard/pulse'), {
  ssr: false
});

const GpsSection = dynamic(() => import('../components/dashboard/gps'), {
  ssr: false
});

const AccountSection = dynamic(() => import('../components/dashboard/account'), {
  ssr: false
});

import LanguageButton from "../components/translate"

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState('Pulso');

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!(currentUser && currentUser.email !== 'Guest')) {
        router.push('/login');
      }
    };

    checkAuthentication();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, router]);

  // Check if currentUser is "Guest" before rendering dashboard content
  if (currentUser && currentUser.email !== 'Guest') {
    return (
      <>
        <CustomHead />
        <Navbar onSelectSection={handleSelectSection} />
        {selectedSection === 'Pulso' && <PulseSection />}
        {selectedSection === 'GPS' && <GpsSection />}
        {selectedSection === 'Cuenta' && <AccountSection />}
        <LanguageButton />
      </>
    );
  } else {
    // Redirect if currentUser is "Guest" or not present
    return null;
  }
};

export default Dashboard;
