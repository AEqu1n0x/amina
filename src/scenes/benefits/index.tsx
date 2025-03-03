import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Ozon from "@/assets/ozon.webp";
import WB from "@/assets/wb.webp";
import Office from "@/assets/office.webp";
import Home from "@/assets/home.webp";
import Electric from "@/assets/electric.png";
import Santechnic from "@/assets/Santechnic.webp";
import Fasad from "@/assets/fasad.webp";
import Dempntazh from "@/assets/Demontazh.webp";

const benefits: Array<BenefitType> = [
  {
    icon: <img src={Ozon} alt="Ozon Icon" className="h-20 w-20" />,
    title: "Отделка под Ozon",
    description:
      "Подготовим помещение для аренды на платформе Ozon, обеспечив высокую доходность и максимальную эффективность.",
    style:
      "border-blue-500 bg-blue-100 dark:border-[#5FA8FF] dark:bg-[#163A5F]",
  },
  {
    icon: <img src={WB} alt="Wildberries Icon" className="h-20 w-20" />,
    title: "Отделка под Wildberries",
    description:
      "Подготовим помещение для сдачи в аренду на Wildberries, с учетом всех требований и стандартов.",
    style:
      "border-purple-500 bg-purple-100 dark:border-[#B47CFF] dark:bg-[#3E1A5F]",
  },
  {
    icon: <img src={Office} alt="Office Icon" className="h-20 w-20" />,
    title: "Офисная отделка",
    description:
      "Профессиональная отделка офисных помещений с учетом всех особенностей рабочего процесса и ваших пожеланий.",
    style:
      "border-green-500 bg-green-100 dark:border-[#6DDB88] dark:bg-[#1F4D2E]",
  },
  {
    icon: <img src={Home} alt="Apartment Icon" className="h-20 w-20" />,
    title: "Отделка квартир",
    description:
      "Индивидуальный подход к отделке квартир с применением современных материалов и технологий.",
    style:
      "border-yellow-500 bg-yellow-100 dark:border-[#FFC447] dark:bg-[#5A3A00]",
  },
];
const benefits2: Array<BenefitType> = [
  {
    icon: <img src={Electric} alt="Electrician Icon" className="h-20 w-20" />,
    title: "Электромонтажные работы",
    description:
      "Выполним полный спектр электромонтажных работ — от разводки проводки до установки розеток, светильников и автоматов.",
    style:
      "border-orange-500 bg-orange-100 dark:border-[#FF8880] dark:bg-[#5A1A1A]",
  },
  {
    icon: <img src={Santechnic} alt="Santechnic Icon" className="h-20 w-20" />,
    title: "Сантехнические работы",
    description:
      "Профессиональный монтаж, ремонт и обслуживание сантехники любой сложности.",
    style:
      "border-blue-600 bg-blue-100 dark:border-[#4A90E2] dark:bg-[#1A3A5F]",
  },
  {
    icon: <img src={Fasad} alt="Fasad Icon" className="h-20 w-20" />,
    title: "Фасадные работы",
    description:
      "Качественная отделка фасадов с использованием современных материалов, защита и утепление зданий.",
    style:
      "border-gray-500 bg-gray-100 dark:border-[#A0A0A0] dark:bg-[#2E2E2E]",
  },
  {
    icon: <img src={Dempntazh} alt="Demolition Icon" className="h-20 w-20" />,
    title: "Демонтажные работы",
    description:
      "Профессиональный демонтаж зданий, стен и конструкций с соблюдением всех норм безопасности.",
    style: "border-red-500 bg-red-100 dark:border-[#FF6666] dark:bg-[#5A1A1A]",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <div className="dark:bg-darkGray-50">
      <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => {
            setSelectedPage(SelectedPage.Benefits);
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:w--3/5 md:my-5"
          >
            <HText>Наши услуги</HText>
            <p className="my-5 text-sm">
              Мы занимаемся полным циклом отделки помещений, включая подготовку
              под аренду на популярных платформах и обустройство офисов.
              Обеспечиваем высокое качество работы и индивидуальный подход к
              каждому проекту в Томской области и соседних регионах.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mt-5 items-center justify-between gap-8 md:flex"
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                style={benefit.style}
              />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mt-5 items-center justify-between gap-8 md:flex"
          >
            {benefits2.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                style={benefit.style}
              />
            ))}
          </motion.div>

          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
            <div className="mt-[30px] sm:mt-0">
              <div className="relative">
                <div className="overflow-hidden before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { opacity: 0, x: 100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      БОЛЕЕ <span className="text-primary-300">500+</span>{" "}
                      УСПЕШНЫХ ПРОЕКТОВ
                    </HText>
                  </motion.div>
                </div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="my-5">
                    Мы выполнили свыше 500 проектов по отделке помещений,
                    включая коммерческую и жилую недвижимость. Наши специалисты
                    работают с объектами любого уровня сложности — от квартир и
                    офисов до складов и пунктов выдачи маркетплейсов.
                  </p>

                  <p className="mb-5">
                    Каждый проект — это индивидуальный подход, качественные
                    материалы и профессиональное выполнение всех этапов работ.
                    Доверьтесь нам, и мы создадим для вас идеальное
                    пространство!
                  </p>
                </motion.div>
              </div>

              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:-top-[80px] before:right-10 before:z-[-1] before:content-sparkles xs:before:right-10 sm:before:right-40">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Ждем Ваших звонков!
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Benefits;
