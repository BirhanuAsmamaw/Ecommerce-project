"use client"
import { FaCartPlus } from "react-icons/fa";
import SlideOver from "./Slide_over";
import { useState } from "react";

const NavBar = () => {
  const [slideOverVisible, setSlideOverVisible] = useState(false);
  const handleCartClick = () => {
    setSlideOverVisible(true);
  };

  return (
    <div className="bg-slate-200 flex justify-end p-4 ">
      <button className="mr-3" onClick={handleCartClick}>
        <FaCartPlus size="30" />
      </button>
      <SlideOver visible={slideOverVisible} setVisibility={setSlideOverVisible} />
    </div>
    
  );
};

export default NavBar;
