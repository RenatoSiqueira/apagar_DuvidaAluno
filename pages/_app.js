import React from "react";
import App from "next/app";
import "../css/tailwindcss.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
export default MyApp;
