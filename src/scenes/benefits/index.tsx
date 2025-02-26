import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Ozon from "@/assets/ozon.png"
import WB from "@/assets/wb.png"

const benefits: Array<BenefitType> = [
  {
    icon: <img src={Ozon} alt="Ozon Icon" className="h-20 w-20" />,
    title: "Отделка под Ozon",
    description:
      "Подготовим помещение для аренды на платформе Ozon, обеспечив высокую доходность и максимальную эффективность.",
    style: "border-blue-500 bg-blue-100", // Ozon
  },
  {
    icon: (
      <img
        src={WB}
        alt="Wildberries Icon"
        className="h-20 w-20"
      />
    ),
    title: "Отделка под Wildberries",
    description:
      "Подготовим помещение для сдачи в аренду на Wildberries, с учетом всех требований и стандартов.",
    style: "border-purple-500 bg-purple-100", // Wildberries
  },
  {
    icon: (
      <img
        src="/path-to-office-icon.svg"
        alt="Office Icon"
        className="h-6 w-6"
      />
    ),
    title: "Офисная отделка",
    description:
      "Профессиональная отделка офисных помещений с учетом всех особенностей рабочего процесса и ваших пожеланий.",
    style: "border-green-500 bg-green-100", // Офисная отделка
  },
  {
    icon: (
      <img
        src="/path-to-apartment-icon.svg"
        alt="Apartment Icon"
        className="h-6 w-6"
      />
    ),
    title: "Отделка квартир",
    description:
      "Индивидуальный подход к отделке квартир с применением современных материалов и технологий.",
    style: "border-yellow-500 bg-yellow-100", // Отделка квартир
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
          {/* Картинка и описание*/}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
            <div>
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
                      MILLIONS OF HAPPY MEMBERS GETTING
                      <span className="text-primary-500"> FIT</span>
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
                  <p className="my-5">ASDGFHSFGHSFGHSFGH </p>
                  <p className="mb-5">SFGHSFGHSFGHSFGHSFGHSFGH </p>
                </motion.div>
              </div>

              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    JOIN NOW
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
