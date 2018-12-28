import { MoviesActionTypes, MoviesActions } from '../actions/movies.actions';
import { Movie } from './../../shared/models/movie';


export interface MoviesState {
    movies: Movie[];
}

export const initialState: MoviesState = {
    movies: [],
};

export function moviesReducer(state = initialState, action: MoviesActions): MoviesState {
    switch (action.type) {
        case MoviesActionTypes.LoadMovies_SUCCESS: {
            return {
                ...state,
                movies: action.movies
            };
        }
        case MoviesActionTypes.AddMovie: {
            return {
                ...state,
                movies: [...state.movies, action.movie]
            };
        }

        case MoviesActionTypes.EditMovie: {
            const { movies } = state;
            const newMoviesState = movies.map(movie => {
                if (movie.imdbID !== action.movie.imdbID) {
                    return movie;
                } else {
                    return action.movie;
                }
            });
            return {
                ...state,
                movies: [...newMoviesState]
            };
        }

        case MoviesActionTypes.DeleteMovie: {
            const { movies } = state;
            const newMoviesState = movies.filter(movie => movie.imdbID !== action.movieId);
            return {
                ...state,
                movies: [...newMoviesState]
            };
        }

        default:
            return state;
    }
}
