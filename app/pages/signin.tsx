import React, {FormEventHandler, FunctionComponent, useState} from "react"
import router, { useRouter } from 'next/router';

const SignIn:FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit:FormEventHandler = async (e:Event) => {
    e.preventDefault()

    if (email === '' || password === '') {
      alert("must fill out form");
      return;
    }

    console.log(email, password);
    router.push('/');
  }

  return (
    <main className="">
      {/* {status == 'unauthenticated' && 
      (<>  */}
        <h1 className="">Sign In</h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input id="email" value={email} type="email" placeholder="email" 
              onChange={e => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input id="password" value={password} type="password" placeholder="password" 
            onChange={e => setPassword(e.target.value)} />
            
          
          <button type="submit" className="">Sign In</button>
        </form>
      {/* </>)} */}
    </main>
  )
}

export default SignIn