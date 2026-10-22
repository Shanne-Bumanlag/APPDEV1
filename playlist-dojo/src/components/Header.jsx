import Title from "./Title";

function Header() {
  const isLive = true;

  return (
    <header>
      <div className="header-hero">
        <div className="playlist-cover-wrapper">
          <img 
            src="/images/playlist-cover.jpg" 
            alt="Late Night R&B Playlist Cover" 
            className="playlist-cover-img" 
          />
        </div>

        <div className="header-details">
          <span className="badge-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            PLAYLIST
          </span>
          
          <Title />

          <div className="live-badge-row">
            <span className="pulse-dot"></span>
            <p>
              {isLive
                ? "Listening live now."
                : "Playing from your saved queue."}
            </p>
          </div>

          <div className="header-actions">
            <button className="btn-play-big" title="Play Playlist">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <button className="btn-icon-secondary active" title="Save to Your Library">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button className="btn-icon-secondary" title="Shuffle Playback">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.45 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;