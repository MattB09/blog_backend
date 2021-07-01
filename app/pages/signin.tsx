import React, {FormEvent, FunctionComponent, useState} from "react"
import router, { useRouter } from 'next/router';

const SignIn:FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit: (clickEvent:FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      alert("must fill out form");
      return;
    }

    console.log(email, password);
    router.push('/');
    
  }

  return (
    <main className="flex flex-col justify-center px-4 mt-8 sm:w-96 mx-auto">
      {/* {status == 'unauthenticated' && 
      (<>  */}
        <h1 className="font-bold text-4xl tracking-wide block">Sign In</h1>
        <form onSubmit={handleSubmit} className="mt-4">

          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
          <input id="email" value={email} type="email" placeholder="email" className="w-full px-4 py-1" 
              onChange={e => setEmail(e.target.value)} />

          <label htmlFor="password" className="block text-sm text-gray-600 mt-4 mb-2">Password</label>
          <input id="password" value={password} type="password" placeholder="password" className="w-full px-4 py-1"
            onChange={e => setPassword(e.target.value)} />
            
          
          <button type="submit" className="bg-blue-800 text-gray-100 py-1 rounded text-center w-full mt-8">Sign In</button>
        </form>
      {/* </>)} */}
    </main>
  )
}

export default SignIn