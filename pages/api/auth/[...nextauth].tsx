import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
      },
      providers: [
        CredentialsProvider({
          type: "credentials",
          credentials: {},
          authorize(credentials, req) {
                const {email, password} = credentials as {
                    email: string;
                    password: string;
                };
                // lógica do login
                if(email !== 'thales@gmail.com' || password !=='123') {

                    throw new Error('Credencias inválidas')
                }

              // tudo ok  
              return {id: '1234', name:  'Thales', emails: 'thales@gmail.com'}
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    }
};

export default NextAuth(authOptions);