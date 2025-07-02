"use client";

import { z } from "zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function AuthPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	async function onSubmit(data: FormData) {
		setError(null);
		const res = await signIn("credentials", {
			redirect: false,
			email: data.email,
			password: data.password,
		});

		if (res?.error) {
			setError("Invalid credentials");
		} else {
			router.push("/");
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div>
				<label htmlFor="email" className="block font-medium mb-1">
					Email
				</label>
				<input id="email" type="email" {...register("email")} className="w-full p-2 border rounded dark:bg-gray-700" />
				{errors.email && <p className="text-red-600">{errors.email.message}</p>}
			</div>
			<div>
				<label htmlFor="password" className="block font-medium mb-1">
					Password
				</label>
				<input id="password" type="password" {...register("password")} className="w-full p-2 border rounded dark:bg-gray-700" />
				{errors.password && <p className="text-red-600">{errors.password.message}</p>}
			</div>
			{error && <p className="text-red-600">{error}</p>}
			<button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
				Sign In
			</button>
		</form>
	);
}
