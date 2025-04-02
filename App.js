import React, { useState } from "react";
import MoodSelector from "./js/MoodSelector";
import Playlist from "./js/Playlist";
import fetchSongsByMood from "./js/api";

const App = () => {
  const [mood, setMood] = useState("");
  const [tracks, setTracks] = useState([]);

  const handleMoodSelect = async (selectedMood) => {
    setMood(selectedMood);
    const results = await fetchSongsByMood(selectedMood);
    setTracks(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Mood-Based Music Finder</h1>
      <MoodSelector onSelectMood={handleMoodSelect} />
      <Playlist tracks={tracks} />
    </div>
  );
};

export default App;