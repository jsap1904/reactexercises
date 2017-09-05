import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBy9RgEsX5OCkn4Pz0Cb-eBiLJLAUptaGE';



// Create new component that produces some html

const App = function() {
	return (
		<div>
			<SearchBar />
		
	</div>
	);
}

// Take this compenent's generated HTML and display on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));