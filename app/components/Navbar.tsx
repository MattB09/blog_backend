import React from 'react'
import Link from 'next/link'

export default function Navbar() {

  function toggleNav() {
    console.log("clicked");
  }

  return (
    <header>

      <Link href="/">
        <a className={`flex-centered`}>
          <span className="">Blog</span>
        </a>
      </Link>

      <nav className="">
        <ul className="">
          <li className=""><Link href="/"><a onClick={toggleNav}>Home</a></Link></li>
          {status === 'authenticated' 
          ? (
          <>
            <li className=""><Link href="/addpost"><a onClick={toggleNav}>Add a Post</a></Link></li>
            <li className=""><Link href="/mystack"><a onClick={toggleNav}>My Stack</a></Link></li>
            <li className="">
              <button className="">
                Logout
              </button>
            </li>
          </>
          )
          : (
          <>
            <li className="" onClick={toggleNav}>About</li>
            <li className="">
              <Link href="/signin">
                <a onClick={toggleNav} className="">
                  Get Started
                </a>
              </Link>
            </li>
          </>
          )}
        </ul>
      </nav>
      
    </header>
  )
}
