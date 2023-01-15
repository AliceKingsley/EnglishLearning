import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Home from './pages/Home';
import Game from './pages/Game';
import NoMatch from './pages/NoMatch';

import Header from './components/Header/Header';

import {MyContextProvider} from './context/WordsContext';

import './App.css';

function App() {

	return (
		<MyContextProvider>
			<Router>
				<div className="App">
					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/game" element={<Game />} />
						<Route path="*" element={<NoMatch />} />
					</Routes>
				</div>
			</Router>
		</MyContextProvider>	
);
}

export default App;