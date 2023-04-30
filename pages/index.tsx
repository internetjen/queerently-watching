import HomeSignedOut from "component/components/HomeSignedOut";
import HomeSignedIn from "component/components/HomeSignedIn";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div>
        {session ? 
        <HomeSignedIn /> : <HomeSignedOut /> }
      </div>
    </>
  );
}
