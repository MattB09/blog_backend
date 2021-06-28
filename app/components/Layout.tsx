import React, {FunctionComponent} from 'react'
import Head from 'next/head'
import Navbar from './Navbar';

const Layout: FunctionComponent = ({ children }) => {

  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog application" />
      </Head>
      <Navbar />
      { children }
    </div>
  )
}

export default Layout
