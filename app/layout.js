import Navbar from '@/components/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import { Fredericka_the_Great } from 'next/font/google';
import Home from './page';

const inter = Inter({ 
  subsets: ['latin'] 
  })

export const fredericka_the_great = Fredericka_the_Great({ 
  subsets: ['latin'],
  weight: ['400'],
  // variable: '--font-fredericka_the_great' 
  });



export const metadata = {
  title: 'My blog',
  description: 'Write to expand',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
