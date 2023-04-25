import Select, { Option } from "@/components/Select";
import { Dialog, Transition } from "@headlessui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler, Fragment, useState } from "react";

const Home: NextPage = () => {
	let [isOpen, setIsOpen] = useState(false);

	const options: Option[] = [
		{ value: "IMAP", label: "IMAP" },
		{ value: "POP3", label: "POP3" },
	];

	const [selected, setSelected] = useState<Option>(options[0]);

	const [mailServerData, setMailServerData] = useState({
		email: "",
		username: "",
		password: "",
		accountType: selected.value,
		incomingServer: "",
		outgoingServer: "",
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		console.log("hello submit");
	};

	return (
		<div>
			<div>
				<div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
					<a className="bg-white-border z-10 block max-w-sm rounded-lg border-gray-200 bg-white p-6 shadow dark:border-gray-700">
						<h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">
							Start with adding a mail account
						</h4>
						<p className="mt-4 pb-5 font-normal text-gray-700 dark:text-gray-400">
							You can add more accounts after you have set
							everything up.
						</p>
						<a href="mails">mails</a>
						<button
							type="button"
							className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-60 items-center justify-center rounded-lg bg-[#f2f2f2] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:text-blue-900"
						>
							<svg
								className="h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="google"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
							>
								<path
									fill="currentColor"
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								></path>
							</svg>
							<span className="mx-auto">Sign in with Google</span>
						</button>
						<br></br>
						<button
							type="button"
							className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-60 items-center justify-center rounded-lg bg-[#f2f2f2] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:text-blue-900"
						>
							<svg
								className="h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="microsoft"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"
								/>
							</svg>
							<span className="mx-auto">
								Sign in with Microsoft
							</span>
						</button>
						<br></br>
						<button
							type="button"
							className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-60 items-center justify-center rounded-lg bg-[#f2f2f2] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:text-blue-900"
						>
							<svg
								className="h-5 w-5"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="apple"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path
									fill="currentColor"
									d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
								></path>
							</svg>
							<span className="mx-auto">Sign in with Apple</span>
						</button>
						<br></br>
						<button
							type="button"
							className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-60 items-center justify-center rounded-lg bg-[#f2f2f2] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:text-blue-900"
						>
							<svg
								className="h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="yahoo"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M223.69,141.06,167,284.23,111,141.06H14.93L120.76,390.19,82.19,480h94.17L317.27,141.06Zm105.4,135.79a58.22,58.22,0,1,0,58.22,58.22A58.22,58.22,0,0,0,329.09,276.85ZM394.65,32l-93,223.47H406.44L499.07,32Z"
								/>
							</svg>

							<span className="mx-auto">Sign in with Yahoo!</span>
						</button>
						<br></br>
						<button
							type="button"
							className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-60 items-center justify-center rounded-lg bg-[#f2f2f2] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:text-blue-900"
						>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="yahoo"
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>AOL</title>
								<path
									fill="currentColor"
									d="M13.07 9.334c2.526 0 3.74 1.997 3.74 3.706 0 1.709-1.214 3.706-3.74 3.706-2.527 0-3.74-1.997-3.74-3.706 0-1.709 1.213-3.706 3.74-3.706m0 5.465c.9 0 1.663-.741 1.663-1.759 0-1.018-.763-1.759-1.663-1.759s-1.664.741-1.664 1.759c0 1.018.764 1.76 1.664 1.76m4.913-7.546h2.104v9.298h-2.104zm4.618 6.567a1.398 1.398 0 1 0 .002 2.796 1.398 1.398 0 0 0-.002-2.796M5.536 7.254H3.662L0 16.55h2.482l.49-1.343h3.23l.452 1.343H9.16zm-1.91 6.068L4.6 10.08l.974 3.242H3.626z"
								/>
							</svg>
							<span className="mx-auto">Sign in with Aol.</span>
						</button>
						<br></br>
						<button
							onClick={() => setIsOpen(true)}
							type="button"
							className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex w-60 items-center justify-center rounded-lg bg-[#f2f2f2] px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:text-blue-900"
						>
							<svg
								className="h-4 w-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="apple"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
								/>
							</svg>
							<span className="mx-auto">
								Other mail account...
							</span>
						</button>
					</a>
				</div>
			</div>

			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-20 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
									<div>
										<div className="">
											<Dialog.Title className="mb-8 text-base font-semibold leading-6 text-gray-900">
												Add your mail account
											</Dialog.Title>

											<form
												onSubmit={handleSubmit}
												className="space-y-6"
											>
												<div>
													<label
														htmlFor="email"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														E-mailadress
													</label>
													<input
														type="email"
														id="email"
														className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														onChange={({
															target,
														}) =>
															setMailServerData({
																...mailServerData,
																email: target.value,
															})
														}
													/>
												</div>

												<div>
													<label
														htmlFor="username"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Username
													</label>
													<input
														type="text"
														id="username"
														className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														onChange={({
															target,
														}) =>
															setMailServerData({
																...mailServerData,
																username:
																	target.value,
															})
														}
													/>
												</div>

												<div>
													<label
														htmlFor="username"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Password
													</label>
													<input
														type="password"
														id="password"
														className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														onChange={({
															target,
														}) =>
															setMailServerData({
																...mailServerData,
																password:
																	target.value,
															})
														}
													/>
												</div>

												<Select
													label="Account type"
													options={options}
													selected={selected}
													setSelected={setSelected}
												/>

												<div>
													<label
														htmlFor="username"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Incoming Mail Server
													</label>
													<input
														type="text"
														id="incoming-server"
														className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														onChange={({
															target,
														}) =>
															setMailServerData({
																...mailServerData,
																incomingServer:
																	target.value,
															})
														}
													/>
												</div>

												<div>
													<label
														htmlFor="username"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Outgoing Mail Server
													</label>
													<input
														type="text"
														id="outgoing-server"
														className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														onChange={({
															target,
														}) =>
															setMailServerData({
																...mailServerData,
																outgoingServer:
																	target.value,
															})
														}
													/>
												</div>

												<div>
													<button
														type="submit"
														className="w-full rounded bg-indigo-600 px-2 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Submit
													</button>
												</div>
											</form>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default Home;
