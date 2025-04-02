import React from "react";

const moods = ["Happy", "Sad", "Energetic", "Chill", "Focus"];

const MoodSelector = ({ onSelectMood }) => {
  return (
    <div className="flex justify-center gap-4 mb-6 flex-wrap">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelectMood(mood)}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          {mood}
        </button>
      ))}
    </div>
  );
};