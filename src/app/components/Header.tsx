import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold">
        Movelazy
      </Link>
      <nav className="flex gap-6">
        <Link href="/tutorial" className="hover:text-purple-400 transition">Tutorial</Link>
        <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
        <Link href="https://github.com/Weminal-labs/Movelazy" className="hover:text-purple-400 transition" target="_blank" rel="noopener noreferrer">Github</Link>
      </nav>
    </header>
  );
}