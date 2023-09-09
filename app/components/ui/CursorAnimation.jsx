import { useEffect, useState } from "react";

const CursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const updateCursorPosition = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div
      className="cursor absolute h-10 w-10 bg-white rounded-full mix-blend-difference "
      style={{ left: cursorPosition.x + "px", top: cursorPosition.y + "px" }}
    ></div>
  );
}

export default CursorAnimation;