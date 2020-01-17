import React, { Component } from "react";

export const GlobalContext = React.createContext();

export default class GlobalContextProvider extends Component {
  state = {
    isAuthenticated: false,
    user: ""
  };

  toggleAuthenticated = state => {
    this.setState({
      isAuthenticated: state
    });
  };

  updateUser = state => {
    this.setState({
      user: state
    });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          toggleAuth: this.toggleAuthenticated,
          updateUser: this.updateUser
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}