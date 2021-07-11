import React, {FormEvent, FunctionComponent, useState, useEffect } from "react"
import { useRouter, NextRouter } from 'next/router'
import { useAuthContext } from "../components/auth/AuthProvider"
import API from '../utils/api'

const SignIn: React.FC = () => {
  const { status, login } = useAuthContext()
  const [email, setEmail] = useState<string>('')
  const [signupEmail, setSignupEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('');
  const [signupPassword, setSignupPassword] = useState<string>('')
  const router: NextRouter = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status])

  const handleSignInSubmit = async (clickEvent:FormEvent<HTMLFormElement>): Promise<void> => {
    clickEvent.preventDefault()

    if (email === '' || password === '') {
      alert("must fill out form");
      return;
    }

    const result = await API.post(`/login`, {email, password}, {withCredentials: true})
    login({ at: result.data.accessToken, expire: result.data.expire })
    router.push('/')
  }

  const handleSignupSubmit = async (clickEvent: FormEvent<HTMLFormElement>): Promise<void> => {
    clickEvent.preventDefault()

    if (signupEmail === '' || signupPassword === '') {
      alert("must fill out form");
      return;
    }

    alert(`signup clicked, ${signupEmail}, ${signupPassword}`)

    router.push('/')
  }

  return (
    <main className="flex flex-wrap justify-center px-4 mt-4 mx-auto">
      {status == 'unauthenticated' && 
      (<>
      <div className="w-full sm:w-96"> 
        <h1 className="font-bold text-4xl tracking-wide block">Sign In</h1>
        <form onSubmit={handleSignInSubmit} className="mt-4">

          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
          <input id="email" value={email} type="email" placeholder="email" className="w-full px-4 py-1 rounded" 
              onChange={e => setEmail(e.target.value)} />

          <label htmlFor="password" className="block text-sm text-gray-600 mt-4 mb-2">Password</label>
          <input id="password" value={password} type="password" placeholder="password" className="w-full px-4 py-1 rounded"
            onChange={e => setPassword(e.target.value)} />
            
          
          <button type="submit" className="bg-blue-800 text-gray-100 py-1 rounded text-center w-full mt-8">Sign In</button>
        </form>
      </div>

      <div className="w-full sm:w-96">  
        <h1 className="font-bold text-4xl tracking-wide block mt-16 lg:mt-4">New User? Sign up</h1>
        <form onSubmit={handleSignupSubmit} className="mt-4">

          <label htmlFor="signupEmail" className="block text-sm text-gray-600 mb-2">Email</label>
          <input id="signupEmail" value={signupEmail} type="email" placeholder="email" className="w-full px-4 py-1 rounded" 
              onChange={e => setSignupEmail(e.target.value)} />

          <label htmlFor="signupPassword" className="block text-sm text-gray-600 mt-4 mb-2">Password</label>
          <input id="signupPassword" value={signupPassword} type="password" placeholder="password" className="w-full px-4 py-1 rounded"
            onChange={e => setSignupPassword(e.target.value)} />
            
          
          <button type="submit" className="bg-blue-800 text-gray-100 py-1 rounded text-center w-full mt-8">Sign In</button>
        </form>
      </div>
      </>)}
    </main>
  )
}

export default SignIn