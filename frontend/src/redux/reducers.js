const initialState = {
  profiles: [],
  loading: false,
  error: null,
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROFILES_START":
      return { ...state, loading: true, error: null };
    case "FETCH_PROFILES_SUCCESS":
      return { ...state, loading: false, profiles: action.payload };
    case "FETCH_PROFILES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "ADD_PROFILE":
      return { ...state, profiles: [...state.profiles, action.payload] };
    case "DELETE_PROFILE":
      return {
        ...state,
        profiles: state.profiles.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
};
