import { useSession } from "next-auth/react";

const HomeSignedIn = () => {
  const { data: session } = useSession();

  return (
    <>
    <div>Welcome, {session?.user?.name}! </div>
    </>
  )
}

export default HomeSignedIn