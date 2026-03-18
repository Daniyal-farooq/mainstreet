import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Main Street Cafe - Chase the Flavour | Faisalabad',
  description: 'Experience exquisite desserts, ice cream, steaks, pizzas, and more at Main Street Cafe in Faisalabad. Premium dining experience with a diverse menu.',
  keywords: 'Main Street Cafe, Faisalabad restaurant, desserts, ice cream, steaks, pizza, cafe Faisalabad, best cafe Pakistan',
  authors: [{ name: 'Main Street Cafe' }],
  openGraph: {
    title: 'Main Street Cafe - Chase the Flavour',
    description: 'Premium desserts, steaks, and more in Faisalabad',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Main Street Cafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Main Street Cafe - Chase the Flavour',
    description: 'Premium desserts, steaks, and more in Faisalabad',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
