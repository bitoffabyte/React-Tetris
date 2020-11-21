import React from "react";
import Tetris from "./conmponents/Tetris";
import "./App.css";
const App = () => (
	<div className='App'>
		<canvas id='myCanvas' resize></canvas>

		<Tetris />

		<h1>Plsease Use a bigger screen</h1>
	</div>
);

export default App;
