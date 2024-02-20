import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation("translation");

  const navigation = [
    { id: "SereniTech-Band", label: t("navbar.serenitechBand") },
    { id: "Acerca de nosotros", label: t("navbar.aboutUs") },
    { id: "Video sobre el TEA", label: t("navbar.videoOnASD") },
    { id: "Testimonios", label: t("navbar.testimonials") },
    { id: "FAQ", label: t("navbar.faq") },
  ];

  return (
    <div className="relative m-4">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-[#127cb1] dark:text-gray-100">
                <Image
                  src="/favicon.png"
                  alt="SereniApp Logo"
                  width="500"
                  height="500"
                  className="w-10"
                />
                <span>SereniApp</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              {t("footer.t1")}
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-end">
            <div className="flex flex-col -mt-2 lg:mt-0 mr-10">
              {navigation.map((item, index) => (
                <Link key={index} href={`#${item.id.replace(/\s+/g, '-').toLowerCase()}`} className="px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#127cb1] focus:text-[#127cb1] focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}
        </div>
      </Container>
      <Backlink />
    </div>
  );
}

const Backlink = () => {
  const { t } = useTranslation("translation");

  return (
    <a
      href="#"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-16 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300">
      <span>{t("footer.t2")}</span>
    </a>
  );
};
