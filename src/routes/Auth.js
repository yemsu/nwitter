import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "fBase"

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isNewAccount, setIsNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onChange = (e) => {
    const { target: { name, value } } = e
    if(name === 'email') {
      setEmail(value)
    } else if(name === 'password') {
      setPassword(value)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault() // submit 이벤트 새로고침하는 이슈 있어 사용
    try {
      let data
      if (isNewAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password)
      } else {
        data = await signInWithEmailAndPassword(email, password)
      }
      console.log(data)
    } catch (error) {
      setError(error.message)
    }
  }

  const toggleAccount = () => setIsNewAccount((prev) => !prev)

  const onSocialClick = async (e) => {
    const { target: { name } } = e
    let provider

    if (name === 'google') {
      provider = new GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new GithubAuthProvider()
    }
    console.log(provider)
    const data = await signInWithPopup(auth, provider)
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value={isNewAccount ? 'Create Account' : 'Log In'}
        />
        <p onClick={toggleAccount}>
          {isNewAccount ? 'Sign In' : 'Created Account'}
        </p>
        {error && <p>{error}</p>}
      </form>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button onClick={onSocialClick} name="github">Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth