import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from 'routes/Auth'
import Home from 'routes/Home'

const AppRouter = ({ isLoggedIn }) => {

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          // exact path="/" 프롭스를 전달하면 누이터에 처음 접속했을 때 Home or Auth 컴포넌트를 보여줄 수 있다.
          <Route exact path="/" element={<Home />}></Route>
        ) : (
          <Route exact path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  )
}

export default AppRouter