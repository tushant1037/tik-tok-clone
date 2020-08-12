import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
//http://storage.boloindya.com/media/compressed1594269812614_159426982761.mp4
//http://storage.boloindya.com/media/timetochangebuddy_1596399677492_159639929415.mp4
//http://storage.boloindya.com/media/VIDEO_1593453331887_159345429594.mp4
