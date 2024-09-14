"use client";

import React, { useState, useEffect } from "react";


const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     setShowButton(window.scrollY > 300)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleBackToTop}
          className="fixed bg-white bottom-10 right-10 rounded-full border p-2 px-3 shadow-md"
        >
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.58105 4.2L5.58105 1M5.58105 1L9.58105 4.2M5.58105 1V17"
              stroke="#333333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
