import React, { useState } from "react";
import Burger from "./Burger";
import RightNav from "./RightNav";


const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Burger
        onReveal={() => setShowMenu(!showMenu)}
      />
      <RightNav show={showMenu} />
    </div>
  );
};

export default MobileNavigation;
