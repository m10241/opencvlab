import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNav from './ui/topnav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenCV Lab',
  description: 'OpenCV Lab, a NextJS app to explore capabilities of OpenCV',
  authors: [{ name: 'Meej' }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <TopNav />
        </header>
        {children}
      </body>
    </html>
  )
}
