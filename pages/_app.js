import React from "react";
import App from "next/app";
import "../css/tailwindcss.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <style jsx global>
          {`
            @font-face {
              src: url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
            }
            * {
              font-family: "Inter", sans-serif;
            }
          `}
        </style>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
export default MyApp;
