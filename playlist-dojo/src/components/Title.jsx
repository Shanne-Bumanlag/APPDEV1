import { PLAYLIST_NAME, CURATOR } from "../constants";

function hype(text) {
  return text.toUpperCase() + " 🔥";
}

function Title() {
  return (
    <>
      <h1>Late Night R&B Playlist</h1>
      <p>For late nights, deep thoughts, and good vibes.</p>
      <p>{`${PLAYLIST_NAME} by ${CURATOR}`}</p>
      <p>{hype("now playing")}</p>
    </>
  );
}

export default Title;