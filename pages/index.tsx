import HomeSignedOut from "component/components/HomeSignedOut";
import HomeSignedIn from "component/components/HomeSignedIn";
import { useSession } from "@supabase/auth-helpers-react"

export default function Home() {
  const  session  = useSession();
  console.log("session here", session);

  // while this sort of works because they share the same route, what I would probably do is make the 
  // "HomeSignedIn" a "/dashboard" and make it a protected route. That way it won't have the weird flashing
  // that happens for an instant when it does the session check after the component has mounted.

  return (
    <>
      <div>
        {session ? 
        <HomeSignedIn /> : <HomeSignedOut /> }
      </div>
    </>
  );
}
