function SongThree() {
  const plays = 7;

  return (
    <div className="song-card-grid">
      <div className="track-index-wrapper">
        <span className="track-number-text">3</span>
        <button className="track-play-btn" title="Play Track">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>

      <div className="track-main-info">
        <img src="/images/track3.jpg" alt="Ivy cover" className="track-thumb" />
        <div className="track-text-details">
          <h3>Ivy</h3>
          <p className="track-artist">Artist: Frank Ocean</p>
        </div>
      </div>

      <p className="track-album col-album">Album: Blonde</p>

      <p className="track-released col-released">Released: 2016</p>

      <div className="col-stats">
        <span className="plays-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0 1 14 0v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/></svg>
          {plays * 3} plays across 3 devices
        </span>
      </div>

      <div className="col-actions">
        <button className="btn-like" title="Like track">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
      </div>
    </div>
  );
}

export default SongThree;