import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

// универсальная кнопка
const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="cursor-pointer rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white dark:bg-primary-500 dark:hover:bg-secondary-500 dark:hover:text-black"
      onClick={() => {
        setSelectedPage(SelectedPage.ContactUs);
      }}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
