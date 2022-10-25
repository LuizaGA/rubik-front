import React, { useState, useEffect, createContext, useContext } from "react";

export const Songs = createContext({})

export default function SongProvider({children}) {
    const [active, setActive] = useState(undefined);
    const [ActivePlaylist, setActivePlaylist] = useState(localStorage.getItem("activePlaylist"))
    const [reload, setReload] = useState(false)
    return (
        <Songs.Provider 
            value={{reload, setReload, active, setActive, ActivePlaylist, setActivePlaylist}}>{children}
        </Songs.Provider>
    )
    
}

export function useSong() {
    const songContext = useContext(Songs);
    
    const {reload, setReload, active, setActive, ActivePlaylist, setActivePlaylist} = Songs;
    return {reload, setReload, active, setActive, ActivePlaylist, setActivePlaylist};
}