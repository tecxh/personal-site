import Link from "next/link"

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">/</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/experience">experience</Link></li>
        <li><Link href="/work">work</Link></li>
      </ul>
    </nav>
  )
}