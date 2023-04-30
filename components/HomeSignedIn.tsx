import { signOut } from "next-auth/react"

function handleSignOut() {
  return () => {
    signOut({ redirect: false });
  };
}

const HomeSignedIn = () => {
  return (
    <>
    <div>You are signed in</div>
    <button onClick={handleSignOut()}>Sign out</button>
    </>
  )
}

export default HomeSignedIn