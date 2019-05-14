const INITIAL_STATE = {
  characters: [{}]
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_CHARACTERS_SUCCESS':
      return { ...state, characters: action.payload }
    default:
      return state;
  }
}
