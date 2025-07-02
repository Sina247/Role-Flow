import { JWT } from "next-auth/jwt";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
	id: string;
	name: string;
	email: string;
	role: "admin" | "doctor" | "patient";
}

const users: User[] = [
	{ id: "1", name: "Admin User", email: "admin@example.com", role: "admin" },
	{ id: "2", name: "Doctor User", email: "doctor@example.com", role: "doctor" },
	{ id: "3", name: "Patient User", email: "patient@example.com", role: "patient" },
];

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "email@example.com" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = users.find((u) => u.email === credentials?.email);
				if (user && credentials?.password === "password") {
					return user;
				}
				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }): Promise<JWT> {
			if (user) {
				(token as any).role = (user as User).role;
			}
			return token;
		},
		async session({ session, token }): Promise<Session> {
			if (session.user) {
				(session.user as any).role = (token as any).role;
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth",
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
