import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { findUserByMailOrCreateUser } from '../../../utils/prismaQueries';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
        // ...add more providers here
    ],
    pages: {
        signIn: '/authentication/login',
        signOut: '/authentication/login',
        
    },
    callbacks: {
        async signIn({ user }) {
            const userFromDb = await findUserByMailOrCreateUser(user);
            console.log(userFromDb);
            if (userFromDb) {
                return `/dashboard/${userFromDb.id}`;
            } else {
                return '/';
            }
        },
        redirect() {
            return '/';
        }
    }
};

export default NextAuth(authOptions);
