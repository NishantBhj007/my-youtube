import React from "react";

function VideoCards({ info }) {
  const { thumbnails, localized } = info.snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li>{info?.snippet?.channelTitle}</li>
        <li className="font-bold">{localized?.title}</li>
        {/* <li className="p-2">{localized?.description}</li> */}
      </ul>
    </div>
  );
}

export default VideoCards;
