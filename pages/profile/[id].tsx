import { useSession } from "@supabase/auth-helpers-react";

const Profile = () => {
  const session  = useSession();

  if (session) {
  return (
    <>
    <div>Profile! </div>
    </>
  )
  }

  return ( 
    <>
    <div>Not logged in</div>
    </>
    )
}


export default Profile