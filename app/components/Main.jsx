"use client";
import "../main.css";
import Spline from "@splinetool/react-spline";

const Main = () => {
  return (
    <>
      <div className="w-full h-full lg:flex lg:items-center lg:justify-center flex justify-center items-center">
        <Spline
          className="absolute -z-20 lg:blur-lg opacity-60"
          scene="https://prod.spline.design/1CNO6aUcbzQHSQsw/scene.splinecode"
        />
        <div className="hero lg:text-9xl h-36 text-7xl lg:flex justify-center items-center lg:gap-8 font-bold -tracking-wider text-transparent">
          <h1 className="lg:w-[484px]">Portfolio</h1>
          <h1 className="lg:h-36 h-20">Coming</h1>
          <h1 className="text-center">Soon</h1>
        </div>
      </div>
    </>
  );
};

export default Main;
