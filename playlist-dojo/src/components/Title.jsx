import { PLAYLIST_NAME, CURATOR } from "../constants";

function hype(text) {
  return text.toUpperCase() + " 🔥";
}

function Title() {
  return (
    <>
      <h1 className="title-heading">Late Night R&B Playlist</h1>
      <p className="playlist-desc">For late nights, deep thoughts, and good vibes.</p>
      <p className="curator-meta">
        <strong>{PLAYLIST_NAME}</strong> <span className="dot">•</span> Created by <strong>{CURATOR}</strong> <span className="dot">•</span> 3 tracks
      </p>
      <div className="hype-tag">{hype("now playing")}</div>
    </>
  );
}

export default Title;