import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../utils/api";
import tmdbAPI from "../utils/httpRequest";

// ----------Call API Home Page--------------
export const fetchMovieTrendingWeek = createAsyncThunk(
  "movies/fetchMovieTrendingWeek",
  async () => {
    const res = await tmdbAPI.get(`/trending/movie/week`, {
      params: {
        api_key: APIKey,
        language: "en-US",
        page: 1,
      },
    });
    return res.data.results;
  },
);

export const fetchMovieUpcoming = createAsyncThunk(
  "movies/fetchMovieUpcoming",
  async () => {
    const res = await tmdbAPI.get(`/movie/upcoming`, {
      params: {
        api_key: APIKey,
        language: "en-US",
        page: 1,
      },
    });
    return res.data.results;
  },
);

export const fetchMovieTopRated = createAsyncThunk(
  "movies/fetchMovieTopRated",
  async () => {
    const res = await tmdbAPI.get(`/movie/top_rated`, {
      params: {
        api_key: APIKey,
        language: "en-US",
        page: 1,
      },
    });
    return res.data.results;
  },
);

export const fetchMoviePopular = createAsyncThunk(
  "movies/fetchMoviePopular",
  async () => {
    const res = await tmdbAPI.get(`/movie/popular`, {
      params: {
        api_key: APIKey,
        language: "en-US",
        page: 1,
      },
    });
    return res.data.results;
  },
);

// --------------Call search movie API-----------
export const fetchSearchMovies = createAsyncThunk(
  "movies/fechSearchMovies",
  async (searchValue) => {
    const res = await tmdbAPI.get("/search/movie", {
      params: {
        api_key: APIKey,
        page: 1,
        query: searchValue,
      },
    });
    return res.data.results;
  },
);

export const fetchSearchPage = createAsyncThunk(
  "movies/fetchSearchPage",
  async (searchValue) => {
    const res = await tmdbAPI.get("/search/movie", {
      params: {
        api_key: APIKey,
        page: 1,
        query: searchValue,
      },
    });
    return res.data.results;
  },
);

// --------------Call MovieGenrePage--------------
export const fetchGenreList = createAsyncThunk(
  "movies/fetchGenreList", //action.type
  async () => {
    const res = await tmdbAPI.get(`/genre/movie/list`, {
      params: {
        api_key: APIKey,
        language: "en-US",
      },
    });
    return res.data.genres;
  },
);

export const fetchMovieListGenre = createAsyncThunk(
  "movies/fetchMovieListGenre",
  async ({ key, id }) => {
    const res = await tmdbAPI.get(`/discover/movie`, {
      params: {
        api_key: APIKey,
        [key]: id,
        page: 1,
      },
    });
    return res.data.results;
  },
);

export const fetchMoreMovieGenre = createAsyncThunk(
  "movies/fetchMoreMovieGenre",
  async ({ key, id, currentPage }) => {
    const res = await tmdbAPI.get(`/discover/movie`, {
      params: {
        api_key: APIKey,
        [key]: id,
        page: currentPage,
      },
    });
    return res.data.results;
  },
);

export const fetchLoadMoreMovie = createAsyncThunk(
  "movies/fetchLoadMoreMovie",
  async ({ path, currentPage }) => {
    const res = await tmdbAPI.get(`/movie/${path}`, {
      params: {
        api_key: APIKey,
        language: "en-US",
        page: currentPage,
      },
    });
    return res.data.results;
  },
);

// ---------Call Movie Detail Page-------------
export const fetchMovieDetail = createAsyncThunk(
  "movies/fetchMovieDetail",
  async (id) => {
    const res = await tmdbAPI.get(`/movie/${id}`, {
      params: {
        api_key: APIKey,
        append_to_response: "videos,casts,releases",
      },
    });
    return res.data;
  },
);

export const fetchMovieSimilar = createAsyncThunk(
  "movies/fetchMovieSimilar", //prefix of action
  async (id) => {
    const res = await tmdbAPI.get(`/movie/${id}/similar`, {
      params: {
        api_key: APIKey,
        language: "en-US",
        page: 1,
      },
    });
    return res.data.results;
  },
); //return thunk action

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    loadingPage: "",
    loadingBtnLoadMore: false,
    statusLoading: false,
    showTippy: false,
    genreChoosing: "",
    showSideBar: false,
    searchResults: [],
    searchPage: [],
    genreList: [],
    movieList: [],
    movieTrending: [],
    movieUpcoming: [],
    movieTopRated: [],
    moviePopular: [],
    movieDetail: [],
    movieSimilar: [],
  },
  reducers: {
    //standard reducers logic
    //auto gen an action type per reducer //{ type: 'name/nameaction'}
    chooseGenre: (state, action) => {
      state.genreChoosing = action.payload; //mutation due to Immer Lib
    },
    setShowSideBar: (state, action) => {
      state.showSideBar = action.payload;
    },
    removeSearchResults: (state) => {
      state.searchResults = [];
      state.showTippy = false;
    },
    removeSearchPage: (state) => {
      state.searchPage = [];
    },
    removeMovieList: (state) => {
      state.movieList = [];
    },
    removeMovieDetail: (state) => {
      state.movieDetail = [];
    },
    removeMovieSimilar: (state) => {
      state.movieSimilar = [];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchMovieTrendingWeek.pending, (state) => {
        state.loadingPage = false;
      })
      .addCase(fetchMovieTrendingWeek.fulfilled, (state, action) => {
        state.movieTrending = action.payload;
        state.loadingPage = true;
      })
      .addCase(fetchMovieUpcoming.fulfilled, (state, action) => {
        state.movieUpcoming = action.payload;
      })
      .addCase(fetchMovieTopRated.fulfilled, (state, action) => {
        state.movieTopRated = action.payload;
      })
      .addCase(fetchMoviePopular.fulfilled, (state, action) => {
        state.moviePopular = action.payload;
      })
      .addCase(fetchSearchMovies.pending, (state) => {
        state.statusLoading = true;
        state.showTippy = false;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.statusLoading = false;
        state.showTippy = true;
      })
      .addCase(fetchSearchPage.fulfilled, (state, action) => {
        state.searchPage = action.payload;
      })
      .addCase(fetchGenreList.fulfilled, (state, action) => {
        state.genreList = action.payload;
      })
      .addCase(fetchMovieListGenre.fulfilled, (state, action) => {
        state.movieList = action.payload;
      })
      .addCase(fetchMoreMovieGenre.pending, (state) => {
        state.loadingBtnLoadMore = true;
      })
      .addCase(fetchMoreMovieGenre.fulfilled, (state, action) => {
        state.movieList = [...state.movieList, ...action.payload];
        state.loadingBtnLoadMore = false;
      })
      .addCase(fetchLoadMoreMovie.pending, (state) => {
        state.loadingBtnLoadMore = true;
      })
      .addCase(fetchLoadMoreMovie.fulfilled, (state, action) => {
        state.loadingBtnLoadMore = false;
        state.movieUpcoming = [...state.movieUpcoming, ...action.payload];
        state.movieTopRated = [...state.movieTopRated, ...action.payload];
        state.moviePopular = [...state.moviePopular, ...action.payload];
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
      })
      .addCase(fetchMovieSimilar.fulfilled, (state, action) => {
        state.movieSimilar = action.payload;
      });
  },
});

export const {
  chooseGenre,
  setShowSideBar,
  removeSearchResults,
  removeMovieDetail,
  removeMovieSimilar,
  removeMovieList,
  removeSearchPage,
} = movieSlice.actions;

export default movieSlice.reducer; //inside reducer has also state, dispatch
