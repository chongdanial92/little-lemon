import React from 'react'
import "../../styles/Layout.css"
import Header from "../layout/Header"
import Footer from "../layout/Footer"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
    )
}
