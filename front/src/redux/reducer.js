import { ADD_FAVORITE, DELETE_FAVORTITE, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        // myFavorites: [...state.myFavorites, action.payload],
        // allCharacters: [...state.allCharacters, action.payload],

        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case DELETE_FAVORTITE:
      return {
        ...state,
        // myFavorites: state.myFavorites.filter(
        //   (char) => char.id !== action.payload
        // ),
        myFavorites: action.payload,
      };

    case FILTER:
      const allCharsFiltered = state.allCharacters.filter((char) => {
        return char.gender === action.payload;
      });
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
