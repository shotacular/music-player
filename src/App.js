import React, {useState, useRef} from 'react'
import './styles/app.scss'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
import data from './data'

function App() {
  // Ref
  const audioRef = useRef(null)
  // State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
})
const [libraryStatus, setLibraryStatus] = useState(false)

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration
  const roundedCurrent = Math.round(current)
  const roundedDuration = Math.round(duration)
  const animation = Math.round((roundedCurrent / roundedDuration) * 100)
  setSongInfo({
    ...songInfo, 
    currentTime: current, 
    duration, 
    animationPercentage: animation
  })
}
const themeLocal = localStorage.getItem("theme")
if (themeLocal === null) {
  localStorage.setItem("theme", "Light")
}
const [theme, setTheme] = useState(themeLocal)
const [repeat, setRepeat] = useState(false)
const volumeStorage = () =>
  localStorage.getItem("volume") ? localStorage.getItem("volume") : 1

const [volume, setVolume] = useState(JSON.parse(volumeStorage()))

const acttiveLibraryHandler = (nextPrev) => {
  const newSongs = songs.map((song) => {
      if(song.id === nextPrev.id) {
          return {
              ...song,
              active: true,
          }
      } else {
          return {
              ...song,
              active: false,
          }
      }
  })
  setSongs(newSongs)
}

const songEndHandler = async () => {
  if (repeat) {
    audioRef.current.currentTime = 0
    audioRef.current.play()
    return
  }
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
  await setCurrentSong(songs[(currentIndex + 1) % songs.length])
  acttiveLibraryHandler(songs[(currentIndex + 1) % songs.length])
  if(isPlaying) audioRef.current.play()
}

const setSongVolume = () => {
  audioRef.current.volume = volumeStorage()
}

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        setSongVolume={setSongVolume}
        volume={volume}
        setVolume={setVolume}
        audioRef={audioRef}
        songs={songs}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        setRepeat={setRepeat}
        repeat={repeat}
      />
      <Library 
        audioRef={audioRef}
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        theme={theme}
        setTheme={setTheme}
      />
      <audio 
        onLoadedMetadataCapture={setSongVolume}
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
