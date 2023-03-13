import React, { useState } from 'react'
import { Spotify } from 'react-spotify-embed'
import { Tabs } from 'flowbite-react';

function MusicPlayer() {
    const [showMusicPlayer, setShowMusicPlayer] = useState(false);

    return (
        <div className="flex items-center justify-between flex-wrap bg-transparent absolute bottom-0">
            <div
                className={`p-4 bg-stone-900 md:h-5/6 bottom-0 h-screen text-white fixed z-38 ease-in-out duration-300 ${showMusicPlayer ? "translate-y-0" : "translate-y-[92%]"}`}>
                <p className="pb-2 font-bold" onClick={() => setShowMusicPlayer(!showMusicPlayer)}>Music player</p>
                <Tabs.Group style="pills">
                    <Tabs.Item active={true} title="Spotify">
                        <Spotify link="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn" />
                    </Tabs.Item>
                    <Tabs.Item title="Youtube">
                        <iframe width="300" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    )
}

export default MusicPlayer