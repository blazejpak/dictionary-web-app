import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import ListDetails from "./ListDetails";

const FetchDataSection = () => {
  const dispatch = useDispatch();

  const text = useSelector((state: RootState) => state.inputSlice.inputText);
  const submit = useSelector(
    (state: RootState) => state.inputSlice.inputSubmit
  );
  const uri = useSelector((state: RootState) => state.dataSlice.dataUri);

  useEffect(() => {
    if (submit && text !== "") {
      const fetcher = async () => {
        try {
          const response = await fetch(uri + text);
          if (!response.ok)
            dispatch({ type: "data/errorChanger", payload: true });
          if (response.ok)
            dispatch({ type: "data/errorChanger", payload: false });

          const data = await response.json();
          dispatch({ type: "data/dataFetchedReducer", payload: data[0] });
          dispatch({ type: "inputChanger/toggleSubmit" });
        } catch (error) {
          console.error({ error });
        }
      };
      fetcher();
    }
  }, [submit]);

  return (
    <section>
      <ListDetails />
    </section>
  );
};

export default FetchDataSection;
