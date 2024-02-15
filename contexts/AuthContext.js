//AuthContext.js
import React, { useEffect, useContext, useState, createContext } from 'react';
import { auth, database } from '../config/firebase';
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState();

  // Nueva función para guardar información en la Realtime Database
  async function saveUserDataToDatabase(user, name) {
    try {
      const userRef = ref(database, 'users/' + user.uid);
      await set(userRef, {
        name: name,
        email: user.email,
        uid: user.uid,
      });
    } catch (error) {
      console.error("Error al guardar datos en la base de datos", error);
    }
  }

  const value = {
    currentUser,
    signup: async (email, password, name) => {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await saveUserDataToDatabase(userCredential.user, name);
        // Redirect to the dashboard or protected route
        router.push('/dashboard');
      } catch (error) {
        console.error("Error al crear la cuenta", error);
        throw error;
      }
    },
    login: async (email, password) => {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        // Redirect to the dashboard or protected route
        router.push('/dashboard');
        console.log("Inicio de sesión exitoso");
      } catch (error) {
        console.error("Error al iniciar sesión", error);
        throw error;
      }
    },
    logout: async () => {
      try {
        console.log("Antes de cerrar sesión");
        await auth.signOut();
        console.log("Después de cerrar sesión");
      } catch (error) {
        console.error("Error al cerrar sesión", error);
        throw error;
      }
    },
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser((prevUser) => {
        // Ensure you are working with the latest state
        if (prevUser !== user) {
          return user;
        } else {
          return prevUser;
        }
      });
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
