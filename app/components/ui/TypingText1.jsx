import { useEffect, useState } from "react";

const TypingText1 = () => {
  const [output, setOutput] = useState("");
  const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
  const speed = 50;
  const randomCharDuration = 2000; // Duration of random characters before "TestTest" in milliseconds
  const textToType = "TestTest";

  useEffect(() => {
    let currentIndex = 0;

    const generateRandomChars = () => {
      const num = Math.floor(theLetters.length * Math.random());
      const randomChar = theLetters.charAt(num);
      setOutput((prevOutput) => prevOutput + randomChar);
      currentIndex++;

      if (currentIndex >= textToType.length) {
        clearInterval(timer);
      }
    };

    const timer = setInterval(() => {
      if (currentIndex < textToType.length) {
        generateRandomChars();
      } else {
        clearInterval(timer);
      }
    }, speed);

    // After a delay, switch to "TestTest"
    setTimeout(() => {
      setOutput(textToType.substring(0, currentIndex));
    }, randomCharDuration);
  }, []);

  return (
    <div id="output">
      <h1 className="text-slate-700 text-9xl font-bold ">Jald</h1>
      {/* {output} */}
    </div>
  );
};

export default TypingText1;
