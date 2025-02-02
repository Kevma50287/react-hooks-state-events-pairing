import video from "../data/video.js";
import Header from "./Header.js";
import CommentSection from "./CommentSection"
import React from "react";

function App() {
  console.log("Here's your data:", video);
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header props={video} />
      <CommentSection comments={video.comments} />
    </div>
  );
}

export default App;
