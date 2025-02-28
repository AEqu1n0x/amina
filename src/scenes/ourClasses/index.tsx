import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { useRef } from "react";
import Slider from "react-slick";
import Image1 from "@/assets/Image2.webp";
import Image2 from "@/assets/Image1.webp";
import Image3 from "@/assets/Image3.webp";
import Image4 from "@/assets/Image4.webp";
import Image5 from "@/assets/Image5.webp";
import Image6 from "@/assets/Image6.webp";
import Image7 from "@/assets/Image7.webp";
import Image8 from "@/assets/Image8.webp";
import Image9 from "@/assets/Image9.webp";
import Image10 from "@/assets/Image10.webp";
import Image11 from "@/assets/Image11.webp";
import Image12 from "@/assets/Image12.webp";
import Image13 from "@/assets/Image13.webp";
import Image14 from "@/assets/Image14.webp";
import Image15 from "@/assets/Image15.webp";
import Image16 from "@/assets/Image16.webp";
import Image17 from "@/assets/Image17.webp";
import Image18 from "@/assets/Image18.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const imagePairs: [string, string, string?, string?, string?][] = [
    [Image1, Image2, Image3, Image4],
    [Image5, Image6, Image7, Image8],
    [Image9, Image10, Image11],
    [Image12, Image13, Image14, Image15],
    [Image16, Image17, Image18],
  ];

  const renderClassItem = (
    title: string,
    description: string,
    images: [string, string, string?, string?, string?],
  ) => (
    <div className="w-full p-4">
      <div className="flex flex-col items-center rounded-lg border-2 border-primary-500 bg-gray-50 p-6 shadow-lg transition-all hover:shadow-xl dark:border-darkPrimary-500 dark:bg-darkGray-50">
        <h3 className="mb-4 text-center text-2xl font-bold text-primary-500 dark:text-darkPrimary-500">
          {title}
        </h3>
        <p className="mb-6 text-center text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="mx-auto w-full max-w-[600px]">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {images.map(
              (image, index) =>
                image && (
                  <div key={index} className="px-2">
                    <img
                      src={image}
                      alt={title}
                      className="h-64 w-full rounded-lg object-cover shadow-md"
                    />
                  </div>
                ),
            )}
          </Slider>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40 dark:bg-darkPrimary-100"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Реализация</HText>
            <p className="py-5 ">
              Мы предлагаем полный цикл услуг по отделке и подготовке помещений.
              Наши работы включают в себя:
            </p>
            <ul className="list-disc pl-6  ">
              <li>Заключение сметы с детализацией всех этапов работ.</li>
              <li>Подписание договора с фиксацией сроков и обязательств.</li>
              <li>Гарантия на выполненные работы.</li>
              <li>
                Поэтапная реализация проекта с предоставлением фотоотчетов.
              </li>
              <li>Соблюдение всех строительных норм и стандартов.</li>
            </ul>
            <p className="pt-5  ">
              Мы гарантируем качественное выполнение работ в оговоренные сроки и
              предоставляем полный пакет документов по завершению проекта.
            </p>
          </div>
        </motion.div>

        <div ref={containerRef} className="mt-10">
          <div className="mx-auto grid grid-cols-1 gap-10 md:w-4/5 md:grid-cols-2">
            {renderClassItem(
              "Отделка под Ozon",
              "Подготовка помещения для аренды на платформе Ozon.",
              imagePairs[0],
            )}
            {renderClassItem(
              "Отделка под Wildberries",
              "Подготовка помещения для аренды на Wildberries.",
              imagePairs[1],
            )}
            {renderClassItem(
              "Офисная отделка",
              "Профессиональная отделка офисных помещений.",
              imagePairs[2],
            )}
            {renderClassItem(
              "Отделка квартир",
              "Индивидуальный подход к отделке квартир.",
              imagePairs[3],
            )}
            {renderClassItem(
              "Электромонтажные работы",
              "Полный спектр электромонтажных работ.",
              imagePairs[4],
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
