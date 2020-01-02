import React, { Component } from 'react'

export const Context=React.createContext();

export default class Context extends Component {
    state={
        id
    }

    getElements = state =>{
        this.setState({
            id:state
        })
    }
    render() {
        return (
            <Context.Provider value={{id:this.getElements}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
