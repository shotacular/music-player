import React from 'react'
import LibrarySong from './LibrarySong'

    const Library = ({audioRef, songs, setCurrentSong, isPlaying, setIsPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong 
                        setCurrentSong={setCurrentSong}
                        song={song} 
                        songs={songs}
                        key={song.id.toString()}
                        id={song.id}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        audioRef={audioRef}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library