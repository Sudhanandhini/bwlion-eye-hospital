import { useEffect, useState } from "react";
import { api } from "./api";

export default function PopupManager() {
  const [form, setForm] = useState({
    enabled: false,
    heading: "",
    content: "",
    button_text: "",
    button_link: "",
  });
  const [imagePath, setImagePath] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    api.getPopup().then((data) => {
      setForm({
        enabled: !!data.enabled,
        heading: data.heading || "",
        content: data.content || "",
        button_text: data.button_text || "",
        button_link: data.button_link || "",
      });
      setImagePath(data.image_path);
    }).finally(() => setLoading(false));
  }, []);

  const setField = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatus("idle");
    setError("");
    try {
      const fd = new FormData();
      fd.append("enabled", form.enabled);
      fd.append("heading", form.heading);
      fd.append("content", form.content);
      fd.append("button_text", form.button_text);
      fd.append("button_link", form.button_link);
      if (file) fd.append("image", file);
      const updated = await api.updatePopup(fd);
      setImagePath(updated.image_path);
      setFile(null);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-primary !text-[26px] font-bold mb-6">Site Popup</h1>
      <p className="text-gray-500 !text-[14px] mb-6">
        Configure a promotional popup shown to visitors across the public site. Turn it off to hide it without losing your content.
      </p>

      <form onSubmit={save} className="bg-white rounded-md border border-gray-200 p-6 max-w-xl space-y-5">
        {status === "success" && <p className="text-green-600 !text-[14px]">Saved.</p>}
        {status === "error" && <p className="text-red-600 !text-[14px]">{error}</p>}

        <label className="flex items-center gap-3 !text-[15px] font-medium text-primary">
          <input type="checkbox" name="enabled" checked={form.enabled} onChange={setField} className="w-5 h-5" />
          Show popup on the site
        </label>

        <div>
          <label className="block text-secondary font-medium !text-[14px] mb-2">Heading</label>
          <input
            name="heading"
            value={form.heading}
            onChange={setField}
            className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
          />
        </div>

        <div>
          <label className="block text-secondary font-medium !text-[14px] mb-2">Content</label>
          <textarea
            name="content"
            value={form.content}
            onChange={setField}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[14px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-secondary font-medium !text-[14px] mb-2">Button Text</label>
            <input
              name="button_text"
              value={form.button_text}
              onChange={setField}
              placeholder="e.g. Book Now"
              className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
            />
          </div>
          <div>
            <label className="block text-secondary font-medium !text-[14px] mb-2">Button Link</label>
            <input
              name="button_link"
              value={form.button_link}
              onChange={setField}
              placeholder="/contacts or https://..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 !text-[15px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-secondary font-medium !text-[14px] mb-2">Image</label>
          {imagePath && !file && (
            <img src={imagePath} alt="Current popup" className="w-40 h-28 object-cover rounded-md mb-2 bg-gray-100" />
          )}
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="!text-[14px]" />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-primary text-white rounded-md px-6 py-2.5 font-medium !text-[15px] disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Popup"}
        </button>
      </form>
    </div>
  );
}
