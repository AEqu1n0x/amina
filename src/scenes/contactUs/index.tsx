import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <div className="dark:bg-darkGray-50">
      <section id="contactus" className="mx-auto w-5/6 pb-32 pt-40">
        <motion.div
          onViewportEnter={() => {
            setSelectedPage(SelectedPage.ContactUs);
          }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:w-3/5"
            >
              <HText>
                <span className="text-primary-500">Контакты</span>
              </HText>
              <p className="my-5">
                Свяжитесь с нами по любым вопросам. Мы всегда готовы помочь и
                ответить на ваши вопросы.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row">
            <motion.div
              className="flex basis-3/5 flex-col items-center justify-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-[16px] sm:text-[24px] md:text-[30px]">
                Телефон:
              </div>
              <a
                className="font-bold text-primary-500 underline hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500"
                href="tel:+79618887889"
              >
                <p className="text-[18px] sm:text-[24px] md:text-[36px]">
                  +7(961)888-78-89
                </p>
              </a>

              <div className="mt-4 text-[16px] sm:text-[24px] md:text-[30px]">
                Почта:
              </div>
              <p className="text-[18px] font-semibold text-primary-500 dark:text-secondary-500 sm:text-[24px] md:text-[36px]">
                trsk.amina_groop@mail.ru
              </p>
            </motion.div>

            <motion.div
              className="relative z-0 basis-2/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img
                  className="mt-5 w-full"
                  alt="contact-us-pic"
                  src={ContactUsPageGraphic}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
