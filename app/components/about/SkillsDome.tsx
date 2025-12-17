"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useGesture } from "@use-gesture/react";
import Image from "next/image";

interface SkillsDomeProps {
  darkMode: boolean;
}

type SkillItem = {
  name: string;
  icon: string;
  description: string;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildSkillItems(darkMode: boolean, segments: number): SkillItem[] {
  const skills = [
    {
      name: "React",
      icon: darkMode ? "/images/icons/react.png" : "/images/icons/react.png",
      description:
        "A JavaScript library for building user interfaces with component-based architecture and virtual DOM for optimal performance.",
    },
    {
      name: "Next.js",
      icon: darkMode ? "/images/icons/nextjs.png" : "/images/icons/nextjs.png",
      description:
        "React framework for production with server-side rendering, static site generation, and built-in routing capabilities.",
    },
    {
      name: "Tailwind",
      icon: darkMode
        ? "/images/icons/tailwindcss.png"
        : "/images/icons/tailwindcss.png",
      description:
        "Utility-first CSS framework for rapidly building custom user interfaces with highly customizable design systems.",
    },
    {
      name: "TypeScript",
      icon: darkMode
        ? "/images/icons/typescript.png"
        : "/images/icons/typescript.png",
      description:
        "Typed superset of JavaScript that compiles to plain JavaScript, providing static type checking and enhanced IDE support.",
    },
    {
      name: "Express.js",
      icon: darkMode
        ? "/images/icons/express.png"
        : "/images/icons/express.png",
      description:
        "Fast, unopinionated, minimalist web framework for Node.js, perfect for building RESTful APIs and web applications.",
    },
    {
      name: "HTML",
      icon: darkMode ? "/images/icons/html.png" : "/images/icons/html.png",
      description:
        "Standard markup language for creating web pages and web applications, foundation of all web development.",
    },
    {
      name: "PHP",
      icon: darkMode ? "/images/icons/php.png" : "/images/icons/php.png",
      description:
        "Server-side scripting language designed for web development, powering millions of websites worldwide.",
    },
    {
      name: "MySQL",
      icon: darkMode ? "/images/icons/mysql.png" : "/images/icons/mysql.png",
      description:
        "Open-source relational database management system, widely used for storing and managing structured data.",
    },
    {
      name: "REST API",
      icon: darkMode
        ? "/images/icons/restapi.png"
        : "/images/icons/restapi.png",
      description:
        "Architectural style for designing networked applications using HTTP methods for CRUD operations.",
    },
    {
      name: "GitHub",
      icon: darkMode
        ? "/images/icons/github2.png"
        : "/images/icons/github2.png",
      description:
        "Version control platform for collaboration, code hosting, and project management with Git integration.",
    },
    {
      name: "Docker",
      icon: darkMode ? "/images/icons/docker.png" : "/images/icons/docker.png",
      description:
        "Platform for developing, shipping, and running applications in isolated containers for consistency across environments.",
    },
    {
      name: "Postman",
      icon: darkMode
        ? "/images/icons/postman.png"
        : "/images/icons/postman.png",
      description:
        "API development and testing tool for building, testing, and documenting APIs with an intuitive interface.",
    },
    {
      name: "Cloudflare",
      icon: darkMode
        ? "/images/icons/cloudflare.png"
        : "/images/icons/cloudflare.png",
      description:
        "Global CDN and security platform providing performance optimization, DDoS protection, and DNS services.",
    },
    {
      name: "Node.js",
      icon: darkMode ? "/images/icons/nodejs.png" : "/images/icons/nodejs.png",
      description:
        "JavaScript runtime built on Chrome's V8 engine, enabling server-side JavaScript execution for scalable applications.",
    },
  ];

  const xCols = Array.from({ length: segments }, (_, i) => i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map((y) => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  const usedSkills = Array.from(
    { length: totalSlots },
    (_, i) => skills[i % skills.length]
  );

  return coords.map((c, i) => ({
    ...c,
    name: usedSkills[i].name,
    icon: usedSkills[i].icon,
    description: usedSkills[i].description,
  }));
}

function computeItemBaseRotation(
  offsetX: number,
  offsetY: number,
  sizeX: number,
  sizeY: number,
  segments: number
) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function SkillsDome({ darkMode }: SkillsDomeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const focusedElRef = useRef<HTMLElement | null>(null);
  const originalTilePositionRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const pointerTypeRef = useRef<"mouse" | "pen" | "touch">("mouse");
  const tapTargetRef = useRef<HTMLElement | null>(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add("dg-scroll-lock");
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute("data-enlarging") === "true") return;
    scrollLockedRef.current = false;
    document.body.classList.remove("dg-scroll-lock");
  }, []);

  const segments = 35;
  const maxVerticalRotationDeg = 15;
  const dragSensitivity = 20;
  const dragDampening = 2;
  const enlargeTransitionMs = 300;
  const imageBorderRadius = "20px";

  const items = useMemo(
    () => buildSkillItems(darkMode, segments),
    [darkMode, segments]
  );

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width);
      const h = Math.max(1, cr.height);

      let radius = w * 0.6; // 基於寬度計算半徑
      radius = Math.min(radius, h * 15);
      radius = clamp(radius, 300, 1000);

      lockedRadiusRef.current = Math.round(radius);
      root.style.setProperty("--radius", `${lockedRadiusRef.current}px`);
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1); // vY = 0; // 禁止垂直惯性
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = rotationRef.current.x; // 禁止垂直惯性
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        stopInertia();

        const evt = event as PointerEvent;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({
        event,
        last,
        velocity: velArr = [0, 0],
        direction: dirArr = [0, 0],
        movement,
      }) => {
        if (!draggingRef.current || !startPosRef.current) return;

        const evt = event as PointerEvent;

        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;

        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }

        const nextX = startRotRef.current.x; // 禁止垂直拖动
        const nextY = startRotRef.current.y + dxTotal / dragSensitivity;

        const cur = rotationRef.current;
        if (cur.x !== nextX || cur.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (last) {
          draggingRef.current = false;

          let [vMagX, vMagY] = velArr;
          const [dirX, dirY] = dirArr;
          let vx = vMagX * dirX;
          let vy = 0; // 禁止垂直惯性

          if (
            Math.abs(vx) < 0.001 &&
            Math.abs(vy) < 0.001 &&
            Array.isArray(movement)
          ) {
            const [mx, my] = movement;
            vx = (mx / dragSensitivity) * 0.02;
            vy = (my / dragSensitivity) * 0.02;
          }

          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
            startInertia(vx, vy);
          }
          startPosRef.current = null;
          movedRef.current = false;
        }
      },
    },
    { target: mainRef, eventOptions: { passive: false } }
  );

  useEffect(() => {
    return () => {
      document.body.classList.remove("dg-scroll-lock");
    };
  }, []);

  const cssStyles = `
    .skills-dome-root {
      --radius: 520px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / ${segments}) / 2);
      --rot-x: calc((360deg / ${segments}) / 2);
      --item-width: calc(var(--circ) / ${segments});
      --item-height: calc(var(--circ) / ${segments});
    }
    
    .skills-dome-root * { box-sizing: border-box; }
    .skills-sphere, .skill-item, .skill__content { transform-style: preserve-3d; }
    
    .skills-stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .skills-sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .skill-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .skill__content {
      position: absolute;
      inset: 5px;
      border-radius: ${imageBorderRadius};
      overflow: visible;
      backface-visibility: hidden;
      background: transparent;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0;
      transition: transform 300ms, box-shadow 300ms;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    
    .skill__content:hover {
      transform: scale(1.1);
      box-shadow: none;
    }
    
    .skill__name {
      position: absolute;
      bottom: -30px;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      background-color: ${
        darkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.8)"
      };
      color: ${darkMode ? "#fff" : "#000"};
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      pointer-events: none; /* 让名字不影响悬停 */
      backdrop-filter: blur(4px);
    }

    .skill__content:hover .skill__name {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .skills-dome-root {
        height: 500px !important;
      }
    }

    @media (max-width: 480px) {
      .skills-dome-root {
        height: 400px !important;
      }
    }

    @keyframes continuous-flip {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(360deg);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="skills-dome-root relative w-full h-[700px] md:h-[800px] lg:h-[900px]"
        style={
          {
            ["--segments-x" as any]: segments,
            ["--segments-y" as any]: segments,
          } as React.CSSProperties
        }
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid place-items-center overflow-hidden select-none"
          style={{ touchAction: "none" }}
        >
          <div className="skills-stage">
            <div ref={sphereRef} className="skills-sphere">
              {items.map((skill, i) => (
                <div
                  key={`${skill.x},${skill.y},${i}`}
                  className="skill-item"
                  data-name={skill.name}
                  data-icon={skill.icon}
                  data-offset-x={skill.x}
                  data-offset-y={skill.y}
                  data-size-x={skill.sizeX}
                  data-size-y={skill.sizeY}
                  style={
                    {
                      ["--offset-x" as any]: skill.x,
                      ["--offset-y" as any]: skill.y,
                      ["--item-size-x" as any]: skill.sizeX,
                      ["--item-size-y" as any]: skill.sizeY,
                    } as React.CSSProperties
                  }
                >
                  <div className="skill__content">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={500}
                      height={500}
                      className="w-full h-full p-2 object-contain pointer-events-none"
                      draggable={false}
                    />
                    <div className="skill__name">{skill.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={frameRef}
            className="viewer-frame absolute inset-0 pointer-events-none"
          />
        </main>
      </div>
    </>
  );
}
