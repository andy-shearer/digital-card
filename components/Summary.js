import React from "react"
import Buttons from "./Buttons"

export default function Summary() {
    return(
        <div className="summary--container">
            <h1 className="summary--name">Andy Shearer</h1>
            <h2 className="summary--title">Solidity Developer</h2>
            <h3 className="summary--site">shearer.hashnode.dev</h3>
            <div className="icon-button">
                <i className="fa-solid fa-envelope icon-button--icon"></i>
                <span className="icon-button--text">Email</span>
            </div>
        </div>
    )
}