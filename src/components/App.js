import AppRouter from "components/Router"
import { useState } from 'react'
import { auth } from 'fBase'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser)
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Switter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
