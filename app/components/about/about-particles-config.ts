import type { ISourceOptions } from "tsparticles-engine";

export const getFireflyParticlesConfig = (): ISourceOptions => ({
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse", // 鼠标悬停时萤火虫会散开
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#FCF0B6", // 萤火虫的淡黄色
    },
    links: {
      enable: false, // 萤火虫之间没有连接线
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out", // 飞出边界后消失
      },
      random: true, // 随机移动
      speed: 0.8, // 移动速度较慢
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50, // 萤火虫数量
    },
    opacity: {
      value: { min: 0.1, max: 0.7 }, // 不透明度随机，营造远近感
      animation: {
        enable: true,
        speed: 1.2,
        sync: false, // 异步闪烁
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 }, // 萤火虫大小随机
    },
  },
  detectRetina: true,
  background: {
    color: "transparent",
  },
});
