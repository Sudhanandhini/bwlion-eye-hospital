import { useEffect, useState } from "react";
import { Trash2, Upload } from "lucide-react";
import { api } from "./api";
import ReorderButtons, { reorderArray } from "./ReorderButtons";
import { uploadUrl } from "../lib/apiBase";

export default function GalleryManager() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    api.getGallery().then(setImages).finally(() => setLoading(false));
  };

  useEffect(load, []);

  const upload = async (e) => {
    e.preventDefault();
    if (files.length === 0) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      [...files].forEach((f) => fd.append("images", f));
      await api.uploadGalleryImages(fd);
      setFiles([]);
      e.target.reset();
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete this image?")) return;
    await api.deleteGalleryImage(id);
    load();
  };

  const move = async (index, direction) => {
    const reordered = reorderArray(images, index, direction);
    if (reordered === images) return;
    setImages(reordered);
    await api.reorderGallery(reordered.map((img) => img.id));
    load();
  };

  return (
    <div>
      <h1 className="text-primary !text-[26px] font-bold mb-6">Gallery</h1>

      <form onSubmit={upload} className="bg-white rounded-md border border-gray-200 p-5 mb-8 flex flex-wrap items-center gap-4">
        <h3 className="text-primary font-semibold !text-[16px] flex items-center gap-2 w-full sm:w-auto">
          <Upload size={18} /> Upload Images
        </h3>
        {error && <p className="text-red-600 !text-[14px] w-full">{error}</p>}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="!text-[14px]"
        />
        <button
          type="submit"
          disabled={uploading || files.length === 0}
          className="bg-primary text-white rounded-md px-5 py-2.5 font-medium !text-[15px] disabled:opacity-60"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-400 !text-[14px]">No images yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={img.id} className="bg-white rounded-md border border-gray-200 p-3 flex gap-3">
              <ReorderButtons
                onUp={() => move(i, "up")}
                onDown={() => move(i, "down")}
                disabledUp={i === 0}
                disabledDown={i === images.length - 1}
              />
              <img src={uploadUrl(img.image_path)} alt="" className="w-full h-28 object-cover rounded-md" />
              <button
                onClick={() => remove(img.id)}
                aria-label="Delete image"
                className="text-red-500 hover:text-red-700 flex-shrink-0"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
