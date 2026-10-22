function SongCard({ title, artist, plays }) {
  return (
    <div className="song-card">
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Plays: {plays}</p>
    </div>
  );
}

export default SongCard;