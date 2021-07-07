import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import API from '../utils/api'
import { useAuthContext } from './auth/AuthProvider'
import { AxiosResponse } from 'axios'

const Layout: React.FC = ({ children }) => {
  const { login, status, logout } = useAuthContext()

  useEffect(() => {
    (async () => {
      console.log('refresh attempt')
      if (localStorage.getItem('logged') !== 'true') {
        console.log("not found in local storage")
        logout()
        return
      }
      const result: AxiosResponse = await API.post(`/refresh_token`, {}, {withCredentials: true})
      if (result.data.ok === 'true') {
        login({ at: result.data.accessToken, expire: result.data.expire })
      } else {
        logout()
      }
    })()
  }, [])

  return (
    <div>
      {status !== 'pending' && 
        (<>
          <Head>
            <title>Blog</title>
            <meta name="description" content="Blog application" />
          </Head>
          <Navbar />
            { children }
          <Footer />
        </>)
      }
    </div>
  )
}

export default Layout
