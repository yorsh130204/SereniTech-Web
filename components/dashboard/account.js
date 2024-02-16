// account.js
import React, { useState } from 'react';
import Container from "../container";
import { Input, Button } from '@nextui-org/react';
import { auth, database } from '../../config/firebase';

const AccountSection = () => {
  const currentUser = auth.currentUser;
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdateName = async () => {
    try {
      // Actualizar el nombre en la base de datos y en la autenticación
      await database.ref(`users/${currentUser.uid}`).update({ name: newName });
      await currentUser.updateProfile({ displayName: newName });

      setSuccessMessage('Nombre actualizado exitosamente.');
    } catch (error) {
      setError('Error al actualizar el nombre: ' + error.message);
    }
  };

  const handUpdateEmail = 

  return (
    <Container className="flex flex-wrap justify-center mt-20">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">Cuenta</h1>

        {/* Formulario para cambiar el nombre */}
        <div className="mt-4">
          <label className="text-lg">Nuevo Nombre:</label>
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Ingresa el nuevo nombre"
          />
          <Button onClick={handleUpdateName} className="mt-2">Actualizar Nombre</Button>
        </div>

        {/* Resto del formulario... */}

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
    </Container>
  );
}

export default AccountSection;
