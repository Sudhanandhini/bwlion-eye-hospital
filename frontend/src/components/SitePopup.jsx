import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const DISMISS_KEY = "site_popup_dismissed";

export default function SitePopup() {
  const [popup, setPopup] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("/api/popup")
      .then((res) => res.json())
      .then((data) => {
        if (data.enabled && !sessionStorage.getItem(DISMISS_KEY)) {
          setPopup(data);
          setVisible(true);
        }
      })
      .catch(() => {});
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  if (!visible || !popup) return null;

  const isInternal = popup.button_link?.startsWith("/");

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-white z-10"
        >
          <X size={18} />
        </button>

        {popup.image_path && (
          <img src={popup.image_path} alt="" className="w-full h-auto max-h-72 object-contain bg-gray-50" />
        )}

        <div className="p-6 text-center">
          {popup.heading && <h3 className="text-primary mb-3">{popup.heading}</h3>}
          {popup.content && <p className="text-gray-600 !text-[15px] mb-5">{popup.content}</p>}

          {popup.button_text && popup.button_link && (
            isInternal ? (
              <Link
                to={popup.button_link}
                onClick={close}
                className="inline-block bg-secondary text-white px-6 py-2.5 rounded-md font-medium !text-[15px] hover:bg-secondary/90"
              >
                {popup.button_text}
              </Link>
            ) : (
              <a
                href={popup.button_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-white px-6 py-2.5 rounded-md font-medium !text-[15px] hover:bg-secondary/90"
              >
                {popup.button_text}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
