import { useState } from "react"

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isNewAccount, setIsNewAccount] = useState(true)

  const onChange = (e) => {
    const { target: { name, value } } = e
    if(name === 'email') {
      setEmail(value)
    } else if(name === 'password') {
      setPassword(value)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault() // submit 이벤트 새로고침하는 이슈 있어 사용
    if (isNewAccount) {

    } else {
      
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
          value="Log In"
          value={isNewAccount ? 'Create Account' : 'Log In'}
        />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth