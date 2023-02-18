import { ADD_FAVORITE, DELETE_FAVORTITE } from "./actions-types";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORTITE,
    payload: id,
  };
};
