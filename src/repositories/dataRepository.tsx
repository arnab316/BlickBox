// src/repositories/dataRepository.ts
interface DataRepository {
    getAllMovies: () => Promise<Movie[]>;
    getMovieById: (id: string) => Promise<Movie>;
    createMovie: (data: Movie) => Promise<Movie>;
    updateMovie: (id: string, data: Movie) => Promise<Movie>;
    deleteMovie: (id: string) => Promise<void>;
    getUserProfile: (userId: string) => Promise<User>;
    getWatchlist: (userId: string) => Promise<Movie[]>;
    addToWatchlist: (userId: string, movieId: string) => Promise<void>;
    getRecommendations: (userId: string) => Promise<Movie[]>;
    getReviewsForMovie: (movieId: string) => Promise<Review[]>;
    addReview: (movieId: string, reviewData: Review) => Promise<Review>;
}

const DataRepository = (apiAdapter: ApiAdapter): DataRepository => ({
    getAllMovies: async () => {
        return await apiAdapter.get<Movie[]>('/movies');
    },

    getMovieById: async (id) => {
        return await apiAdapter.get<Movie>(`/movies/${id}`);
    },

    createMovie: async (data) => {
        return await apiAdapter.post<Movie>('/movies', data);
    },

    updateMovie: async (id, data) => {
        return await apiAdapter.put<Movie>(`/movies/${id}`, data);
    },

    deleteMovie: async (id) => {
        return await apiAdapter.delete<void>(`/movies/${id}`);
    },

    getUserProfile: async (userId) => {
        return await apiAdapter.get<User>(`/users/${userId}`);
    },

    getWatchlist: async (userId) => {
        return await apiAdapter.get<Movie[]>(`/users/${userId}/watchlist`);
    },

    addToWatchlist: async (userId, movieId) => {
        return await apiAdapter.post<void>(`/users/${userId}/watchlist`, { movieId });
    },

    getRecommendations: async (userId) => {
        return await apiAdapter.get<Movie[]>(`/users/${userId}/recommendations`);
    },

    getReviewsForMovie: async (movieId) => {
        return await apiAdapter.get<Review[]>(`/movies/${movieId}/reviews`);
    },

    addReview: async (movieId, reviewData) => {
        return await apiAdapter.post<Review>(`/movies/${movieId}/reviews`, reviewData);
    },
});

export default DataRepository;
