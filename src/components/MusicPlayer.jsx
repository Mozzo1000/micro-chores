import React, { useState } from 'react'
import { Spotify } from 'react-spotify-embed'
import { Tabs } from 'flowbite-react';

function MusicPlayer() {
    const [showMusicPlayer, setShowMusicPlayer] = useState(false);

    return (
        <div className="flex items-center justify-between flex-wrap bg-transparent absolute bottom-0">
            <div className="flex flex-cols items-center flex-shrink-0">
                <button className="btn bg-slate-800 px-3 py-2 rounded hover:bg-slate-600 text-white" onClick={() => setShowMusicPlayer(!showMusicPlayer)}>
                    Show music player
                </button>
            </div>
            <div
                className={`overflow-scroll p-4 bg-stone-900 md:h-5/6 bottom-0 h-screen text-white fixed z-40 ease-in-out duration-300 ${showMusicPlayer ? "translate-y-0" : "translate-y-full"}`}>
                <div className="flex flex-col">
                    <button className="rounded hover:text-slate-400 p-5" onClick={() => setShowMusicPlayer(false)}>
                        Close
                    </button>
                </div>
                <Tabs.Group style="pills">
                    <Tabs.Item active={true} title="Spotify">
                        <Spotify link="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn" />
                    </Tabs.Item>
                    <Tabs.Item title="Youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    )
}

export default MusicPlayer