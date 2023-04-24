
import type { NextPage } from "next"
import Head from "next/head"


import { useRouter } from "next/router"

const Home: NextPage = () => {

  const router = useRouter()
 return(

<div>
<nav className=" bg-gray-100 pb-1.5 flex ">
  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex gap-1 items-center justify-center font-medium rounded-lg text-sm px-5 mr-2 mb-2 mt-3 ml-5 w-56 h-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  onClick={() => {
    router.push("/ezmail")
  }}
  >
  
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"/></svg>

  <p>Terug</p>
  </button>


  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex gap-1 items-center justify-center text-center font-medium rounded-lg text-sm float-right ml-auto px-5 mr-2 mb-2 mt-3 w-56 h-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>
  Instellingen
  </button>



 </nav> 

 <h1 className="font-bold text-lg ml-5 mt-3">Michiel van der Schaaf</h1>
 <p className="text-sm text-slate-400 ml-5">michielvanderschaafzakelijk@gmail.com</p>

<hr className="mt-5" />

<div className="flex flex-col float-right space-y-4 mr-10 ml-20">
 <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg  mr-2 flex items-center justify-center gap-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 float-right w-96 h-20 mt-16">
 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m13 8l-7 6l7 7"/><path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998"/></g></svg>
  Antwoorden</button>

 <button type="button" className="text-white bg-[#1A4093] hover:bg-[#112e6b] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg mr-2  dark:bg-[#1A4093] dark:hover:bg-[#112e6b] focus:outline-none dark:focus:ring-[[#0c2456] flex items-center justify-center gap-1 float-right w-96 h-20 mt-16">
 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g transform="translate(48 0) scale(-1 1)"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m13 8l-7 6l7 7"/><path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998"/></g></g></svg>
  Doorsturen</button>

 <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-lg mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 float-right w-96 h-20 mt-16">Lees volgende mail</button>

 <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-lg  mr-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 float-right w-96 h-20 mt-16">Verwijderen</button>
</div>

 <h2 className="font-bold text-3xl mt-5 ml-5 break-after-auto">Bod op fiets
 
 <p className="font-normal text-sm mt-8">Beste Djalla,
<br />
<br />
Ik wil graag mijn frustratie en haat voor PHP delen. Hoewel ik begrijp dat PHP nog steeds veel wordt gebruikt voor het bouwen van websites en webapplicaties, ervaar ik het als een van de meest frustrerende talen om mee te werken.
<br />
<br />
Ten eerste vind ik de syntax van PHP onduidelijk en inconsistent. Er zijn veel verschillende manieren om dezelfde code te schrijven, wat kan leiden tot verwarring en frustratie bij het debuggen.
<br />
<br />
Daarnaast vind ik de documentatie van PHP vaak verouderd en onnauwkeurig. Het kan moeilijk zijn om de juiste informatie te vinden en te begrijpen welke functies en methoden beschikbaar zijn.
<br />
<br />
Ook de beveiliging van PHP is zwak. Er zijn veel kwetsbaarheden bekend in PHP-applicaties en het is vaak moeilijk om deze te vermijden.
<br />
<br />
Kortom, hoewel PHP nog steeds een veelgebruikte taal is, is het voor mij persoonlijk een van de minst favoriete talen om mee te werken.
<br />
<br />
Met vriendelijke groet, 
<br />
<br />
Michiel van der Schaaf</p>
 
 
 </h2>

 <hr className="mt-8" />




</div>

 )
}

export default Home
