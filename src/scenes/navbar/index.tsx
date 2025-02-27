import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.webp";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ThemeToggle from "@/shared/ThemeToggle";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  // касотмный хук для отслеживания изменений ширины окна
  const isAboveMediumScreens = useMediaQuery("(min-width: 1100px)");

  // нажата ли кнопка меню
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // фон навигации при прокрутке страницы
  const navbarBG = isTopOfPage
    ? ""
    : "bg-primary-100 dark:bg-darkGray-100 drop-shadow";

  // Закрытие окна мобильного меню при нажатии за границы этого меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");

      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuToggled(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* Навигационное меню */}
      <div
        className={`${navbarBG} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Левая часть меню */}

            <img src={Logo} alt="logo" />

            {/* Правая часть меню*/}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page={SelectedPage.Home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.Benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.OurClasses}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.ContactUs}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <a
                  className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500"
                  href="tel:+79618887889"
                >
                  <p className="text-lg">+7(961)888-78-89</p>
                </a>
                <div className="flex gap-4">
                  <ThemeToggle />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <Bars3Icon className="h-7 w-7 text-white"></Bars3Icon>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню  */}

      {!isAboveMediumScreens && (
        <div
          id="mobile-menu"
          className={`fixed bottom-0 right-0 z-40 h-full w-[300px] transform rounded-3xl bg-primary-100 drop-shadow-2xl transition-transform duration-500 ease-in-out dark:bg-darkGray-100 ${
            isMenuToggled ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-12 pt-6">
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <XMarkIcon className="h-7 w-7 text-white"></XMarkIcon>
            </button>
          </div>

          {/* Ссылки на страницы в мобильном меню  */}
          <div className={`ml-[33%] flex flex-col gap-10 text-xl`}>
            <Link
              page={SelectedPage.Home}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Benefits}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.OurClasses}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.ContactUs}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="ml-[33%] pt-7">
            <a
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500"
              href="tel:+79618887889"
            >
              <p className="text-lg">+7(961)888-78-89</p>
            </a>
            <div className="pt-7"><ThemeToggle/></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
