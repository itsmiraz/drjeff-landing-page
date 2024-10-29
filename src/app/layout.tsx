import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { plantinMTPro, sourceSansPro } from '@/fonts/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eliminate Sciatica Pain Without Surgery',
  description: 'Discover your path to sciatica relief with Dr. Jeff Garofalo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plantinMTPro.variable}  ${sourceSansPro.variable} `}>
      <body >{children}</body>
    </html>
  )
}
