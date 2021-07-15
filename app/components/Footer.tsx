import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-2 mt-8 text-gray-500 font-semibold">
      <div>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li><address>(000) 000 - 0000</address></li>
          <li><address>blogemail@blogemail.com</address></li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li><Link href="/about"><a>About</a></Link></li>
          <li>Careers</li>
        </ul>
      </div>
      <p>Copyright 2021 Blog. All rights reserved.</p>
    </footer>
  )
}

export default Footer