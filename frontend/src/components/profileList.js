import { useSelector, useDispatch } from "react-redux";
import { deleteProfile } from "../redux/actions";

function ProfileList() {
  const { profiles } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile._id} className="border p-4 mb-2 rounded shadow">
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p>
            <strong>Skills:</strong> {profile.skills.join(", ")}
          </p>
          <p>
            <strong>Experience:</strong> {profile.experience}
          </p>
          <p>
            <strong>Contact:</strong> {profile.contact}
          </p>
          <button
            onClick={() => dispatch(deleteProfile(profile._id))}
            className="text-red-600 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
