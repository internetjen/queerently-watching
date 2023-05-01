import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginAccountCreate from 'component/components/LoginAccountCreate'

const GetStarted = () => {
  const { data: session } = useSession();
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