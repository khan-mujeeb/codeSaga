import React, { Component } from "react";
import NavBar from "./NavBar";
import GameBody from "./GameBody";
export class HomeScreen extends Component {
    render() {
        return <div>
            <NavBar />
            <GameBody/>
        </div>;
    }
}

export default HomeScreen;
