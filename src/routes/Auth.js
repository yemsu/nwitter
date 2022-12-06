import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
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
        {error && <p>{error}</p>}
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth