"use client";
import TypingText1 from "./components/ui/TypingText1";
import CursorAnimation from "./components/ui/CursorAnimation";

export default function Home() {
  return (
    <>
      <div className="main absolute top-0  w-screen h-screen z-10 flex items-center justify-center ">
        <div className="flex gap-8 -z-10">
          {/* <CursorAnimation /> */}
          <h1 className=" tracking-tight bg-gradient-to-b from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent text-9xl font-bold ">
            Portfolio
          </h1>
          <TypingText1 />
          <h1 className="text-slate-700 text-9xl font-bold ">
            Aayega!
          </h1>
        </div>
      </div>
    </>
  );
}
