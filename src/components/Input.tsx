import { ReactComponent as Loupe } from "../assets/icon-search.svg";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { ChangeEvent, FormEvent } from "react";

const Input = () => {
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.inputSlice.inputText);
  const submit = useSelector(
    (state: RootState) => state.inputSlice.inputSubmit
  );

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "inputChanger/textChanger", payload: event.target.value });
  };

  const formSubmitter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: "inputChanger/toggleSubmit" });
  };

  const inputStyle =
    "max-[90%] flex h-12 items-center justify-center gap-4 rounded-2xl bg-[#F4F4F4] px-4 dark:bg-[#1F1F1F] md:h-16";

  return (
    <section className="mt-12 flex flex-col gap-1 ">
      <form onSubmit={formSubmitter}>
        <div
          className={
            !(text === "" && submit)
              ? inputStyle +
                " focus-within:border focus-within:border-[#A445ED]"
              : inputStyle + " border border-[#FF5252]"
          }
        >
          {
            <input
              className=" w-full bg-transparent font-bold text-[#2D2D2D] caret-[#A445ED] outline-none placeholder:text-[#2D2D2D]  placeholder:text-opacity-25 dark:text-white  dark:placeholder:text-white dark:placeholder:text-opacity-25"
              placeholder="Search for any word..."
              onChange={inputOnChange}
            />
          }
          <button className="cursor-pointer" type="submit">
            <Loupe />
          </button>
        </div>
      </form>
      {text === "" && submit && (
        <p className="ml-1 text-[#FF5252]">Whoops, can’t be empty…</p>
      )}
    </section>
  );
};

export default Input;
