import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pampa Prime Meats',
  description: 'Dealers in everything to do meat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
