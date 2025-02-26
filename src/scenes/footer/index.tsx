import Logo from "@/assets/Logo.png";
import LogoDark from "@/assets/LogoDark.png";

const Footer = () => {
  return (
    <section className="w-full bg-primary-100 py-16 dark:bg-darkGray-100">
      <div className="justify-content mx-auto w-3/5 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="block dark:hidden" />
          <img src={LogoDark} alt="logo" className="hidden dark:block" />
          <p className="my-5">
            Мы занимаемся отделкой квартир и помещений под аренду на
            Ozon/Wildberries и офисов в Томской области и соседних регионах.
          </p>
          <p className="font-bold">
            © Общество с ограниченной ответственностью "ТРСК АМИНА ГРУПП"
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Ссылки</h4>
          <p className="my-5">О нас</p>
          <p className="my-5">Услуги и программы</p>
          <p>Тренеры</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Контакты</h4>
          <p className="my-5">
            Свяжитесь с нами для получения дополнительной информации.",
          </p>
          <a
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            href="tel:+79618887889"
          >
            <p className="text-lg">+7(961)888-78-89</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
