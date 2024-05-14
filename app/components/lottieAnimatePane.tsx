"use client";
import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/aboutmeAnimation.json";

export default function LottieAnimatePane() {
  return <Lottie loop animationData={lottieJson} play />;
}
