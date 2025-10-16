"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import lottie-react on the client only
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="text-white text-sm">Loading animation...</div>,
});

const AnimationLottie = ({ animationPath, width }) => {
  // Ensure this code only runs in browser
  if (typeof window === "undefined") return null;

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
