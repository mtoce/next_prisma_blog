import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';
import type { NextAuthOptions } from 'next-auth'

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

// callbacks: {
//     async jwt({ token, account, profile }) {
//       // Persist the OAuth access_token and or the user id to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token
//         token.id = profile.id
//       }
//       return token
//     }
//   },