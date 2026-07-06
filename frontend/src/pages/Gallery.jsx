import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { apiUrl, uploadUrl } from "../lib/apiBase";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryImages = images.map((img) => uploadUrl(img.image_path));

  useEffect(() => {
    fetch(apiUrl("/api/gallery"))
      .then((res) => res.json())
      .then(setImages)
      .finally(() => setLoading(false));
  }, []);

  const showPrev = () => setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const showNext = () => setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <main>
      <PageBanner title="Image Gallery" crumb="Gallery" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold uppercase tracking-wide !text-[15px] mb-2">
            Experience World Class Eye Care
          </p>
          <h2 className="text-secondary">
            Providing Eye Care For The Sickest In Our Community.
          </h2>
        </div>

        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {galleryImages.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="block w-full mb-4 break-inside-avoid"
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full rounded-md hover:opacity-90 transition-opacity" />
              </button>
            ))}
          </div>
        )}
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute top-5 right-5 text-white hover:text-secondary"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={galleryImages[activeIndex]}
            alt={`Gallery ${activeIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <span className="absolute bottom-5 right-5 text-white !text-[14px]">
            {activeIndex + 1} of {galleryImages.length}
          </span>
        </div>
      )}
    </main>
  );
}
