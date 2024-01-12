import React, { useRef, useState } from "react";
import styles from "./Voice.module.scss";
import classNames from "classnames";

interface Props {
  style?: React.CSSProperties;
  src: string;
}

export const Voice: React.FC<Props> = (props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPauseClick = () => {
    const audio = audioRef.current;
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
    const audio = audioRef.current;
    if (audio) {
      const { currentTime, duration } = audio;
      const progress = currentTime / duration;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 220}px`;
      }
    }
  };
  const onChangePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (audioRef.current)
      audioRef.current.currentTime = (x / 220) * audioRef.current.duration;
  };
  const onEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };
  return (
    <div className={styles.Wrapper} style={props.style}>
      <audio
        style={{ display: "none" }}
        ref={audioRef}
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
        <div
          className={classNames(styles.Progress, styles.activeProgress)}
          ref={progressRef}
        />
      </div>
    </div>
  );
};
