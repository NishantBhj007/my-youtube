import React, { useEffect, useState } from "react";
import { youtube_Api } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videous, setVideous] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtube_Api);
    const response = await data.json();
    console.log(response);
    setVideous(response.items);
  };

  return (
    <div className="flex flex-wrap">
      {videous.map((videous) => (
        <Link to={"watch?v=" + videous.id} key={videous.id}>
          <VideoCards info={videous} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
