import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../firebase/auth";

function RegisterModal() {
	const [loading, isLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");

	async function register(ev: FormEvent) {
		ev.preventDefault();
		console.dir({
			email,
			password,
			confirm,
		});

		//TODO: Confirm if passwords are equal

		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			// TODO: handle error properly
			console.error(error);
			alert("Sorry there was an error, please try again later");
		}

		isLoading(true);

		setTimeout(() => {
			isLoading(false);
			document.getElementById("register-modal")?.click();
		}, 5000);
	}
	return (
		<div>
			<input type="checkbox" id="register-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative bg-primary-content">
					<label
						htmlFor="register-modal"
						className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 fill-warning"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
					{/* <h3 className="text-lg font-bold text-primary">Create an account!</h3> */}
					<form onSubmit={register} className="space-y-2">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Email</span>
								<span className="label-text-alt hidden">Invalid Email</span>
							</label>
							<input
								type="email"
								value={email}
								onChange={(ev) => setEmail(ev.currentTarget.value)}
								className="input input-bordered input-primary w-full"
							/>
						</div>

						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								value={password}
								onChange={(ev) => setPassword(ev.currentTarget.value)}
								// placeholder="password here"
								className="input input-bordered input-primary w-full "
							/>
						</div>

						<div className="form-control w-full ">
							<label className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<input
								type="password"
								value={confirm}
								onChange={(ev) => setConfirm(ev.currentTarget.value)}
								// placeholder="password here"
								className="input input-bordered input-primary w-full "
							/>
						</div>

						<div className="divider"></div>

						<button
							type="submit"
							className={`btn btn-ghost text-primary w-full ${
								loading && "loading"
							}`}>
							{!loading && "Register"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterModal;
