"use client";

import Lottie from "lottie-react";
import Revenue from "@/public/animation/Revenue.json";

export default function HeroAnimation() {
  return (
    <div className="w-full h-full flex justify-center">
      <Lottie
        animationData={Revenue}
        style={{ width: 300, height: 300 }}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
