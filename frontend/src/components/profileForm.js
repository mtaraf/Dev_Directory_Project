import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/actions";

function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    skills: "",
    experience: "1-2 years",
    contact: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      ...form,
      skills: form.skills.split(",").map((s) => s.trim()), // split the string and create array for profile obj
    };
    dispatch(addProfile(profileData));
    setForm({ name: "", skills: "", experience: "1-2 years", contact: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
        required
      />
      <input
        name="skills"
        value={form.skills}
        onChange={handleChange}
        placeholder="Skills (comma-separated)"
        className="border p-2 w-full"
        required
      />
      <select
        name="experience"
        value={form.experience}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option>1-2 years</option>
        <option>3-4 years</option>
        <option>5+ years</option>
      </select>
      <input
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact Email"
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Profile
      </button>
    </form>
  );
}

export default ProfileForm;
