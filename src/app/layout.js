import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tory Rifa Misteriosa',
  description: 'Llevate una caja llena de premios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>      
        {children}
        <Navbar />
      </body>
    </html>
  )
}
