import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "./redux/actions";
import ProfileList from "./components/profileList";
import ProfileForm from "./components/profileForm";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.profiles);

  useEffect(() => {
    // Fetches existing profiles when the app starts up
    dispatch(fetchProfiles());
  }, [dispatch]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dev Directory</h1>
      <ProfileForm />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ProfileList />
    </div>
  );
}

export default App;
