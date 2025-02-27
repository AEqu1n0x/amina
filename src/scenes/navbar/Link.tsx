import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const pageTranslations: Record<SelectedPage, string> = {
    [SelectedPage.Home]: "Главная",
    [SelectedPage.Benefits]: "Наши услуги",
    [SelectedPage.OurClasses]: "Реализация",
    [SelectedPage.ContactUs]: "Контакты",
  };

  return (
    <AnchorLink
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
      className={`${selectedPage === page ? "text-primary-500" : ""} transition duration-500 hover:text-secondary-500`}
    >
      {pageTranslations[page]}
    </AnchorLink>
  );
};

export default Link;
