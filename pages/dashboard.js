//dashboard.js
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!currentUser) {
      }
    };

    checkAuthentication();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <div>
      <p>Hello, {currentUser ? currentUser.email : currentUser.email}!</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
