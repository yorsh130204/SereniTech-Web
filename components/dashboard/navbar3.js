// Navbar.js
import ThemeChanger from "../DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import {Button} from "@nextui-org/button";
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; // Importa useEffect
import { auth, database } from '../../config/firebase';
import {User, Link} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';


const Navbar = ({ onSelectSection }) => {
  const { t } = useTranslation("translation");

  const navigation = [
    { id: "Pulso", label: t("navbar3.pulso") },
    { id: "GPS", label: t("navbar3.gps") },
    { id: "Cuenta", label: t("navbar3.cuenta") },
  ];

  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  const getUserData = async () => {
    try {
      const user = auth.currentUser;

      // Obtener datos adicionales del usuario desde la base de datos en tiempo real
      const snapshot = await database.ref(`users/${user.uid}`).once('value');
      const userData = snapshot.val();

      if (userData) {
        const userEmail = userData.email;
        const userName = userData.name;

        // Almacenar en el estado del componente
        setUserName(userName);
        setUserEmail(userEmail);
        
        // Aquí puedes actualizar el estado del componente o realizar otras acciones con los datos del usuario
      } else {
        console.log('No se encontraron datos adicionales para el usuario');
      }
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
    }
  };

  useEffect(() => {
    // Llamar a la función para obtener datos del usuario al cargar el componente
    getUserData();
}, [currentUser]);

  return (
    <div className="w-full fixed top-0 z-50 bg-white dark:bg-black">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-[#127cb1] dark:text-gray-100">
                    <span>
                      <Image
                        src="/favicon.png"
                        alt="SereniApp Logo"
                        width="500"
                        height="500"
                        className="w-10"
                      />
                    </span>
                    <span>SereniApp</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#127cb1] focus:text-[#127cb1] focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link onClick={() => onSelectSection(item.id)} key={index} href={`#${item.id.replace(/\s+/g, '-').toLowerCase()}`} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#127cb1] focus:text-[#127cb1] focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                        {item.label}
                      </Link>
                    ))}
                    <Button onClick={handleLogout} className="w-50% px-6 py-2 mt-3 text-center text-white bg-[#0b4b7d] rounded-md lg:ml-5 hover:bg-[#1690c7]">
                      {t("navbar3.cerrar")}
                    </Button>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link onClick={() => onSelectSection(menu.id)} href={`#${menu.id.replace(/\s+/g, '-').toLowerCase()}`} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#127cb1] focus:text-[#127cb1] focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-8 space-x-4 lg:flex nav__item">
          <User   
            name={userName}
            description={(
              <a href="#" size="sm">
                {userEmail}
              </a>
            )}
            avatarProps={{
              src: "/img/users.png",  // La ruta es relativa a la carpeta 'public'
            }}
          />

          <Button onClick={handleLogout} className="px-6 py-2 text-white bg-[#0b4b7d] rounded-md md:ml-5 hover:bg-[#1690c7]">
            {t("navbar3.cerrar")}
          </Button>

          <ThemeChanger className="mr-12" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
