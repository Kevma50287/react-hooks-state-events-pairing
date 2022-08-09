import video from "../data/video.js";
import Header from "./Header.js";
import CommentSection from "./CommentSection"
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [votes, setVotes] = useState(
    {
      upvotes:video.upvotes,
      downvotes:video.downvotes
    }
  )

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
      <Header props={video} votes={votes} setVotes={setVotes} />
      <CommentSection comments={video.comments} />
    </div>
  );
}

export default App;
