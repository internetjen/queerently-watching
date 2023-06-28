import { useSession } from "@supabase/auth-helpers-react";

const Dashboard = () => {
  const session  = useSession();

  if (session) {
  return (
    <>
    <div>Welcome! </div>
    </>
  )
  }

  return ( 
    <>
    <div>Not logged in</div>
    </>
    )
}


export default Dashboard