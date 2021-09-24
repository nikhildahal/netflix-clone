import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchToprated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Documantaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
