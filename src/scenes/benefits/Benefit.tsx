import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  style: string; 
};

const Benefit = ({ icon, title, description, style }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className={`mt-5 rounded-md px-5 py-16 text-center ${style} h-[420px]`} 
    >
      <div className="mb-4 flex justify-center">
        <div className="p-4">{icon}</div> 
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
    </motion.div>
  );
};

export default Benefit;
