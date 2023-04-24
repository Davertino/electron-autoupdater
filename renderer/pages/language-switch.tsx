import { invoke } from "@tauri-apps/api/tauri"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import { Card } from "@/components/Card"
import { CardButton } from "@/components/CardButton"
import { useGlobalShortcut } from "@/hooks/tauri/shortcuts"
import { useRouter } from "next/router"

const LanguageSwitch: NextPage = () => {
  const [buttonDesc, setButtonDesc] = useState<string>(
    "Waiting to be clicked. This calls 'on_button_clicked' from Rust.",
  )
  const onButtonClick = () => {
    invoke<string>("on_button_clicked")
      .then((value) => {
        setButtonDesc(value)
      })
      .catch(() => setButtonDesc("Failed to invoke Rust command 'on_button_clicked'"))
  }

  useGlobalShortcut("CommandOrControl+P", () => {
    console.log("Ctrl+P was pressed!")
  })
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center py-8">
        <h1 className="m-0 text-center text-6xl">
          {router.locale === "nl" ? "Welkom op deze app" : "Welcome on this app"}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline focus:underline active:underline"
          ></a>
        </h1>
        <button
          onClick={() => {
            router.push("/", "/", { locale: router.locale === "en" ? "nl" : "en" })
          }}
          className="my-10 rounded-full bg-sky-500 p-4 text-white"
        >
          {router.locale === "nl" ? "English" : "Nederlands"}
        </button>
      </main>
      <footer className="flex flex-1 flex-grow-0 items-center justify-center border-t border-gray-200 py-4">
        <div>
          <a
            href="https://tauri.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-grow items-center justify-center p-4"
          >
            Powered by{" "}
            <span className="ml-2 h-6">
              <Image
                src="/tauri_logo_light.svg"
                alt="Vercel Logo"
                height={24}
                width={78}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default LanguageSwitch
