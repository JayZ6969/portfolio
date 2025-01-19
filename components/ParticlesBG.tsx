'use client'

import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

// Define the props interface
interface ParticlesBGProps {
  id?: string; // Optional ID for the particles container
}

const ParticlesBG: React.FC<ParticlesBGProps> = (props) => {
  // Initialize the particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await import("@tsparticles/slim").then((module) => module.loadSlim(engine));
    });
  }, []);

  // Memoized options to avoid unnecessary re-renders
  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#101010",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          resize: {
            enable: true,
          },
        },
      },
      particles: {
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 200,
        },
        color: {
          value: "#fff",
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 0.25,
            startValue: "random",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 0.5,
            max: 2.5, 
          },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 0.1,
          },
        },
        move: {
          enable: true,
          speed: 0.25,
          direction: "none",
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  return <Particles id={props.id} options={options} />;
};

export default ParticlesBG;