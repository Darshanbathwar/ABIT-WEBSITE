import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


export default function HorizontalScroll (){
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative md:size-[450px] size-[300px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};


const cards = [
  {
    url: "",
    title: "Image 1",
    id: 1,
  },
  {
    url: "",
    title: "Image 2",
    id: 2,
  },
  {
    url: "",
    title: "Image 3",
    id: 3,
  },
  {
    url: "",
    title: "Image 4",
    id: 4,
  },
  {
    url: "",
    title: "Image 5",
    id: 5,
  },
  {
    url: "",
    title: "Image 6",
    id: 6,
  },
  {
    url: "",
    title: "Image 7",
    id: 7,
  },
];