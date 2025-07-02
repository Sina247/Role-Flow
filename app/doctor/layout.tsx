import { ReactNode } from "react";

export default function DoctorLayout({ children }: { children: ReactNode }) {
	return (
		<section className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<header className="mb-6">
				<h2 className="text-3xl font-bold">Doctor Dashboard</h2>
			</header>
			<main>{children}</main>
		</section>
	);
}
