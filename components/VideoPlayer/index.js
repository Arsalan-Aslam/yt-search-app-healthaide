import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ videoId }) {
  return (
    <div className={styles.player_wrapper}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
    </div>
  );
}
