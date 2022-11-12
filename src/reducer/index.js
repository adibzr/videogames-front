import {
  getAllGames,
  getAllGenres,
  filterByGenre,
  filterByCreation,
  orderBy,
  orderAscDec,
  getDetail,
  postGame,
  clearDetails,
  searchGame,
  gameReset,
  activePage,
  pageNumber,
  modifySate,
} from "../actions/index.js";

const initialState = {
  videogames: [],
  videogamesFilter: [],
  genre: [],
  videogamesDetail: [],
  gameCreated: "",
  loading: true,
  searchParam: "",
  page: 1,
  active: 1,
  modify: "",
};

export default function rootReducer(state = initialState, action) {
  const allGames = state.videogamesFilter;
  switch (action.type) {
    case getAllGames:
      return {
        ...state,
        loading: false,
        videogames: action.payload,
        videogamesFilter: action.payload,
      };

    case gameReset:
      return {
        ...state,
        videogames: [],
        videogamesFilter: [],
        videogamesDetail: [],
        loading: true,
        searchParam: "",
        page: 1,
        active: 1,
      };

    case searchGame:
      return {
        ...state,
        loading: false,
        videogames: action.payload,
        videogamesFilter: action.payload,
      };

    case getAllGenres:
      return {
        ...state,
        genre: action.payload,
      };

    case filterByGenre:
      const filteredGenre =
        action.payload === "all"
          ? allGames
          : allGames.filter((game) => {
              for (let i = 0; i < game.genres.length; i++) {
                if (game.genres[i].name === action.payload) return true;
              }
              return false;
            });
      return {
        ...state,
        videogames: filteredGenre,
      };

    case filterByCreation:
      return {
        ...state,
        videogames: action.payload,
        videogamesFilter: action.payload,
      };

    case orderBy:
      let ordered;
      if (action.payload === "A-Z") {
        ordered = [...state.videogames].sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : b.name.toLowerCase() > a.name.toLowerCase()
            ? -1
            : 0
        );
      } else if (action.payload === "rating") {
        ordered = [...state.videogames].sort((a, b) =>
          a.rating > b.rating ? -1 : b.rating > a.rating ? 1 : 0
        );
      }
      return { ...state, videogames: ordered };

    case orderAscDec:
      const reverse = [...state.videogames].reverse();
      return { ...state, videogames: reverse };

    case getDetail:
      return {
        ...state,
        loading: false,
        videogamesDetail: action.payload,
      };

    case postGame: {
      return { ...state, gameCreated: action.payload };
    }

    case clearDetails: {
      return {
        ...state,
        videogamesDetail: [],
      };
    }

    case activePage: {
      return { ...state, active: action.payload };
    }

    case pageNumber: {
      return { ...state, page: action.payload };
    }

    case modifySate: {
      return { ...state, modify: action.payload };
    }

    default:
      return { ...state };
  }
}
