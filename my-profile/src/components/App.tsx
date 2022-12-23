import React, { useRef, useState, createContext } from "react";
import { PROFILE_INFO } from "../utils/enums";
import './assets/styles/App.scss';

import OffsetContext from "../context/OffsetContext";
import Header from "./Header";
import Content from "./Content";

const App: React.FC = () => {
    // const scrollToAbout = useRef<null | HTMLDivElement>(null);
    // const scrollToAchievements = useRef(null);
    // const scrollToResume = useRef(null);
    // const scrollToContact = useRef(null);

    // const onNavClick = (e: React.MouseEvent, sectionName: string) => {
    //     console.log('onNavClick', sectionName)
    //     scrollToAbout.current?.scrollIntoView();
    // }

    const [headerOffset, setHeaderOffset] = useState(0);

    return (
        <>
            {/* onNavClick={onNavClick} */}
            {/* ref={scrollToAbout} */}
            <OffsetContext.Provider value={[headerOffset, setHeaderOffset]}>
                <Header />
                <Content />
            </OffsetContext.Provider>
            {/* <Achievements ref={scrollToAchievements} />
            <Resume ref={scrollToResume} />
            <Contact ref={scrollToContact} /> */}
        </>
    )
}

export default App;