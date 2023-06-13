import HomePage from "./pages/HomePage/HomePage";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { toggleActive } from "./store/reducers/activeSlice";
import { store } from "./store/store.ts";

import { useSelector } from "react-redux";

function App() {
  const isActive = useSelector((state: RootState) => state.activeSlice.active);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      store.dispatch(toggleActive(true));
    } else store.dispatch(toggleActive(false));
  }, []);

  useEffect(() => {
    if (isActive === true) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [isActive]);

  return (
    <div className="max-h-max min-h-[100dvh] bg-white p-6 text-[#2D2D2D] transition-all duration-300  dark:bg-[#050505]/95 dark:text-[#FFFFFF] ">
      <HomePage />
    </div>
  );
}

export default App;
