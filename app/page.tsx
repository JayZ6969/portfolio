'use client'

import { useEffect } from "react";
import Image from "next/image";
import Landing from "../pages/Home";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
    }
    )()
}, []);

  return (
    <Landing />
  );
}
