
import React from 'react'
import App from 'next/app'
import '../css/tailwindcss.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}
export default MyApp

//05 - Adicionando o Tailwind, i stoped 02:44 minutes