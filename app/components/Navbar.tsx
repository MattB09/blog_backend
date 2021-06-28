import React, {useState} from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [status, setStatus] = useState('unauthenticated')
  const [navDisplay, setNavDisplay] = useState('false');

  // add useEffect to automatically turn nav to true when the window size is increased.
  function toggleNav() {
    console.log("clicked");
  }

  return (
    <header className="flex items-center justify-between bg-blue-800 text-gray-100 py-3 px-6">

      <Link href="/">
        <a className="no-underline font-bold p-2">
          Blog
        </a>
      </Link>

      <button className="md:hidden items-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className="items-start">
        <ul className="hidden top-navbar w-full md:inline-flex md:flex-grow md:w-auto ">
          <li className="mr-3"><Link href="/"><a onClick={toggleNav}>Home</a></Link></li>
          {status === 'authenticated' 
          ? (
          <>
            <li className="mr-3"><Link href="/addpost"><a onClick={toggleNav}>Add a Post</a></Link></li>
            <li className="mr-3"><Link href="/mystack"><a onClick={toggleNav}>My Stack</a></Link></li>
            <li className="">
              <button className="">
                Logout
              </button>
            </li>
          </>
          )
          : (
          <>
            <li className="mr-3" onClick={toggleNav}><Link href="/about"><a onClick={toggleNav}>About</a></Link></li>
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
