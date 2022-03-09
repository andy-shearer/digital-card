import React from "react"
import Headshot from "./components/Headshot"
import Summary from "./components/Summary"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="wrapper">
            <Headshot />
            <Summary />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}