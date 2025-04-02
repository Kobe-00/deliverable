import React from "react";
import Track from "./Track";

const Playlist = ({ tracks }) => {
  if (!tracks.length) return <p className="text-center">Select a mood to see songs 🎵</p>;

  return (
    <div className="grid gap-4 mt-4">
      {tracks.map((track) => (
        <Track key={track.trackId} track={track} />
      ))}
    </div>
  );
};

export default Playlist;
