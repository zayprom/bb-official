import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Burger = ({ onReveal }) => {
  const [isOpen, toggle] = useState(false);

  const first = useSpring({
    transform: isOpen ? "translate(5px, 32px) rotate(-45deg)" : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isOpen ? "translate(10px, 4px) rotate(45deg)" : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isOpen ? "translate(5px, 32px) rotate(-45deg)" : "translate(2px, 31px) rotate(0deg)",
  });

  return (
    <div className="burger-icon" onClick={onReveal}>
      <svg
        onClick={() => toggle(!isOpen)}
        width="30"
        height="30"
        viewBox="0 0 44 44"
        fill="var(--darkest-green)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="6" rx="2" style={first} />
        <animated.rect width="40" height="6" rx="2" style={second} />
        <animated.rect width="40" height="6" rx="2" style={third} />
      </svg>
    </div>
  );
};

export default Burger;
