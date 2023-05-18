import { useSession } from "@supabase/auth-helpers-react";

const HomeSignedIn = () => {
  const session  = useSession();

  return (
    <>
    <div>Welcome! </div>
    </>
  )
}

export default HomeSignedIn