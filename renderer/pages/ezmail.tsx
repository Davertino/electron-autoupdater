import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import electron from "electron";

interface Email {
  headers: {
    from: string;
    to: string;
    subject: string;
    body: string;
    seen: boolean;
  };
}

const ipcRenderer = electron.ipcRenderer || false;
const Home: NextPage = () => {
  const router = useRouter();

  const [emails, setEmails] = useState<Email[]>();
  useEffect(() => {
    if (ipcRenderer) {
      ipcRenderer.send("fetchEmails");
      ipcRenderer.on("fetchEmails", (event, arg) => {
        setEmails(arg);
        console.log(arg);
      });
    }
  }, []);

  return (
    <div>
      <nav className=" bg-gray-100 pb-1.5 flex">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex gap-2 items-center justify-center font-medium rounded-lg text-sm px-5 mr-2 mb-2 mt-3 ml-5 w-56 h-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894l-13-6.5Z"
            />
          </svg>

          <p>Nieuw bericht</p>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex gap-1 items-center justify-center text-center font-medium rounded-lg text-sm float-right ml-auto px-5 mr-2 mb-2 mt-3 w-56 h-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
            />
          </svg>
          Instellingen
        </button>
      </nav>

      {emails
        ? emails?.map((email, idx) => (
            <button
              type="button"
              className="text-gray-900 bg-white border border-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 space-y-2 font-medium text-left tracking-normal w-full h-32 px-5 py-2.5 mr-2 dark:bg-white dark:text-black dark:border-gray-200 dark:hover:bg-gray-300 dark:hover:border-gray-300 dark:focus:ring-gray-400
							even:bg-gray-200"
              onClick={() => {
                router.push("/ezmailread");
              }}
              key={idx}
            >
              <h1 className="text-2xl font-bold ml-16">
                {email?.headers.from[0]}
              </h1>
              <p className="ml-16 text-xl">{email?.headers.subject[0]}</p>
              <p className="text-sm ml-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                justo quis augue fringilla malesuada vel eu nulla.
              </p>
            </button>
          ))
        : null}
    </div>
  );
};

export default Home;
