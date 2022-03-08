// const API_KEY = process.env.API_KEY;
const API_KEY = "798e7cb1b6ea4641c7b98043a33d8a15"

export default {
	trending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=US`,
	},
	"top-rated": {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=US`,
	},
	"action-movies": {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	"comedy-movies": {
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	"horror-movies": {
		title: "Horror",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	"romance-movies": {
		title: "Romance",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	"mystery-movies": {
		title: "Mystery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	"scifi-movies": {
		title: "Sci-Fi",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	"western-movies": {
		title: "Western",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	"animation-movies": {
		title: "Animation",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	"tv-movie": {
		title: "TV Movie",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};
