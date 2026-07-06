import { useEffect, useState } from "react";
import { Trash2, Pencil, Plus, ExternalLink } from "lucide-react";
import { api } from "./api";
import ReorderButtons, { reorderArray } from "./ReorderButtons";
import { uploadUrl } from "../lib/apiBase";

function AddPopupForm({ onAdded }) {
  const [form, setForm] = useState({ heading: "", content: "", button_text: "", button_link: "", enabled: false });
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const setField = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append("image", file);
      await api.createPopup(fd);
      setForm({ heading: "", content: "", button_text: "", button_link: "", enabled: false });
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
    <form onSubmit={submit} className="bg-white rounded-md border border-gray-200 p-6 mb-8 space-y-4 max-w-xl">
      <h3 className="text-primary font-semibold !text-[16px] flex items-center gap-2">
        <Plus size={18} /> Add Popup
      </h3>
      {error && <p className="text-red-600 !text-[14px]">{error}</p>}

      <label className="flex items-center gap-3 !text-[15px] font-medium text-primary">
        <input type="checkbox" name="enabled" checked={form.enabled} onChange={setField} className="w-5 h-5" />
        Show this popup on the site
      </label>

      <div>
        <label className="block text-secondary font-medium !text-[14px] mb-2">Heading</label>
        <input name="heading" value={form.heading} onChange={setField} className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]" />
      </div>
      <div>
        <label className="block text-secondary font-medium !text-[14px] mb-2">Content</label>
        <textarea name="content" value={form.content} onChange={setField} rows={3} className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[14px]" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-secondary font-medium !text-[14px] mb-2">Button Text</label>
          <input name="button_text" value={form.button_text} onChange={setField} placeholder="e.g. Book Now" className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]" />
        </div>
        <div>
          <label className="block text-secondary font-medium !text-[14px] mb-2">Button Link</label>
          <input name="button_link" value={form.button_link} onChange={setField} placeholder="/contacts or https://..." className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]" />
        </div>
      </div>
      <div>
        <label className="block text-secondary font-medium !text-[14px] mb-2">Image</label>
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="!text-[14px]" />
      </div>
      <button type="submit" disabled={saving} className="bg-primary text-white rounded-md px-6 py-2.5 font-medium !text-[15px] disabled:opacity-60">
        {saving ? "Adding..." : "Add Popup"}
      </button>
    </form>
  );
}

function PopupCard({ popup, onChanged, onUp, onDown, disabledUp, disabledDown }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    heading: popup.heading || "",
    content: popup.content || "",
    button_text: popup.button_text || "",
    button_link: popup.button_link || "",
  });
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const setField = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const save = async () => {
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("enabled", popup.enabled ? "true" : "false");
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (file) fd.append("image", file);
      await api.updatePopup(popup.id, fd);
      setEditing(false);
      onChanged();
    } finally {
      setSaving(false);
    }
  };

  const toggleEnabled = async () => {
    const fd = new FormData();
    fd.append("enabled", (!popup.enabled).toString());
    await api.updatePopup(popup.id, fd);
    onChanged();
  };

  const remove = async () => {
    if (!confirm(`Delete "${popup.heading || "this popup"}"?`)) return;
    await api.deletePopup(popup.id);
    onChanged();
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 flex gap-4">
      <ReorderButtons onUp={onUp} onDown={onDown} disabledUp={disabledUp} disabledDown={disabledDown} />

      {popup.image_path && (
        <img src={uploadUrl(popup.image_path)} alt="" className="w-24 h-20 rounded-md object-cover flex-shrink-0 bg-gray-100" />
      )}

      <div className="flex-1 min-w-0">
        {editing ? (
          <div className="space-y-2">
            <input name="heading" value={form.heading} onChange={setField} placeholder="Heading" className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[14px]" />
            <textarea name="content" value={form.content} onChange={setField} placeholder="Content" rows={2} className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[13px]" />
            <div className="grid grid-cols-2 gap-2">
              <input name="button_text" value={form.button_text} onChange={setField} placeholder="Button text" className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[13px]" />
              <input name="button_link" value={form.button_link} onChange={setField} placeholder="Button link" className="w-full border border-gray-300 rounded-md px-2 py-1 !text-[13px]" />
            </div>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="!text-[13px]" />
            <div className="flex gap-2">
              <button onClick={save} disabled={saving} className="bg-primary text-white px-3 py-1.5 rounded-md !text-[13px] font-medium disabled:opacity-60">
                {saving ? "Saving..." : "Save"}
              </button>
              <button onClick={() => setEditing(false)} className="px-3 py-1.5 rounded-md border border-gray-300 !text-[13px]">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-1">
              <h5 className="text-primary !text-[16px] font-semibold truncate">{popup.heading || "(no heading)"}</h5>
              <span className={`!text-[11px] px-2 py-0.5 rounded-full font-medium ${popup.enabled ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                {popup.enabled ? "Live" : "Hidden"}
              </span>
            </div>
            <p className="!text-[13px] text-gray-500 mb-2 truncate">{popup.content}</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 !text-[13px] font-medium text-primary cursor-pointer">
                <input type="checkbox" checked={!!popup.enabled} onChange={toggleEnabled} className="w-4 h-4" />
                {popup.enabled ? "Showing on site" : "Show on site"}
              </label>
              <button onClick={() => setEditing(true)} className="text-primary hover:text-secondary" aria-label="Edit"><Pencil size={16} /></button>
              <button onClick={remove} className="text-red-500 hover:text-red-700" aria-label="Delete"><Trash2 size={16} /></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function PopupManager() {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.getPopups().then(setPopups).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const move = async (index, direction) => {
    const reordered = reorderArray(popups, index, direction);
    if (reordered === popups) return;
    await api.reorderPopups(reordered.map((p) => p.id));
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-primary !text-[26px] font-bold">Popups</h1>
        <a
          href="/?preview_popup=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary !text-[14px] font-medium"
        >
          Preview live site <ExternalLink size={14} />
        </a>
      </div>
      <p className="text-gray-500 !text-[14px] mb-6">
        Create as many popups as you like and toggle each on or off. The site shows the first one
        that's switched on (use the reorder arrows to change priority if more than one is enabled).
      </p>

      <AddPopupForm onAdded={load} />

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : popups.length === 0 ? (
        <p className="text-gray-400 !text-[14px]">No popups yet.</p>
      ) : (
        <div className="space-y-4 max-w-xl">
          {popups.map((p, i) => (
            <PopupCard
              key={p.id}
              popup={p}
              onChanged={load}
              onUp={() => move(i, "up")}
              onDown={() => move(i, "down")}
              disabledUp={i === 0}
              disabledDown={i === popups.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
