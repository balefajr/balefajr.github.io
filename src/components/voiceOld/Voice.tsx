import React, { useRef, useState } from "react";
import styles from "./Voice.module.scss";
import classNames from "classnames";
import { digitsToHindi, formatSeconds } from "../../utils/utils";

interface Props {
  src: string;
}

export const Voice: React.FC<Props> = (props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const onProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      const { currentTime, duration } = audio;
      setCurrentTime(currentTime);
      const progress = currentTime / duration;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 180}px`;
        console.log(progressRef.current.style.width);
      }
    }
  };
  const onChangePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (audioRef.current)
      audioRef.current.currentTime = (x / 180) * audioRef.current.duration;
  };
  const onEnded = () => {
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };
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
  return (
    <div className={styles.Wrapper}>
      <audio
        style={{ display: "none" }}
        ref={audioRef}
        onTimeUpdate={onProgress}
        onEnded={onEnded}
        onPause={() => setIsPlaying(false)}
      >
        <source src={props.src} type="audio/mp3" />
      </audio>
      <div className={styles.IconWrapper} onClick={onPlayPauseClick}>
        <div
          className={classNames(styles.Icon, {
            [styles.Pause]: isPlaying,
          })}
        />
      </div>
      <div className={styles.ProgressWrapper}>
        <div className={styles.ProgressContainer} onClick={onChangePosition}>
          <div
            className={classNames(styles.ActiveProgress, styles.Progress)}
            ref={progressRef}
          >
            <div className={styles.ProgressThumb} />
          </div>
        </div>
        <div className={styles.Progress} />
        <p className={styles.Time}>
          {digitsToHindi(
            `${formatSeconds(currentTime ?? 0)}/${formatSeconds(
              audioRef.current?.duration ?? 0
            )}`
          )}
        </p>
      </div>
    </div>
  );
};
