const multer = require("multer");
const path = require("path");
const fs = require("fs");

function makeUploader(subfolder) {
  const dir = path.join(__dirname, "..", "uploads", subfolder);
  fs.mkdirSync(dir, { recursive: true });

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, dir),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9-_]/g, "-");
      cb(null, `${base}-${Date.now()}${ext}`);
    },
  });

  return multer({
    storage,
    limits: { fileSize: 8 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      if (/^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)) cb(null, true);
      else cb(new Error("Only image files are allowed"));
    },
  });
}

module.exports = makeUploader;
