"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false }
);

const SCROLL_HINT_URL = "/lottie/scrolling.json";

interface ScrollDownHintProps {
  /** When true, darkens the icon so it's visible on light hero images (e.g. Tours, Winter). */
  lightBackground?: boolean;
}

export default function ScrollDownHint({ lightBackground }: ScrollDownHintProps = {}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [pinToViewport, setPinToViewport] = useState(false);

  useEffect(() => {
    const parent = wrapperRef.current?.parentElement;
    if (!parent) return;

    const updatePosition = () => {
      const heroHeight = parent.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;
      setPinToViewport(heroHeight > viewportHeight);
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(parent);

    window.addEventListener("resize", updatePosition);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div/>
    // <div
    //   ref={wrapperRef}
    //   className="scroll_down_hint"
    //   style={{
    //     position: pinToViewport ? "fixed" : "absolute",
    //     bottom: "24px",
    //     left: "50%",
    //     transform: "translateX(-50%)",
    //     zIndex: 1,
    //     width: "56px",
    //     height: "56px",
    //     pointerEvents: "none",
    //     filter: lightBackground ? "invert(1) brightness(0.3)" : undefined,
    //   }}
    //   aria-hidden
    // >
    //   <Player
    //     src={SCROLL_HINT_URL}
    //     loop
    //     autoplay
    //     style={{ width: "100%", height: "100%" }}
    //   />
    // </div>
  );
}
