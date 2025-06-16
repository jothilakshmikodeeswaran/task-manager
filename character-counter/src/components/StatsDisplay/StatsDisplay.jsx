
import React from "react";


function StatsDisplay({stats, showReadingTime=true}) {
  return (
    <div>
      <div>
        <div>Characters <strong>{stats.characterCount}</strong></div>
      </div>
      <div>
        <div>Words <strong>{stats.wordCount}</strong></div>
      </div>
      <div>
        {showReadingTime && (
        <div>Reading Time: <strong>{stats.readingTime.toFixed(2)} min</strong></div>
      )}
        <div>Min: 25 | Max: 100</div>
      </div>
    </div>
  );
}

export default StatsDisplay;