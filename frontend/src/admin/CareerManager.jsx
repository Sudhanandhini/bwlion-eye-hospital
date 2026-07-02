import { useEffect, useState } from "react";
import { Trash2, Pencil, Plus } from "lucide-react";
import { api } from "./api";
import ReorderButtons, { reorderArray } from "./ReorderButtons";

function AddJobForm({ locations, onAdded }) {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await api.createCareerJob({ location, title, details });
      setLocation("");
      setTitle("");
      setDetails("");
      onAdded();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-md border border-gray-200 p-5 mb-8 space-y-4">
      <h3 className="text-primary font-semibold !text-[16px] flex items-center gap-2">
        <Plus size={18} /> Add Job Opening
      </h3>
      {error && <p className="text-red-600 !text-[14px]">{error}</p>}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            list="career-locations"
            placeholder="Location (e.g. JC Road)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
            required
          />
          <datalist id="career-locations">
            {locations.map((loc) => <option key={loc} value={loc} />)}
          </datalist>
        </div>
        <input
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
          required
        />
      </div>
      <textarea
        placeholder={"Details (one item per line), e.g.\nQualification : Any Degree\nExperience : 2 to 3 years\nMail Id: hr@bwlionseyehospital.org"}
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        rows={5}
        className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[14px]"
      />
      <button
        type="submit"
        disabled={saving}
        className="bg-primary text-white rounded-md px-6 py-2.5 font-medium !text-[15px] disabled:opacity-60"
      >
        {saving ? "Adding..." : "Add Job"}
      </button>
    </form>
  );
}

function JobCard({ job, onChanged, onUp, onDown, disabledUp, disabledDown }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(job.title);
  const [details, setDetails] = useState(job.details || "");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await api.updateCareerJob(job.id, { location: job.location, title, details });
      setEditing(false);
      onChanged();
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm(`Delete "${job.title}"?`)) return;
    await api.deleteCareerJob(job.id);
    onChanged();
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 flex gap-4">
      <ReorderButtons onUp={onUp} onDown={onDown} disabledUp={disabledUp} disabledDown={disabledDown} />
      <div className="flex-1 min-w-0">
        {editing ? (
          <div className="space-y-2">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[14px]" />
            <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={5} className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[13px]" />
            <div className="flex gap-2">
              <button onClick={save} disabled={saving} className="bg-primary text-white px-3 py-1.5 rounded-md !text-[13px] font-medium disabled:opacity-60">
                {saving ? "Saving..." : "Save"}
              </button>
              <button onClick={() => setEditing(false)} className="px-3 py-1.5 rounded-md border border-gray-300 !text-[13px]">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h5 className="text-primary !text-[16px] font-semibold">{job.title}</h5>
            <p className="!text-[13px] text-gray-500 whitespace-pre-line mb-2">{job.details}</p>
            <div className="flex gap-3">
              <button onClick={() => setEditing(true)} className="text-primary hover:text-secondary" aria-label="Edit"><Pencil size={16} /></button>
              <button onClick={remove} className="text-red-500 hover:text-red-700" aria-label="Delete"><Trash2 size={16} /></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function CareerManager() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.getCareerJobs().then(setJobs).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const locations = [...new Set(jobs.map((j) => j.location))];

  const moveWithinLocation = async (location, index, direction) => {
    const groupItems = jobs.filter((j) => j.location === location);
    const reordered = reorderArray(groupItems, index, direction);
    if (reordered === groupItems) return;
    await api.reorderCareerJobs(location, reordered.map((j) => j.id));
    load();
  };

  return (
    <div>
      <h1 className="text-primary !text-[26px] font-bold mb-6">Career Openings</h1>
      <AddJobForm locations={locations} onAdded={load} />

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : locations.length === 0 ? (
        <p className="text-gray-400 !text-[14px]">No job openings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc) => {
            const groupItems = jobs.filter((j) => j.location === loc);
            return (
              <div key={loc}>
                <h4 className="text-primary !text-[18px] font-semibold mb-4">Current Openings in {loc}</h4>
                <div className="space-y-4">
                  {groupItems.map((job, i) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      onChanged={load}
                      onUp={() => moveWithinLocation(loc, i, "up")}
                      onDown={() => moveWithinLocation(loc, i, "down")}
                      disabledUp={i === 0}
                      disabledDown={i === groupItems.length - 1}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
