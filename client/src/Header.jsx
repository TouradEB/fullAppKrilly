// import { useContext ,useState } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "./UserContext";
// import { changeLanguage } from "i18next";
// import { useTranslation } from "react-i18next";

// export default function Header() {
//   const { user } = useContext(UserContext);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("Français");
 
 

//   const toggleLanguageMenu = () => {
//     setIsLanguageOpen(!isLanguageOpen);
//   };

//   const selectLanguage = (language) => {
//     changeLanguage(language);
//     setSelectedLanguage(language);
//     setIsLanguageOpen(false);
//     // Mettez à jour la langue de votre application en fonction de la valeur sélectionnée
//     // (par exemple, en utilisant une bibliothèque de traduction ou en modifiant l'état global de la langue)
//   };

//   const { t } = useTranslation();
  
//   return (
//     <header className="flex justify-between items-center">
//       <Link to={"/"} className="flex items-center gap-1">
//         {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
//         </svg> */}

//         <img src="../krili.jpeg" width={180} height={40} className="mr-4" />
//       </Link>

//       {/* <div className="flex gap-2 mt-4 border border-gray-300 grow-0 shrink rounded-full py-2 px-2 shadow-md shadow-gray-300">
//         <div>Partout</div>
//         <div className="border-l border-gray-300"></div>
//         <div>N`importe qu`elle semaine </div>
//         <div className="border-l border-gray-300"></div>
//         <div>Ajouter des chamber</div>
//         <button className="bg-primary text-white py-3 px-3 rounded-full  h-fit">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//           </svg>
//         </button>
//       </div> */}
//       <div>
       
//       </div>
//    <div className="relative ml-4 mt-4">
//         <button onClick={toggleLanguageMenu} className="flex bg-white text-black rounded-full p-2 border border-gray-500 overflow-hidden">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
//           </svg>
//            {selectedLanguage}
//         </button> 

//         {isLanguageOpen && (
//           <div className="absolute right-0 mt-2 bg-white text-black rounded-md border border-gray-500 shadow-md">
//             <ul>
//               <li onClick={() => selectLanguage("fr")} className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${selectedLanguage === "fr" ? "font-bold" : ""}`}>
//                 {t('language.fr')}
//               </li>
//               <li onClick={() => selectLanguage("en")} className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${selectedLanguage === "en" ? "font-bold" : ""}`}>
//               {t('language.en')}
//               </li>
//              <li onClick={() => selectLanguage("ar")} className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${selectedLanguage === "ar" ? "font-bold" : ""}`}> 
//              {t('language.ar')}
//              </li>
//             </ul>    
//           </div>
//         )}
//       </div>
//       <div className="mt-4">
//       {user?.role === "admin" && (
//         <Link to="/dashboard" className="bg-primary text-white py-3 px-3 rounded-full h-fit">
//           {t('Dashboard')}
//         </Link>
//       )}
//       </div>

//       <Link to={user ? "/account" : "/login"} className="mt-4 flex items-center gap-2 border border-gray-300 rounded-full py-1 px-2 ml-11">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//         </svg>
//         <div className= "  bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
//             <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
//           </svg>
//         </div>

//         {!!user && <div>{user.name}</div>}
        
//       </Link>


      
//     </header>
//   );
// }
  


// ============================ 15-6 




// ================================= good version of


import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { user } = useContext(UserContext);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Français");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (language) => {
    changeLanguage(language);
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center">
      <Link to={"/"} className="flex items-center gap-1">
        <img src="../krili.jpeg" width={180} height={40} className="mr-4" alt="Logo" />
      </Link>

      {windowWidth <= 768 && (
        <div className="ml-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}

      {(windowWidth > 768 || isMobileMenuOpen) && (
        <div className="flex items-center">
          <div className="relative ml-4 mt-4">
            <button
              onClick={toggleLanguageMenu}
              className="flex bg-white text-black rounded-full p-2 border border-gray-500 overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                />
              </svg>
              {selectedLanguage}
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md border border-gray-500 shadow-md">
                <ul>
                  <li
                    onClick={() => selectLanguage("fr")}
                    className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                      selectedLanguage === "fr" ? "font-bold" : ""
                    }`}
                  >
                    {t("language.fr")}
                  </li>
                  <li
                    onClick={() => selectLanguage("en")}
                    className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                      selectedLanguage === "en" ? "font-bold" : ""
                    }`}
                  >
                    {t("language.en")}
                  </li>
                  <li
                    onClick={() => selectLanguage("ar")}
                    className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                      selectedLanguage === "ar" ? "font-bold" : ""
                    }`}
                  >
                    {t("language.ar")}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="mt-4 ml-4">
            {user?.role === "admin" && (
              <Link
                to="/dashboard"
                className="bg-primary text-white py-3 px-3 rounded-full h-fit"
              >
                {t("Dashboard")}
              </Link>
            )}
          </div>

          <div className="ml-4">
            <Link
              to={user ? "/account" : "/login"}
              onClick={closeMobileMenu}
              className="mt-4 flex items-center gap-2 border border-gray-300 rounded-full py-1 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 relative top-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {!!user && <div>{user.name}</div>}
            </Link>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="absolute top-0 right-0 w-screen h-screen bg-white">
          <div className="flex flex-col items-end p-4">
            <button
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-8 space-y-4">
              <li>
                <Link
                  to={user ? "/account" : "/login"}
                  onClick={closeMobileMenu}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {user ? t("Account") : t("Login")}
                </Link>
              </li>
              {user?.role === "admin" && (
                <li>
                  <Link
                    to="/dashboard"
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {t("Dashboard")}
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={toggleLanguageMenu}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {selectedLanguage}
                </button>
                {isLanguageOpen && (
                  <ul className="pl-4 mt-2">
                    <li
                      onClick={() => selectLanguage("fr")}
                      className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                        selectedLanguage === "fr" ? "font-bold" : ""
                      }`}
                    >
                      {t("language.fr")}
                    </li>
                    <li
                      onClick={() => selectLanguage("en")}
                      className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                        selectedLanguage === "en" ? "font-bold" : ""
                      }`}
                    >
                      {t("language.en")}
                    </li>
                    <li
                      onClick={() => selectLanguage("ar")}
                      className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                        selectedLanguage === "ar" ? "font-bold" : ""
                      }`}
                    >
                      {t("language.ar")}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

