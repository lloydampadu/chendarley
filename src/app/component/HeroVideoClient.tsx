// src/component/HeroVideoClient.tsx
"use client";

import dynamic from "next/dynamic";

const HeroVideo = dynamic(() => import("./Hero"), { ssr: false });

export default function HeroVideoClient() {
  return <HeroVideo />;
}
