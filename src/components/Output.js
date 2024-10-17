import React from 'react';

function Output({ embedUrl }) {
  return (
    <div id="output">
      URL embed: <a href={embedUrl} target="_blank" rel="noopener noreferrer">{embedUrl}</a>
    </div>
  );
}

export default Output;
