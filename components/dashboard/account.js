// account.js
import React, { useState } from 'react';
import Container from "../container";
import { Input, Button, Chip, Tabs, Tab, Card, CardHeader, CardBody } from '@nextui-org/react';
import { auth, database } from '../../config/firebase';

const AccountSection = () => {
  const currentUser = auth.currentUser;
  const [newName, setNewName] = useState(currentUser.displayName || '');
  const [newEmail, setNewEmail] = useState(currentUser.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmationText, setConfirmationText] = useState('');
  const [activeTab, setActiveTab] = useState('name');
  const [chipVisible, setChipVisible] = useState(false);
  const [chipText, setChipText] = useState('');
  const [chipType, setChipType] = useState('success');

  const handleUpdateName = async () => {
    try {
      await database.ref(`users/${currentUser.uid}`).update({ name: newName });
      await currentUser.updateProfile({ displayName: newName });
      showChip('Nombre actualizado exitosamente.', 'success');
    } catch (error) {
      showChip('Error al actualizar el nombre: ' + error.message, 'error');
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      showChip('La nueva contraseña y la confirmación no coinciden.', 'error');
      return;
    }

    try {
      await currentUser.updatePassword(newPassword);
      showChip('Contraseña actualizada exitosamente.', 'success');
    } catch (error) {
      showChip('Error al actualizar la contraseña: ' + error.message, 'error');
    }
  };

  const handleDeleteAccount = async () => {
    if (confirmationText.trim() !== 'Eliminar Cuenta') {
      showChip('Texto de confirmación incorrecto. Por favor, escribe "Eliminar Cuenta".', 'error');
      return;
    }

    try {
      await database.ref(`users/${currentUser.uid}`).remove();
      await currentUser.delete();
      showChip('Cuenta eliminada exitosamente.', 'success');
    } catch (error) {
      showChip('Error al eliminar la cuenta: ' + error.message, 'error');
    }
  };

  const showChip = (message, type) => {
    setChipText(message);
    setChipType(type);
    setChipVisible(true);
    setTimeout(() => setChipVisible(false), 5000);
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <Container className="flex flex-wrap justify-center mt-20">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold text-center">Cuenta</h1>
  
        {/* Tabs para cambiar entre secciones */}
        <div className="mx-auto max-w-md">
          <Tabs
            className="mx-auto rounded-md overflow-hidden"
            fullWidth
            size="md"
            aria-label="Tabs form"
            activeKey={activeTab}
            onChange={handleTabChange}
          >
            <Tab key="name" title="Nombre">
              <Card>
                <CardHeader className="text-lg font-bold">Cambiar Nombre</CardHeader>
                <CardBody>
                  {/* Formulario para cambiar el nombre */}
                  <div>
                    <label className="text-md">Nuevo nombre:</label>
                    <Input
                      type="text"
                      className="mt-2"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Ingresa el nuevo nombre"
                    />
                    <Button onClick={handleUpdateName} className="mt-6">
                      Actualizar Nombre
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="password" title="Contraseña">
              <Card>
                <CardHeader className="text-lg font-bold">Cambiar Contraseña</CardHeader>
                <CardBody>
                  {/* Formulario para cambiar la contraseña con confirmación */}
                  <div>
                    <label className="text-md">Nueva contraseña:</label>
                    <Input
                      type="password"
                      className="mt-2 mb-4"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Ingresa la nueva contraseña"
                    />
                    <label className="text-md mt-8">Confirmar contraseña:</label>
                    <Input
                      type="password"
                      className="mt-2"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirma la nueva contraseña"
                    />
                    <Button onClick={handleUpdatePassword} className="mt-6">
                      Actualizar Contraseña
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="delete" title="Eliminar">
              <Card>
                <CardHeader className="text-lg font-bold">Eliminar Cuenta</CardHeader>
                <CardBody>
                  {/* Input para confirmar la eliminación */}
                  <div className="mt-4">
                    <Input
                      placeholder="Escribe 'Eliminar Cuenta' para confirmar"
                      value={confirmationText}
                      onChange={(e) => setConfirmationText(e.target.value)}
                    />
                  </div>
  
                  {/* Botón para eliminar la cuenta */}
                  <div className="mt-6">
                    <Button onClick={handleDeleteAccount} className="bg-red-500 hover:bg-red-600">
                      Confirmar Eliminación
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
  
        {/* Chip para mensajes flotantes */}
        {chipVisible && (
          <div className="mt-4">
            <Chip color={chipType}>{chipText}</Chip>
          </div>
        )}
      </div>
    </Container>
  );
}

export default AccountSection;
