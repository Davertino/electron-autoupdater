import React, { useState } from "react";
import electron from "electron";
const ipcRenderer = electron.ipcRenderer || false;

export default function Database() {
	const [db, setDb] = useState(null);

	const placeItemDb = () => {
		if (ipcRenderer) {
			ipcRenderer.send("placeItemDb", { name: "test" });
		}
	};

	const getItemDb = () => {
		if (ipcRenderer) {
			ipcRenderer.send("getItemDb", { name: "test" });
			ipcRenderer.on("getItemDb", (event, arg) => {
				console.log(arg);
				console.log(event);
				setDb(arg);
			});
		}
	};

	return (
		<div>
			<h1>Database</h1>
			<button onClick={placeItemDb}>Place Item</button>
			<button onClick={getItemDb}>Get Item</button>
			{db && <div>{JSON.stringify(db)}</div>}
		</div>
	);
}
