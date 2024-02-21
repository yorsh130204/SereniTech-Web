// account.js
import React, { useState } from 'react';
import Container from "../container";
import { Input, Button, Chip, Tabs, Tab, Card, CardHeader, CardBody } from '@nextui-org/react';
import { auth, database } from '../../config/firebase';
import { useTranslation } from 'react-i18next';

const AccountSection = () => {
  const { t } = useTranslation("translation");

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
      showChip(t("chipMessages.successNameUpdate"), 'success');
    } catch (error) {
      showChip(t("chipMessages.errorNameUpdate") + error.message, 'error');
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      showChip(t("chipMessages.passwordMismatch"), 'error');
      return;
    }

    try {
      await currentUser.updatePassword(newPassword);
      showChip(t("chipMessages.successPasswordUpdate"), 'success');
    } catch (error) {
      showChip(t("chipMessages.errorPasswordUpdate") + error.message, 'error');
    }
  };

  const handleDeleteAccount = async () => {
    if (confirmationText.trim() !== t("delete.header")) {
      showChip(t("chipMessages.incorrectConfirmationText"), 'error');
      return;
    }

    try {
      await database.ref(`users/${currentUser.uid}`).remove();
      await currentUser.delete();
      showChip(t("chipMessages.successAccountDelete"), 'success');
    } catch (error) {
      showChip(t("chipMessages.errorAccountDelete") + error.message, 'error');
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
        <h1 className="text-4xl font-bold text-center">{t("accountSection.pageTitle")}</h1>
  
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
            <Tab key="name" title={t("accountSection.tabs.name.label")}>
              <Card>
                <CardHeader className="text-lg font-bold">{t("accountSection.tabs.name.header")}</CardHeader>
                <CardBody>
                  {/* Formulario para cambiar el nombre */}
                  <div>
                    <label className="text-md">{t("accountSection.tabs.name.newNameLabel")}</label>
                    <Input
                      type="text"
                      className="mt-2"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder={t("accountSection.tabs.name.newNamePlaceholder")}
                    />
                    <Button onClick={handleUpdateName} className="mt-6">
                      {t("accountSection.tabs.name.updateButton")}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="password" title={t("accountSection.tabs.password.label")}>
              <Card>
                <CardHeader className="text-lg font-bold">{t("accountSection.tabs.password.header")}</CardHeader>
                <CardBody>
                  {/* Formulario para cambiar la contraseña con confirmación */}
                  <div>
                    <label className="text-md">{t("accountSection.tabs.password.newPasswordLabel")}</label>
                    <Input
                      type="password"
                      className="mt-2 mb-4"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder={t("accountSection.tabs.password.newPasswordPlaceholder")}
                    />
                    <label className="text-md mt-8">{t("accountSection.tabs.password.confirmPasswordLabel")}</label>
                    <Input
                      type="password"
                      className="mt-2"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder={t("accountSection.tabs.password.confirmPasswordPlaceholder")}
                    />
                    <Button onClick={handleUpdatePassword} className="mt-6">
                    {t("accountSection.tabs.password.updateButton")}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="delete" title={t("accountSection.tabs.delete.label")}>
              <Card>
                <CardHeader className="text-lg font-bold">{t("accountSection.tabs.delete.header")}</CardHeader>
                <CardBody>
                  {/* Input para confirmar la eliminación */}
                  <div className="mt-4">
                    <Input
                      placeholder={t("accountSection.tabs.delete.confirmationPlaceholder")}
                      value={confirmationText}
                      onChange={(e) => setConfirmationText(e.target.value)}
                    />
                  </div>
  
                  {/* Botón para eliminar la cuenta */}
                  <div className="mt-6">
                    <Button onClick={handleDeleteAccount} className="bg-red-500 hover:bg-red-600">
                    {t("accountSection.tabs.delete.deleteButton")}
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
