import React from "react";

const Track = ({ track }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <div className="flex items-center gap-4">
        <img src={track.artworkUrl100} alt={track.trackName} className="w-20 h-20 rounded" />
        <div>
          <h2 className="font-semibold text-lg">{track.trackName}</h2>
          <p className="text-sm text-gray-600">{track.artistName}</p>
          <audio controls src={track.previewUrl} className="mt-2 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Track;