import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Auth from 'routes/Auth'
import Home from 'routes/Home'
import Profile from 'routes/Profile'
import Navigation from './Navigation'

const AppRouter = ({ isLoggedIn }) => {

  return (
    <Router>
      {!isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          // exact path="/" 프롭스를 전달하면 누이터에 처음 접속했을 때 Home or Auth 컴포넌트를 보여줄 수 있다.
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default AppRouter