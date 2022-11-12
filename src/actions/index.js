import axios from "axios";
export const getAllGames = "GET_ALL_VIDEOGAME";
export const getAllGenres = "GET_ALL_GENRES";
export const filterByGenre = "FILTER_BY_GENRE";
export const filterByCreation = "FILTER_BY_CREATION";
export const orderBy = "ORDER_BY";
export const orderAscDec = "ORDER_ASC_DEC";
export const getDetail = "GET_DETAIL";
export const postGame = "POST_GAME";
export const clearDetails = "CLEAR_DETAILS";
export const searchGame = "SEARCH_GAME";
export const gameReset = "GAME_RESET";
export const pageNumber = "PAGE_NUMBER";
export const activePage = "ACTIVE_PAGE";
export const deleteCard = "DELETE_CARD";
export const modify = "MODIFY";
export const modifySate = "MODIFY_STATE";

export const getAllVideogame = () => {
  return async function (dispatch) {
    const videogames = await axios("/videogames");
    return dispatch({ type: getAllGames, payload: videogames.data });
  };
};

export const gameClear = () => {
  return {
    type: gameReset,
  };
};

export const searchVideogame = (name) => {
  return async function (dispatch) {
    try {
      const videogames = await axios(`/videogames?name=${name}`);
      return dispatch({
        type: searchGame,
        payload: videogames.data,
      });
    } catch (error) {
      return dispatch({ type: searchGame, payload: error.response });
    }
  };
};

export const getAllGenre = () => {
  return async (dispatch) => {
    const genre = await axios("/genres");
    return dispatch({ type: getAllGenres, payload: genre.data });
  };
};

export const filterGameByGenre = (payload) => {
  return {
    type: filterByGenre,
    payload,
  };
};

export const filterGameByCreation = (createApi) => {
  return async function (dispatch) {
    try {
      const videogames = await axios(`/videogames?createdApi=${createApi}`);
      return dispatch({
        type: filterByCreation,
        payload: videogames.data,
      });
    } catch (error) {
      return dispatch({ type: filterByCreation, payload: error.response });
    }
  };
};

export const orderCardBy = (payload) => {
  return {
    type: orderBy,
    payload,
  };
};

export const orderSort = (payload) => {
  return {
    type: orderAscDec,
    payload,
  };
};

export const getGameDetail = (idVideogame) => {
  return async (dispatch) => {
    const videoGameDetail = await axios(`/videogames/${idVideogame}`);
    return dispatch({
      type: getDetail,
      payload: videoGameDetail.data,
    });
  };
};

export const postVideogame = (post) => {
  return async (dispatch) => {
    const response = await axios.post("/videogames", post);
    return dispatch({
      type: postGame,
      payload: response,
    });
  };
};

export const clearGameDetails = () => {
  return { type: clearDetails };
};

export const setActivePage = (payload) => {
  return { type: activePage, payload };
};

export const setPage = (payload) => {
  return { type: pageNumber, payload };
};

export const delCard = (idVideogame) => {
  return async () => {
    await axios.delete(`/videogames?idVideogame=${idVideogame}`);
  };
};

export const modifyCard = (idVideogame, patch) => {
  return async () => {
    debugger;
    await axios.post(`/videogames/${idVideogame}`, patch);
  };
};

export const modifyCardId = (idVideogame) => {
  return { type: modifySate, payload: idVideogame };
};
