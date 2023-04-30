import { signOut } from "next-auth/react"

const HomeSignedIn = () => {
  return (
    <>
    <div>You are signed in</div>
    <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default HomeSignedIn