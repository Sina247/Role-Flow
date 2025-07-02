import Link from "next/link";

export default function GuestHomePage() {
	return (
		<section className="max-w-3xl mx-auto text-center min-h-screen flex flex-col justify-center items-center">
			<h2 className="text-4xl font-bold mb-4">Welcome to Our Public Site</h2>
			<p className="mb-6">
				This is the public section for Guests. Please{" "}
				<Link href="/auth" className="text-blue-600">
					login
				</Link>{" "}
				to access your account.
			</p>
		</section>
	);
}
