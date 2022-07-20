import { auth } from "../firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";

function LoginScreen() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, isLoading] = useState<boolean>(false);

	async function login(ev: FormEvent): Promise<void> {
		ev.preventDefault();
		isLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			isLoading(false);
		} catch (error) {
			alert("SOmething went wrong while login in");
		}
	}

	return (
		<section className="h-screen flex flex-col p-6 items-center justify-center ">
			{/* Logo */}
			<div className="p-4 bg-primary-content rounded-t-box transition-all hover:scale-125">
				<h1 className="font-black text-xl">
					<span className="text-primary">Frienz</span>Player
					<span className="text-primary">!</span>
				</h1>
			</div>

			<form
				onSubmit={login}
				className="self-center space-y-6 p-8 bg-primary-content rounded-box shadow">
				<div className="form-control w-96 max-w-xs">
					<label className="label">
						<span className="label-text">Email</span>
						<span className="label-text-alt hidden">Invalid Email</span>
					</label>
					<input
						type="email"
						value={email}
						onChange={(ev): void => setEmail(ev.currentTarget.value)}
						// placeholder="ex.:jane@doe.mail"
						className="input input-bordered input-primary w-full max-w-xs"
					/>
				</div>

				<div className="form-control w-96 max-w-xs">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						value={password}
						onChange={(ev): void => setPassword(ev.currentTarget.value)}
						// placeholder="password here"
						className="input input-bordered input-primary w-full max-w-xs"
					/>
				</div>

				<div className="divider"></div>

				<div className="text-sm text-right text-primary flex justify-between">
					<button>Forgot Password?</button>

					<label htmlFor="register-modal" className="cursor-pointer">
						{"Don't have an account?"}
					</label>
				</div>

				<button
					type="submit"
					className={`btn btn-primary w-full ${loading && "loading"}`}>
					{!loading && "Login"}
				</button>
			</form>

			<RegisterModal />
		</section>
	);
}

export default LoginScreen;
