import React from "react";
import { motion } from "framer-motion";

const Section = ({
  id,
  children,
  className,
  style,
  heading,
  subHeading,
  description,
}) => {
  const fadeInVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      style={style}
      id={id}
      className={`lg:px-20 md:px-10 px-5 relative  ${className}`}
    >
      {heading && (
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="show"
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="max-sm:pt-24 pt-10 pb-6 flex flex-col text-center"
        >
          {subHeading && (
            <span className="uppercase xs:text-lg text-md font-semibold opacity: 0; transform: translateX(0px) translateY(100%) translateZ(0px); text-[#acacac]" >{subHeading}</span>
          )}
          <span className="text-[50px] xs:text-[60px] lg:text-[70px] font-extrabold -my-4  undefined">
            {heading}
          </span>
          {description && (
            <span className="mt-2 text-[16px] lg:w-[75%] text-[#d4d4d4]">
              {description}
            </span>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default Section;