import { useState } from "react";
import Header from "./Header";
import NowPlaying from "./NowPlaying";
import Playlist from "./Playlist";

export default function App() {
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [bigScreen, setBigScreen] = useState(true);

  const handleShowMusic = () => {
    setShowProgressBar(!showProgressBar);
  };

  const handleBigScreen = () => {
    if (window.innerWidth < 1024) {
        return setBigScreen(!bigScreen);
    } else if (window.innerWidth >= 1024) {
        return setBigScreen(true)
    }
}

  return (
    <>
      <Header handleShowMusic={handleShowMusic} handleBigScreen={handleBigScreen} bigScreen={bigScreen} title="Tocando Agora" />
      <Playlist showPlaylist={!showProgressBar} bigScreen={bigScreen} />
      <NowPlaying showProgressBar={showProgressBar} />
    </>
  );
}
