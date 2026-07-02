import { useEffect, useState } from "react";
import { Trash2, Pencil, Plus } from "lucide-react";
import { api } from "./api";
import ReorderButtons, { reorderArray } from "./ReorderButtons";

const GROUPS = [
  { key: "medical_director", label: "Medical Director" },
  { key: "eye_bank_team", label: "Medical Director - Eye Bank" },
  { key: "consultants", label: "Consultants" },
];

function AddDoctorForm({ onAdded }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [group, setGroup] = useState(GROUPS[0].key);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("role", role);
      fd.append("group_name", group);
      if (file) fd.append("image", file);
      await api.createDoctor(fd);
      setName("");
      setRole("");
      setFile(null);
      e.target.reset();
      onAdded();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-md border border-gray-200 p-5 mb-8 grid sm:grid-cols-2 gap-4">
      <h3 className="sm:col-span-2 text-primary font-semibold !text-[16px] flex items-center gap-2">
        <Plus size={18} /> Add Doctor
      </h3>
      {error && <p className="sm:col-span-2 text-red-600 !text-[14px]">{error}</p>}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
        required
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
        required
      />
      <select
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
      >
        {GROUPS.map((g) => (
          <option key={g.key} value={g.key}>{g.label}</option>
        ))}
      </select>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="!text-[14px]"
      />
      <button
        type="submit"
        disabled={saving}
        className="sm:col-span-2 bg-primary text-white rounded-md py-2.5 font-medium !text-[15px] disabled:opacity-60"
      >
        {saving ? "Adding..." : "Add Doctor"}
      </button>
    </form>
  );
}

function DoctorCard({ doctor, onChanged, onUp, onDown, disabledUp, disabledDown }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(doctor.name);
  const [role, setRole] = useState(doctor.role);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("role", role);
      fd.append("group_name", doctor.group_name);
      if (file) fd.append("image", file);
      await api.updateDoctor(doctor.id, fd);
      setEditing(false);
      onChanged();
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm(`Delete ${doctor.name}?`)) return;
    await api.deleteDoctor(doctor.id);
    onChanged();
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 flex gap-4">
      <ReorderButtons onUp={onUp} onDown={onDown} disabledUp={disabledUp} disabledDown={disabledDown} />
      <img
        src={doctor.image_path}
        alt={doctor.name}
        className="w-20 h-20 rounded-md object-cover flex-shrink-0 bg-gray-100"
      />
      <div className="flex-1 min-w-0">
        {editing ? (
          <div className="space-y-2">
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[14px]" />
            <input value={role} onChange={(e) => setRole(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[14px]" />
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="!text-[13px]" />
            <div className="flex gap-2">
              <button onClick={save} disabled={saving} className="bg-primary text-white px-3 py-1.5 rounded-md !text-[13px] font-medium disabled:opacity-60">
                {saving ? "Saving..." : "Save"}
              </button>
              <button onClick={() => setEditing(false)} className="px-3 py-1.5 rounded-md border border-gray-300 !text-[13px]">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h5 className="text-primary !text-[16px] font-semibold truncate">{doctor.name}</h5>
            <p className="!text-[13px] text-secondary mb-2 truncate">{doctor.role}</p>
            <div className="flex gap-3">
              <button onClick={() => setEditing(true)} className="text-primary hover:text-secondary" aria-label="Edit">
                <Pencil size={16} />
              </button>
              <button onClick={remove} className="text-red-500 hover:text-red-700" aria-label="Delete">
                <Trash2 size={16} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function DoctorsManager() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.getDoctors().then(setDoctors).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const moveWithinGroup = async (groupKey, index, direction) => {
    const groupItems = doctors.filter((d) => d.group_name === groupKey);
    const reordered = reorderArray(groupItems, index, direction);
    if (reordered === groupItems) return;
    await api.reorderDoctors(groupKey, reordered.map((d) => d.id));
    load();
  };

  return (
    <div>
      <h1 className="text-primary !text-[26px] font-bold mb-6">Doctors</h1>
      <AddDoctorForm onAdded={load} />

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        GROUPS.map((g) => {
          const groupItems = doctors.filter((d) => d.group_name === g.key);
          return (
            <div key={g.key} className="mb-10">
              <h4 className="text-primary !text-[18px] font-semibold mb-4">{g.label}</h4>
              {groupItems.length === 0 ? (
                <p className="text-gray-400 !text-[14px]">No doctors in this group yet.</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4">
                  {groupItems.map((doc, i) => (
                    <DoctorCard
                      key={doc.id}
                      doctor={doc}
                      onChanged={load}
                      onUp={() => moveWithinGroup(g.key, i, "up")}
                      onDown={() => moveWithinGroup(g.key, i, "down")}
                      disabledUp={i === 0}
                      disabledDown={i === groupItems.length - 1}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
