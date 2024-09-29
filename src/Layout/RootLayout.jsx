import React from 'react'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'

const RootLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-full mx-auto">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout
