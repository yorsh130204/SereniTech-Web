//signup.js
import React, { useRef, useState } from "react";
import Link from "next/link";
import CustomHead from '../components/CustomHead';
import Navbar2 from "../components/navbar2";
import { useAuth } from "../contexts/AuthContext";
import { Mail, Lock, User } from 'react-feather';  // Agregué el ícono para el nombre
import { useRouter } from 'next/router';
import LanguageButton from "../components/translate"
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const { t } = useTranslation("translation");

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();  // Nuevo ref para el nombre
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
  
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError(t("registrar.t1"));
      return;
    }
  
    // Check if the password is at least 8 characters
    const password = passwordRef.current.value;
    if (password.length < 8) {
      setError(t("iniciar.e1"));
      return;
    }
  
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      router.push('/dashboard');
    } catch (error) {
      console.error(t("iniciar.e2"), error);
      setError(t("iniciar.e2"));
    }
    setLoading(false);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    passwordConfirmRef.current.value = "";
    nameRef.current.value = "";  // Limpiamos también el campo del nombre
  }

  return (
    <>
      <CustomHead />
      <Navbar2 />

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-md p-8 shadow-md w-96 dark:bg-trueGray-600">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{t("cta.title3")}</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="text-sm mb-2 flex items-center">  {/* Nueva etiqueta para el nombre */}
                <User className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                {t("popup.t3")}
              </label>
              <input
                id="name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out dark:bg-trueGray-700"
                type="text"
                ref={nameRef}
                placeholder={t("popup.t3")}
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="text-sm mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                {t("popup.t5")}
              </label>
              <input
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out dark:bg-trueGray-700"
                type="email"
                ref={emailRef}
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm mb-2 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                {t("iniciar.t1")}
              </label>
              <input
                id="password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out dark:bg-trueGray-700"
                type="password"
                ref={passwordRef}
                placeholder={t("iniciar.t2")}
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password-confirm" className="text-sm mb-2 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                {t("registrar.t2")}
              </label>
              <input
                id="password-confirm"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out dark:bg-trueGray-700"
                type="password"
                ref={passwordConfirmRef}
                placeholder={t("iniciar.t2")}
                required
              />
            </div>
            {error && <p className="text-red-500 mt-2 mb-2">{error}</p>}
            <button
              className="bg-[#127cb1] text-white px-4 py-2 rounded-md hover:bg-[#0b4b7d] focus:outline-none focus:bg-[#0b4b7d] transition duration-300 ease-in-out"
              type="submit"
              disabled={loading}
            >
              {t("translation.hero.signupButton")}
            </button>
          </form>
          <div className="mt-3 text-center">
            {t("registrar.t3")}{' '}
            <Link
              href="/login"
              className="text-[#127cb1] dark:text-[#1797ce] dark:hover:text-white transition-colors duration-300"
            >
              {t("translation.hero.loginButton")}
            </Link>
          </div>
        </div>
      </div>
      <LanguageButton />
    </>
  );
}
