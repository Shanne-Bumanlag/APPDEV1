import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SongList from "./components/tracks/SongList";

function App() {
  return (
    <div className="page">
      <div className="app-container">
        <Header />
        <SongList />
        <Footer />
      </div>
    </div>
  );
}

export default App;