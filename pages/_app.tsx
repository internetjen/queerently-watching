import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import "component/styles/globals.css";
import Footer from 'component/components/footer';

// from what I understand we need to do some more stuff here in order to actually handle the authenticated state
// I think like this: https://github.com/dabit3/supabase-nextjs-auth/blob/main/pages/_app.js
// https://www.youtube.com/watch?v=oXWImFqsQF4
// otherwise the route auth guarding won't work. I have it set up for the notifications page but it's redirecting
// every time because it doesn't recognize the authenticated state. I think we might just be missing the piece in here.



export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
    

  )
}