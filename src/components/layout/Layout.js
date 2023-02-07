import React from 'react'
import "../../styles/Layout.css"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import Alert from "../ui/Alert";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="main-container">
                {children}
            </main>
            <Footer />
            <Alert />
        </>
    )
}
