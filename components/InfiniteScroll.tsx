"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    title: "National Election Board of Ethiopia",
    logo: "/images/election board.png",
  },
  {
    title: "European Sector for Electoral Support",
    logo: "/images/ECES.png",
  },
  {
    title: "International Foundation of Electoral Systems",
    logo: "/images/IFES.png",
  },
  {
    title: "GrowthTip consulting",
    logo: "/images/growthtip.png",
  },
  {
    title: "Ethiopian Agricultural Transformation Agency",
    logo: "/images/EATA.png",
  },
  {
    title: "YoungAfrica Workers",
    logo: "/images/YAW.png",
  },
  {
    title: "First Consult",
    logo: "/images/FIRST  consult.png",
  },
  {
    title: "Menschen fur Menschen",
    logo: "/images/mfm.png",
  },
  {
    title: "Yefiker Maed",
    logo: "/images/yefikir maed.jpg",
  },
  {
    title: "Askamar consulting and engineering plc",
    logo: "/images/Askamar.png",
  },
  {
    title: "Devoted Consulting PLC",
    logo: "/images/devoted.png",
  },
];

const InfiniteScroll = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust the speed as needed
        }}
        style={{ display: "flex", width: "200%" }}
      >
        {logos.concat(logos).map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center space-y-4 group"
            style={{ minWidth: "10%" }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                alt={member.title}
                className="object-cover w-36 h-36 transition-transform duration-300 group-hover:scale-110"
                src={member.logo}
                style={{
                  aspectRatio: "144/144",
                  objectFit: "contain",
                }}
                width={200}
                height={200}
              />
            </div>
            <h2 className="font-semibold text-lg text-white">{member.title}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
