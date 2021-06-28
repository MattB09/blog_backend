import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [status, setStatus] = useState('unauthenticated')
  const [windowWidth, setWindowWidth] = useState(0);
  const [navDisplay, setNavDisplay] = useState(false);

  useEffect(()=> {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth > 767) setNavDisplay(true);
    else setNavDisplay(false);
  }, [windowWidth])

  function toggleNav() {
    if (windowWidth < 768) setNavDisplay(prev => !prev);
  }

  return (
    <header className="flex items-center flex-wrap bg-blue-800 text-gray-100 py-3 px-6">

      <Link href="/">
        <a className="no-underline font-bold">
          Blog
        </a>
      </Link>

      <button className="inline-flex px-2 py-1 hover:bg-gray-100 hover:text-blue-800 rounded md:hidden ml-auto outline-none focus:outline-none" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className={`${!navDisplay && 'hidden'} ml-auto w-full md:w-auto`}>
        <ul className="w-full items-start justify-end flex flex-col md:inline-flex md:flex-row md:w-auto md:ml-auto md:items-center md:h-auto">
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
                  Sign In
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
