import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, likes, messages, shares, song }) => {
            return (
              <Video
                url={url}
                channel={channel}
                description={description}
                likes={likes}
                messages={messages}
                shares={shares}
                song={song}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
