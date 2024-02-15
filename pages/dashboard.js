import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!(currentUser && currentUser.email !== 'Guest')) {
      }
    };

    checkAuthentication();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  // Check if currentUser is "Guest" before rendering dashboard content
  if (currentUser && currentUser.email !== 'Guest') {
    return (
      <div>
        <p>Hello, {currentUser.email}!</p>
        <button onClick={handleLogout}>Logout</button>
        {/* Other dashboard content */}
      </div>
    );
  } else {
    // Redirect if currentUser is "Guest" or not present
    return null;
  }
};

export default Dashboard;
