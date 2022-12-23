import React, { useContext } from "react";
import OffsetContext from "../context/OffsetContext";

import About from "./About";
import Achievements from "./Achievements";
import Resume from "./Resume";
import Contact from "./Contact";

function Content() {
    const offsetContext = useContext(OffsetContext);

    return (
        <div style={{ marginTop: (offsetContext[0] ? offsetContext[0] : 0) }}>
            <About />
            <Achievements />
            <Resume />
            <Contact />
        </div>
    )
}

export default Content;