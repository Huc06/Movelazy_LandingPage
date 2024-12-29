import Link from 'next/link'
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-semibold">
          Movelazy
        </Link>
        <p className="text-gray-400 text-sm">Movelazy all rights services</p>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <Youtube className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}