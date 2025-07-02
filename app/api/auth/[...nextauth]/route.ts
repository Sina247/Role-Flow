import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "test@example.com" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const users = [
					{ id: "1", name: "Admin User", email: "admin@example.com", password: "password", role: "admin" },
					{ id: "2", name: "Doctor User", email: "doctor@example.com", password: "password", role: "doctor" },
					{ id: "3", name: "Patient User", email: "patient@example.com", password: "password", role: "patient" },
				];

				const user = users.find((u) => u.email === credentials?.email && u.password === credentials?.password);

				if (user) {
					return user;
				}

				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.role = token.role;
			}
			return session;
		},
	},
	pages: {
		signIn: "/auth",  
	},
	secret: process.env.NEXTAUTH_SECRET || "secret",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
