"use client";

import dynamic from "next/dynamic";
import styles from "./WelcomeTitleWithLottie.module.css";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false }
);

// Lottie animation sources. Player accepts a URL to Lottie JSON or a path to local JSON.
// See: https://docs.lottiefiles.com/lottie-player/components/lottie-react
// Paths are URL-encoded for filenames with spaces.
const LOTTIE_LEFT_URL = "/lottie/Couple%20camping%20in%20nature.json";
const LOTTIE_RIGHT_URL = "/lottie/Travel%20is%20fun.json";

interface WelcomeTitleWithLottieProps {
  prefix: string;
  red: string;
  suffix: string;
  titleClassName: string;
  prefixClassName: string;
  redClassName: string;
  suffixClassName: string;
}

export default function WelcomeTitleWithLottie({
  prefix,
  red,
  suffix,
  titleClassName,
  prefixClassName,
  redClassName,
  suffixClassName,
}: WelcomeTitleWithLottieProps) {
  return (
    <div className={styles.welcomeTitleRow}>
      <div className={styles.lottieWrap} aria-hidden="true">
        <Player
          src={LOTTIE_RIGHT_URL}
          loop
          autoplay
          className={styles.lottie}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1 className={titleClassName}>
        <span className={prefixClassName}>{prefix}</span>
        <span className={redClassName}>{red}</span>
        <span className={suffixClassName}>{suffix}</span>
      </h1>
      <div className={`${styles.lottieWrap} ${styles.lottieWrapRight}`} aria-hidden="true">
        <Player
          src={LOTTIE_LEFT_URL}
          loop
          autoplay
          className={styles.lottie}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
