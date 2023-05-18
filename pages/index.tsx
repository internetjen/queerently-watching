import HomeSignedOut from "component/components/HomeSignedOut";
import HomeSignedIn from "component/components/HomeSignedIn";
import { useSession } from "@supabase/auth-helpers-react"

export default function Home() {
  const  session  = useSession();
  console.log("session here", session);

  return (
    <>
      <div>
        {session ? 
        <HomeSignedIn /> : <HomeSignedOut /> }
      </div>
    </>
  );
}
