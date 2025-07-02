import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 p-6">
			<div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
				<h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Sign In</h1>
				{children}
			</div>
		</div>
	);
}
