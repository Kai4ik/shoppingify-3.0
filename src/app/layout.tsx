// Next.js related imports
import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Shoppingify: Smart Shopping Hub',
  description: 'Shop smarter with Price Tracker Plus - effortlessly scan receipts, track spending, and uncover valuable insights. Your go-to app for savvy shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='px-5'>{children}</body>
    </html>
  )
}
