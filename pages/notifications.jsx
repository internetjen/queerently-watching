import NotificationsComponent from 'component/components/NotificationsComponent'
import { supabase } from '../client'

export default function Notifications({ user }) {
  console.log(user)
  return (
    <>
      <NotificationsComponent />
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.getUser()
  console.log('USER', user)
  if (!user) {
      return { props: {}, redirect: { destination: '/' } }
  }
  return { props: {user} }
}