'use client'

import Script from "next/script"

export default function LayoutLab({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="min-h-screen p-1">
                {children}
            </main>
            <Script id='open-cv-script' src="https://docs.opencv.org/5.x/opencv.js" onReady={() => {
                console.log('open cv is ready!')
            }} />
        </>
    )
}
