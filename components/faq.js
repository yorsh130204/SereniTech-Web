import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation("translation");

  const faqdata = [
    {
      question: t("faqdata.faq1.question"),
      answer: t("faqdata.faq1.answer"),
    },
    {
      question: t("faqdata.faq2.question"),
      answer: t("faqdata.faq2.answer"),
    },
    {
      question: t("faqdata.faq3.question"),
      answer: t("faqdata.faq3.answer"),
    },
    {
      question: t("faqdata.faq4.question"),
      answer: t("faqdata.faq4.answer"),
    },
  ];

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left bg-white dark:bg-trueGray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 transition duration-300">
                    <span className="font-semibold">{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#127cb1]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Faq;
