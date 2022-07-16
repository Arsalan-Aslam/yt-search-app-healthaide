import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer/index';
import axios from 'axios';
import ReadMore from '../../components/ReadMore/index';
import styles from './videoId.module.css';

function VideoPage() {
  const router = useRouter();
  // Capture videoId from dynamic route
  const videoId = router.query.videoId;
  // console.log(videoId);

  const [videoInfo, setVideoInfo] = useState({});

  // Function to call video details API for fetching video details data
  const videodetails = async () => {
    try {
      const res = await axios.get('api/videodetails/', {
        params: { id: videoId },
      });
      const { data } = res;
      // console.log(data.items[0]);
      setVideoInfo(data.items[0]);
      // console.log(videoInfo);
    } catch (error) {
      console.error(error);
    }
  };

  // Call videodetails funtion to fetch video details data on page rendering
  useEffect(() => {
    videodetails();
  }, []);

  return (
    <div className={styles.main}>
      {/* React-player component */}
      <VideoPlayer videoId={videoId} />
      {/* Video details */}
      <div className={styles.info}>
        <h1>{videoInfo && videoInfo.snippet && videoInfo.snippet.title}</h1>
        <span className={styles.channel}>
          <a
            href={`https://youtube.com/channel/${
              videoInfo && videoInfo.snippet && videoInfo.snippet.channelId
            }
        `}
            target='_blank'
            rel='noreferrer'
          >
            <h3>
              {videoInfo && videoInfo.snippet && videoInfo.snippet.channelTitle}
            </h3>
          </a>
        </span>
        {/* ReadMore link component */}
        <ReadMore
          content={
            videoInfo && videoInfo.snippet && videoInfo.snippet.description
          }
        />
      </div>
    </div>
  );
}

export default VideoPage;
