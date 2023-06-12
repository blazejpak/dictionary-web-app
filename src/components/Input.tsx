import { ReactComponent as Loupe } from "../assets/icon-search.svg";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";

const Input = () => {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.inputSlice.inputText);
  const submit = useSelector(
    (state: RootState) => state.inputSlice.inputSubmit
  );

  const inputOnChange = (e) => {
    dispatch({ type: "inputChanger/textChanger", payload: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();

    dispatch({ type: "inputChanger/toggleSubmit" });
  };

  let errorPar;

  if (text === "" && submit) errorPar = "Whoops, can’t be empty…";

  return (
    <section className="mt-12 flex flex-col gap-1 ">
      <form onSubmit={formSubmitter}>
        <div className="max-[90%] flex h-12 items-center justify-center gap-4 rounded-2xl bg-[#F4F4F4] px-4  focus-within:border focus-within:border-[#A445ED] dark:bg-[#1F1F1F] ">
          <input
            className=" w-full bg-transparent font-bold text-[#2D2D2D] caret-[#A445ED] outline-none placeholder:text-[#2D2D2D]  placeholder:text-opacity-25 dark:text-white  dark:placeholder:text-white dark:placeholder:text-opacity-25"
            placeholder="Search for any word..."
            onChange={inputOnChange}
          />
          <button className="cursor-pointer" type="submit">
            <Loupe />
          </button>
        </div>
      </form>
      <p className="ml-1 text-[#FF5252]">{errorPar}</p>
    </section>
  );
};

export default Input;
