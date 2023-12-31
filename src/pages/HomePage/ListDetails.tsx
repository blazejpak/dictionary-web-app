import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { ReactComponent as Play } from "../../assets/icon-play.svg";
import { ReactComponent as PlayHover } from "../../assets/icon-play-hover.svg";
import { ReactComponent as HyperLink } from "../../assets/icon-new-window.svg";
import { useState } from "react";

const ListDetails = () => {
  interface Meaning {
    partOfSpeech: string;
    definitions: { definition: string }[];
    synonyms: string[];
  }

  const [hover, setHover] = useState(false);
  const error = useSelector((state: RootState) => state.dataSlice.dataError);
  const fetchedData = useSelector(
    (state: RootState) => state.dataSlice.fetchedData
  );

  const playAudioHandler = () => {
    try {
      const { audio } = fetchedData.phonetics.find(
        (item: any) => item.audio !== ""
      );

      let audioPlay = new Audio(audio);
      audioPlay.play();
    } catch (error) {
      console.error(error);
    }
  };
  if (!fetchedData && error) {
    return (
      <div className="mt-8 flex flex-col items-center gap-3">
        <p className=" text-5xl">😕</p>
        <h2 className="text-lg font-bold">No Definitions Found</h2>
        <p className="text-center text-sm">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  }

  if (fetchedData)
    return (
      <div className="mt-4 md:mt-12">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">{fetchedData.word}</h1>
            <p className="text-lg text-[#A445ED]">{fetchedData.phonetic}</p>
          </div>
          {fetchedData.phonetics.find((item: any) => item.audio !== "") && (
            <div
              className=" cursor-pointer overflow-hidden rounded-full"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <PlayHover
                  className=" h-12 w-12 md:h-20 md:w-20"
                  onClick={playAudioHandler}
                />
              ) : (
                <Play
                  className=" h-12 w-12 md:h-20 md:w-20"
                  onClick={playAudioHandler}
                />
              )}
            </div>
          )}
        </div>
        <div>
          {fetchedData.meanings.map((item: Meaning, index: number) => {
            return (
              <div key={index} className="mt-8 flex flex-col">
                <div className="flex items-center justify-center gap-4">
                  <p className="font-bold italic">{item.partOfSpeech}</p>
                  <div className="h-[1px] w-full bg-[#E9E9E9]"></div>
                </div>
                <div className="mt-8">
                  <p className="text-[#757575]">Meaning</p>
                  <div className="mt-4">
                    <ul className=" ml-2 flex list-disc flex-col gap-3 marker:text-[#8F19E8]">
                      {item.definitions.map((item, index) => {
                        return (
                          <li className="text-sm" key={index}>
                            {item.definition}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {item.synonyms.length > 0 && (
                  <div className="mt-6 flex gap-6">
                    <p className="text-[#757575]">Synonyms</p>
                    <p className="font-bold text-[#8F19E8]">
                      {item.synonyms[0]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-8 h-[1px] w-full bg-[#E9E9E9]"></div>
        <div className="mt-6 md:flex md:gap-5">
          <p className="text-sm text-[#757575] underline">Source</p>
          <div className="mb-28 flex items-center gap-2">
            <p className="text-sm underline">
              <a href={fetchedData.sourceUrls[0]}>
                {fetchedData.sourceUrls[0]}
              </a>
            </p>
            <a href={fetchedData.sourceUrls[0]}>
              <HyperLink />
            </a>
          </div>
        </div>
      </div>
    );
  return null;
};

export default ListDetails;
