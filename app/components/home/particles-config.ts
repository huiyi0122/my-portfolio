import type { ISourceOptions } from "tsparticles-engine";

export const getParticlesConfig = (darkMode: boolean): ISourceOptions => ({
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.8,
        },
      },
    },
  },
  particles: {
    color: {
      value: darkMode ? "#00C8B3" : "#2C4C72",
    },
    links: {
      color: darkMode ? "#00C8B3" : "#637F9C",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 2,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
});

export const getPlanetParticlesConfig = (
  darkMode: boolean
): ISourceOptions => ({
  fpsLimit: 60,
  particles: {
    number: {
      value: 120, // 在小区域内有更多粒子
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: darkMode ? "#FCF0B6" : "#AC7F5E", // 使用现有的强调色
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.4, max: 0.9 }, // 随机不透明度，营造闪烁感
      animation: {
        enable: true,
        speed: 0.8,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 2.5 },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      outModes: "bounce", // 让粒子在容器内反弹
    },
  },
  interactivity: { enable: false }, // 对小星球禁用交互
  background: { color: "transparent" },
  detectRetina: true,
});

export const getSaturnIntroConfig = (darkMode: boolean): ISourceOptions => ({
  fpsLimit: 120,
  particles: {
    number: {
      value: 300,
    },
    color: {
      value: darkMode ? "#FCF0B6" : "#AC7F5E",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.5, max: 0.9 },
    },
    size: {
      value: { min: 1, max: 2 },
    },
    move: {
      enable: true,
      speed: { min: 1, max: 2 },
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "destroy",
      },
    },
  },
  interactivity: {
    enable: false,
  },
  background: {
    color: "transparent",
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    rate: {
      quantity: 5,
      delay: 0.1,
    },
    position: {
      x: 50,
      y: 50,
    },
    size: {
      width: 200,
      height: 50,
      mode: "surface",
    },
    life: {
      duration: 1.8,
      count: 1,
    },
  },
});

export const getSaturnExplodeConfig = (darkMode: boolean): ISourceOptions => {
  const introConfig = getSaturnIntroConfig(darkMode);
  const introEmitters = introConfig.emitters;

  return {
    ...introConfig,
    particles: {
      ...introConfig.particles,
      move: {
        ...introConfig.particles?.move,
        speed: { min: 5, max: 10 },
        direction: "outside",
        outModes: {
          default: "destroy",
        },
      },
    },
    emitters:
      introEmitters && !Array.isArray(introEmitters)
        ? {
            ...introEmitters,
            rate: { quantity: 200, delay: 0 },
            life: { duration: 0.1, count: 1 },
          }
        : undefined,
  };
};
