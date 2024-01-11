import React, { useRef, useState } from "react";
import styles from "./Voice.module.scss";
import classNames from "classnames";

interface Props {
  style?: React.CSSProperties;
  src: string;
}

export const Voice: React.FC<Props> = (props) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPauseClick = () => {
    const audio = ref.current;
    if (audio) {
      if (!isPlaying) {
        audio.play().then(() => setIsPlaying(true));
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };
  const onProgress = () => {
    const audio = ref.current;
    if (audio) {
      const { currentTime, duration } = audio;
      window.console.log("h", currentTime, duration);
      const progress = currentTime / duration;
      const progressElement = audio.parentElement?.querySelector(
        `.${styles.Progress}`
      ) as HTMLDivElement;
      const activeProgressElement = audio.parentElement?.querySelector(
        `.${styles.activeProgress}`
      ) as HTMLDivElement;
      if (progressElement && activeProgressElement) {
        activeProgressElement.style.width = `${progress * 220}px`;
      }
    }
  };
  const onChangePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (ref.current) ref.current.currentTime = (x / 220) * ref.current.duration;
  };
  const onEnded = () => {
    setIsPlaying(false);
    if (ref.current) ref.current.currentTime = 0;
  };
  return (
    <div className={styles.Wrapper} style={props.style}>
      <audio
        controls
        style={{ display: "none" }}
        ref={ref}
        onTimeUpdate={onProgress}
        onEnded={onEnded}
      >
        <source src={props.src} type="audio/mp3" />
      </audio>
      <div
        className={classNames(styles.Icon, {
          [styles.Pause]: isPlaying,
        })}
        onClick={onPlayPauseClick}
      />
      <div className={styles.ProgressWrapper} onClick={onChangePosition}>
        <div className={styles.Progress} />
        <div className={classNames(styles.Progress, styles.activeProgress)} />
      </div>
    </div>
  );
};
