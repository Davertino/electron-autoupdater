import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

const Home: NextPage = () => {
	const [mailServerData, setMailServerData] = useState({
		email: "",
		username: "",
		password: "",
		accountType: "IMAP",
		incomingServer: "",
		outgoingServer: "",
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		console.log("submitting");
	};

	const router = useRouter();
	return (
		<div>
			<form className="w-40" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label htmlFor="email">E-mailadress</label>
					<input
						type="email"
						id="email"
						className="border"
						onChange={({ target }) =>
							setMailServerData({
								...mailServerData,
								email: target.value,
							})
						}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						className="border"
						onChange={({ target }) =>
							setMailServerData({
								...mailServerData,
								username: target.value,
							})
						}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						className="border"
						onChange={({ target }) =>
							setMailServerData({
								...mailServerData,
								password: target.value,
							})
						}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="account-type">Account type</label>
					<select
						disabled
						id="account-type"
						onChange={({ target }) =>
							setMailServerData({
								...mailServerData,
								accountType: target.value,
							})
						}
					>
						<option value="IMAP">IMAP</option>
						<option value="POP">POP</option>
					</select>
				</div>

				<div className="flex flex-col">
					<label htmlFor="incoming-server">
						Incoming Mail Server
					</label>
					<input
						type="text"
						id="incoming-server"
						className="border"
						onChange={({ target }) =>
							setMailServerData({
								...mailServerData,
								incomingServer: target.value,
							})
						}
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="outgoing-server">
						Outgoing Mail Server
					</label>
					<input
						type="text"
						id="outgoing-server"
						className="border"
						onChange={({ target }) =>
							setMailServerData({
								...mailServerData,
								outgoingServer: target.value,
							})
						}
					/>
				</div>

				<button type="submit" className="mt-6 w-full border p-2">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Home;
