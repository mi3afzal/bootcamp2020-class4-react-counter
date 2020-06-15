import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
	let [theme, setTheme] = useState(true);

	return (
		<div className="App">
			<header className={`App-header ${ theme ? 'darkTheme' : 'lightTheme'}`}>
				<Counter />
				<br/><br/>
				<button onClick={() => setTheme(!theme)}>Apply { !theme ? 'Dark' : 'Light'} Theme</button>
				<h3>Counter App with Theme switch</h3>
				<p>Auto Deployment on Surge through Github actions with custome YAML config.</p>

				<p>
					<span>Developed in React with Love by </span> 
					<a
					className="App-link"
					href="https://mi3afzal.com"
					target="_blank"
					rel="noopener noreferrer"
					>
					Muhammad Irfan Afzal
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
