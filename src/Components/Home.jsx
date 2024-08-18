import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './MovieCard';

function formatWords(input) {
	const words = input.split(' ');
	const formattedWords = words.map((word) => {
		const firstLetter = word.charAt(0).toUpperCase();
		const restOfWord = word.slice(1).toLowerCase();
		return firstLetter + restOfWord;
	});
	return formattedWords.join(' ');
}

export default function Home({ apiKey, sendDataToParent }) {
	const [movie, setMovie] = useState([]);
	const [genres, setGenres] = useState({});
	const [searchTitle, setSearchTitle] = useState('');
	const [section, setSection] = useState('Discover');
	const [isDataSent, setIsDataSent] = useState(false);
	const [dataFetched, setDataFetched] = useState(false);

	useEffect(() => {
		if (isDataSent) {
			setTimeout(() => {
				setIsDataSent(false);
			}, 800); // Auto-Close Popup
		}
	}, [isDataSent]);

	// Discover
	useEffect(() => {
		const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;

		if (!dataFetched) {
			axios
				.get(API_URL)
				.then((response) => {
					console.log('\n --> Movies Data : ', response.data.results); // Log the fetched data
					setMovie(response.data.results);
					setDataFetched(true);
				})
				.catch((error) => console.error(error));
		}
	}, [apiKey, dataFetched]);

	// Genre Fetch
	useEffect(() => {
		const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

		axios
			.get(genresUrl)
			.then((response) => {
				const genresMap = {};
				response.data.genres.forEach((genre) => {
					genresMap[genre.id] = genre.name;
				});
				setGenres(genresMap);
			})
			.catch((error) => console.error(error));
	}, [apiKey]);

	const SearchMovies = async (title) => {
		let formattedTitle = formatWords(title);
		let displayTitle = formattedTitle.replace(/\s/g, '+');

		setSection('Top Rated');

		// Top - Rated
		let Query = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

		if (title) {
			setSection(`Results for ${formattedTitle}`);

			Query = `https://api.themoviedb.org/3/search/movie?query=${displayTitle}&api_key=${apiKey}`;
		}

		axios
			.get(Query)
			.then((response) => {
				console.log('\n --> Searched Movies : ', response.data.results); // Log the fetched data
				setMovie(response.data.results);
			})
			.catch((error) => console.error(error));
	};

	const addToFavorites = (movie) => {
		if (movie) {
			sendDataToParent(movie);
			setIsDataSent(true);
		} else {
			console.log('\n No Favourites Yet');
		}
	};

	return (
		<>
			<h1 className='p-5 m-5 text-4xl font-bold text-center'>Movies Library</h1>

			<div
				className={`fixed top-0 right-0 mt-6 mr-6 bg-blue-500 text-white p-3 rounded shadow-md ${
					isDataSent
						? 'opacity-100 translate-x-0'
						: 'opacity-0 translate-x-full'
				} transform transition-opacity duration-300 ease-in-out`}>
				Added Successfully
			</div>

			<div className='flex items-center justify-center'>
				<input
					type='text'
					value={searchTitle}
					placeholder='Search For Movies'
					onKeyDownCapture={(e) => {
						if (e.key === 'Enter') {
							SearchMovies(searchTitle);
						}
					}}
					onChange={(e) => setSearchTitle(e.target.value)}
					className='w-1/2 px-4 py-2 border rounded-lg md:w-1/3 lg:w-1/4'
				/>

				<button
					alt='Search'
					className='m-2'
					onClick={() => SearchMovies(searchTitle)}>
					Search
				</button>
			</div>

			<h2 className='p-4 pb-0 m-4 mb-0 text-4xl font-bold text-center text-orange-500'>
				{section}
			</h2>

			{movie.map((movie) => (
				<li
					key={movie.id}
					className='list-none'>
					<Movie
						myData={movie}
						genres={genres}
						apiKey={apiKey}
						onClick={addToFavorites}
					/>
				</li>
			))}
		</>
	);
}
