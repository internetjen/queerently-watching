import HomeSignedOut from "component/components/HomeSignedOut";
import { useRouter } from "next/router";
import { useSessionContext } from '@supabase/auth-helpers-react';

export default function Home() {
  const router = useRouter();
  const { isLoading, session, error } = useSessionContext();


  // make this a cute loading component if ya wanna 😊
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (session && isLoading == false) {
    router.push("/dashboard");
    return null;
  }

  return (
    <>
      <HomeSignedOut />
    </>
  )
}
