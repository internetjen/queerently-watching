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
    </>
  )
}

export default HomeSignedIn