import { auth } from 'fBase'

const Profile = () => {
  const onLogOutClick = () => auth.signOut()

  return (
    <button onClick={onLogOutClick}>Log Out</button>
  )
}

export default Profile