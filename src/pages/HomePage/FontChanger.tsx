import { useEffect, useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ReactComponent as Arrow } from "../../assets/icon-arrow-down.svg";

const FontChanger = () => {
  const [font, setFont] = useState("Sans Serif");
  const [fontClicked, setFontclicked] = useState(false);
  const fontRef = useRef(null);

  useEffect(() => {
    if (font === "Mono") {
      document.documentElement.style.fontFamily = "Inconsolata";
      setFontclicked(false);
    }
    if (font === "Serif") {
      document.documentElement.style.fontFamily = "Lora";
      setFontclicked(false);
    } else {
      document.documentElement.style.fontFamily = "Inter";
      setFontclicked(false);
    }
  }, [font]);

  const fontChangeHandler = (e) => {
    setFontclicked((prevClicked) => !prevClicked);
  };

  const formFont = (
    <motion.div
      className="absolute right-[-5rem] top-8 w-48 rounded-xl bg-white p-6 shadow-lg dark:bg-[#1F1F1F] dark:shadow-[#A445ED]"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
    >
      <div className="flex flex-col gap-4">
        <p
          onClick={() => setFont("Sans Serif")}
          className="cursor-pointer font-[Inter] hover:text-[#A445ED]"
        >
          Sans Serif
        </p>
        <p
          onClick={() => setFont("Serif")}
          className="cursor-pointer font-[Lora] hover:text-[#A445ED]"
        >
          Serif
        </p>
        <p
          onClick={() => setFont("Mono")}
          className="cursor-pointer font-[Inconsolata] hover:text-[#A445ED]"
        >
          Mono
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="relative  ">
      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={fontChangeHandler}
        ref={fontRef}
      >
        <p>{font}</p>
        <Arrow />
      </div>
      <AnimatePresence>{fontClicked && formFont}</AnimatePresence>
    </div>
  );
};

export default FontChanger;
