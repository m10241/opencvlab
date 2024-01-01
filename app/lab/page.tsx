'use client'
import Script from "next/script";

export default function Lab() {
    return (
        <>
            <h1>Hello!</h1>
            <Script id='open-cv-script' src="https://docs.opencv.org/5.x/opencv.js" onReady={() => {
                console.log('open cv is ready!')
            }} />

        </>
    )
}