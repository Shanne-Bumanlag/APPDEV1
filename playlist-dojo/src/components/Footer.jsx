function Footer() {
  return (
    <>
      <footer>
        <p>© {new Date().getFullYear()} Late Night R&B • Curated with Spotify Dojo</p>
      </footer>

      {/* Spotify Bottom Sticky Audio Player */}
      <div className="spotify-player-bar">
        <div className="player-left">
          <img src="/images/track1.jpg" alt="Currently Playing" className="player-cover" />
          <div className="player-track-info">
            <span className="player-track-title">Break from Toronto</span>
            <span className="player-track-artist">PARTYNEXTDOOR</span>
          </div>
          <button className="btn-like liked" style={{ marginLeft: "8px" }} title="Saved to library">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button className="btn-player" title="Shuffle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.45 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
              </svg>
            </button>
            <button className="btn-player" title="Previous Track">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            <button className="btn-player-main" title="Pause">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </button>
            <button className="btn-player" title="Next Track">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
            <button className="btn-player" title="Repeat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
              </svg>
            </button>
          </div>

          <div className="player-progress-bar-container">
            <span>1:42</span>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill"></div>
            </div>
            <span>3:18</span>
          </div>
        </div>

        <div className="player-right">
          <button className="btn-player" title="Queue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h11v2H4z"/>
            </svg>
          </button>
          <button className="btn-player" title="Volume">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <div className="volume-bar">
            <div className="volume-fill"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;