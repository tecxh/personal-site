import Link from "next/link"

export const Nav = () => {
  return (
    <nav className="flex-1 p-4">
      <ul>
        <li><Link href="/">/</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/experience">experience</Link></li>
        <li><Link href="/work">work</Link></li>
      </ul>
    </nav>
  )
}