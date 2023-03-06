import React from "react";
import MenuDispl from "./MenuDispl";
import Socials from "./Socials";
import { useSpring, animated, config } from "react-spring";

const RightNav = ({show}) => {
  const transitions = useSpring({
    right: show ? "0" : "-100%",
    config: config.slow,
  });

  return (
    <animated.nav className="right-nav" style={transitions}>
      <MenuDispl
        flexDirection={"column"}
        display={"flex"}
        gap={"9.6rem"}
        size={"4.2rem"}
        paddingBottom={"6.4rem"}
      />
      <Socials justify={"center"} />
    </animated.nav>
  );
};

export default RightNav;
