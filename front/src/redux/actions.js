import { ADD_FAVORITE, DELETE_FAVORTITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";

export const addFavorite = (character) => {
  // return {
  //   type: ADD_FAVORITE,
  //   payload: character,
  // };

  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    //Se pasa como seegundo parámetro el charcter que le voy a enviar al servidor
    const data = response.data;

    return dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  };
};

export const deleteFavorite = (id) => {
  // return {
  //   type: DELETE_FAVORTITE,
  //   payload: id,
  // };

  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;
    // console.log(data);
    return dispatch({
      type: DELETE_FAVORTITE,
      payload: data,
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
