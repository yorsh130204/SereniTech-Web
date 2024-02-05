import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar2 = () => {
  const navigation = [
    "SereniTech-Band",
    "Acerca de nosotros",
    "Video sobre el TEA",
    "Testimonios",
    "FAQ",
  ];

  return (
    <div className="w-full fixed top-0 z-50 bg-white dark:bg-trueGray-900">      
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/#">
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
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
