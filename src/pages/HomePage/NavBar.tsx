import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { motion, useSpring } from "framer-motion";

import { useSelector } from "react-redux";

import { store, RootState } from "../../store/store";
import { toggleActive } from "../../store/reducers/activeSlice";
import FontChanger from "./FontChanger";

const NavBar = () => {
  const isActive = useSelector((state: RootState) => state.activeSlice.active);

  const changeModeHandler = (): void => {
    store.dispatch(toggleActive(!isActive));
  };

  const spring = useSpring(0);

  return (
    <div className="flex  justify-between caret-transparent">
      <Logo aria-label="Logo" className="h-8 w-7" />
      <div className="flex items-center gap-4">
        <FontChanger />
        <div className="h-8 w-[1px] bg-[#E9E9E9]"></div>
        {
          <div className="flex gap-3">
            <div
              onClick={changeModeHandler}
              className={`flex h-5 w-10 cursor-pointer items-center rounded-full bg-[#838383] dark:bg-[#A445ED] 
              ${isActive ? "justify-end" : "justify-start"}`}
            >
              <motion.div
                layout
                transition={spring}
                className={
                  isActive
                    ? "mr-1 h-4 w-4 items-center rounded-full bg-white"
                    : "ml-1 h-4 w-4 items-center rounded-full bg-white"
                }
              ></motion.div>
            </div>
            <Moon
              aria-label="Moon"
              className=" stroke-[#838383] dark:stroke-[#A445ED]"
            />
          </div>
        }
      </div>
    </div>
  );
};

export default NavBar;
