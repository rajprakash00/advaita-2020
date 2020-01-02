import React, { Component } from 'react';
import logo from "../img/logo.png"


//<img className="demo_bg" src={tt} />
export default class Demo extends Component {
    componentDidMount() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    render() {
        return (
            <div className="exa">
            <img src={logo} className="logo_main" style={{marginTop:"200px"}}/>  
            </div>
        )
    }
}
