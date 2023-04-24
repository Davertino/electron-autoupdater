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

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
