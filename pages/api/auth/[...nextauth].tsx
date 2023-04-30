// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../lib/mongodb";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),

//   callbacks: {
//     async signIn({ user, account, profile }) {
//       if (account.provider === 'google') {
//         const client = await clientPromise;
//         const db = client.db();
//         const existingUser = await db.collection('users').findOne({ email: user.email });

//         if (!existingUser) {
//           const newUser = {
//             ...user,
//             favorites: [],
//           };

//           await db.collection('users').insertOne(newUser);
//         }
//       }

//       return true;
//     },
//     session: async ({ session, token }) => {
//       if (session?.user) {
//         session.user.id = token.sub;
//       }
//       return session;
//     },
//   },
//   session: {
//     strategy: 'jwt',
//   },
// })

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);
