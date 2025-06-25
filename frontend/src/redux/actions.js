import axios from "axios";

export const fetchProfiles = () => async (dispatch) => {
  dispatch({ type: "FETCH_PROFILES_START" });
  try {
    const res = await axios.get("http://localhost:5000/api/profiles");
    dispatch({ type: "FETCH_PROFILES_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "FETCH_PROFILES_FAILURE", payload: error.message });
  }
};

export const addProfile = (profile) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/profiles", profile);
    dispatch({ type: "ADD_PROFILE", payload: res.data });
  } catch (error) {
    console.error("Add profile failed:", error);
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/profiles/${id}`);
    dispatch({ type: "DELETE_PROFILE", payload: id });
  } catch (error) {
    console.error("Delete profile failed:", error);
  }
};
