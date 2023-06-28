import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import LoginAccountCreate from 'component/components/LoginAccountCreate'

const GetStarted = () => {
  const session  = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
    return null;
  }

  return (
    <>
      <LoginAccountCreate />
    </>
  )
}

export default GetStarted;
