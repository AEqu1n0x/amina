import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageLogo.webp";
import HomePageGraphic from "@/assets/HomePageGraphic.webp";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 dark:bg-darkGray-20 md:h-full md:pb-0"
    >
      {/* Картинка и заголовок */}
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* заголовок */}
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img
                  src={HomePageText}
                  alt="logo"
                />
              </div>
            </div>
            <p className="mt-8 text-base md:text-start">
              Мы специализируемся на ремонте и отделке квартир и помещений под
              ключ. Предоставляем услуги по подготовке помещений для аренды на
              платформы, такие как{" "}
              <span className="text-lg font-semibold text-blue-500">Ozon</span>{" "}
              и{" "}
              <span
                className="text-lg font-semibold"
                style={{ color: "#c800a1" }}
              >
                Wildberries
              </span>
              , а также осуществляем отделку офисных помещений. Работаем в
              Томской области и соседних регионах, гарантируя высокое качество и
              соблюдение сроков.
            </p>
          </motion.div>
          {/* Кнопки */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Позвоните сейчас!
            </ActionButton>
            <div>
              <a
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                href="tel:+79618887889"
              >
                <p className="text-lg">+7(961)888-78-89</p>
              </a>
            </div>
          </motion.div>
        </div>
        {/* Картинка */}
        <div className="flex w-full justify-center md:basis-3/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-page-graphic" src={HomePageGraphic} className="object-contain object-center w-full md:w-auto"/>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
