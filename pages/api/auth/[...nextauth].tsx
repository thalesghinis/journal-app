import axios from "axios";
import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { findUser } from "../../../services/UserService";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
      },
      providers: [
        CredentialsProvider({
          type: "credentials",
          credentials: {},
          async authorize(credentials, req) {
                const {email, password} = credentials as {
                    email: string;
                    password: string;
                };
                const user = await findUser(email, password)
                return user;
            },
            
       
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    }
};

export default NextAuth(authOptions);