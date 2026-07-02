require("dotenv").config();
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const pool = require("./db");

const FRONTEND_IMG = path.join(__dirname, "..", "..", "frontend", "src", "assets", "img");
const UPLOADS = path.join(__dirname, "..", "uploads");

function copyImage(subfolder, srcFilename) {
  const srcPath = path.join(FRONTEND_IMG, srcFilename);
  const destDir = path.join(UPLOADS, subfolder);
  fs.mkdirSync(destDir, { recursive: true });
  const destFilename = path.basename(srcFilename);
  fs.copyFileSync(srcPath, path.join(destDir, destFilename));
  return `/uploads/${subfolder}/${destFilename}`;
}

const doctorsData = [
  { name: "Dr. Mamatha B", role: "Medical Director", group_name: "medical_director", src: "dr.mamatha.jpg" },
  { name: "Dr. Rekha Gyanchand", role: "Medical Director - Eye Bank", group_name: "eye_bank_team", src: "Dr.-Rekha-Gyanchand.jpg" },
  { name: "Dr. Rama Devi K.S", role: "Medical Superintendent", group_name: "consultants", src: "dr.Rama-Devi.jpg" },
  { name: "Dr. Rachel Joseph", role: "Consultant", group_name: "consultants", src: "dr.Rachel-Joseph.jpg" },
  { name: "Dr. Sahana S Karanth", role: "Consultant, Consultant-Vitreo Retina", group_name: "consultants", src: "sahana.jpg" },
  { name: "Dr Varsha Tamrakar", role: "Consultant, Pediatric Consultant", group_name: "consultants", src: "Varsha-Tamrakar.jpg" },
  { name: "Dr. Gururaj N Deshpande", role: "Consultant, Consultant-Vitreo Retina", group_name: "consultants", src: "gururaj.jpg" },
  { name: "Dr. Lalitha C S", role: "Consultant", group_name: "consultants", src: "lalitha.jpg" },
];

const leadershipData = [
  { name: "Padmashree Lion Dr. B.L.S. Murthy", role: "Founder Trustee", group_name: "founder", src: "B.L.S.-Murthy.jpg" },
  { name: "PDG Lion P.S. Premnath", role: "Managing Trustee & Chairperson", group_name: "top_leader", src: "premnath-1.jpg" },
  { name: "Lion CA Dr. I.S. Prasad", role: "Hon Secretary", group_name: "top_leader", src: "prasad.jpg" },
  { name: "Lion B. Chinnaswamy Setty", role: "Sr. Vice Chairman", group_name: "office_bearer", src: "trustee1.jpg" },
  { name: "Lion R. Kashinath", role: "Vice Chairman", group_name: "office_bearer", src: "trustee2.jpg" },
  { name: "Lion K. Rajkumar", role: "Hon Treasurer", group_name: "office_bearer", src: "trustee3.jpg" },
  { name: "Lion T.V. Nanjundaswamy", role: "Joint Secretary", group_name: "office_bearer", src: "trustee4.jpg" },
];

const hereditaryTrustees = [
  "Lion P.S. Premnath", "Lion I.S. Prasad", "Lion Chinnaswamy Setty B.", "Lion Ashok Kumar B.R",
  "Lion Dattathreya S.Meda", "Lion Dr. C.V Somashekar", "Lion Dr. Mohan Manghnani",
  "Lion Dr. Rani Satish Babu", "Lion Dr.Ramamurthy B.S", "Lion L.K. Mani", "Lion L.N. Dinakar",
  "Lion Manjunatha Gupta K", "Lion N.Ashok Salecha", "Lion Nagaraj G.R", "Lion Pathi S. Suresh",
  "Lion Raj Kumar K", "Lion Rama Ramamurthy", "Lion Shobha Satish", "Lion Subbaraju K.G",
  "Shri L Suresh", "Shri M.A. Parthasarathy", "Shri Manandi Ramesh", "Shri S.V.S. Subramanya Gupta",
  "Shri Sanath V Babu", "Shri T. Srinivas", "Shri B A Srinivasa Gupta", "Shri Pradeep K.R",
  "Lion T Vasudev", "Shri Lingamurthy",
];

const lifeTrustees = [
  "Lion Manandi Nanjunda Setty", "Lion Dinesh H.L", "Lion A. Satish", "Lion Dwarakanath P.V",
  "Lion Kashinath R", "Lion N.A. Nagaraja Setty", "Lion Nagendra Setty", "Lion Rajesh Babu P.R",
  "Lion Sreedhara V Donti", "Lion Srinivasan M.R", "Lion Subramanya G.R", "Lion Sudarshan M.A",
  "Lion T.V Nanjundaswamy", "Lion V. R. Ramamurthy", "Shri Pradeep Devatha", "Lion R Srinivasan",
  "Ms. Akhila Bindumalyam Nandakumar", "Lion Radhakrishna",
];

async function seed() {
  console.log("Seeding admin user...");
  const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  await pool.query(
    "INSERT INTO admin_users (username, password_hash) VALUES (?, ?) ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)",
    [process.env.ADMIN_USERNAME, passwordHash]
  );

  console.log("Seeding doctors...");
  await pool.query("DELETE FROM doctors");
  const groupCounters = {};
  for (const d of doctorsData) {
    const order = groupCounters[d.group_name] || 0;
    groupCounters[d.group_name] = order + 1;
    const imagePath = copyImage("doctors", d.src);
    await pool.query(
      "INSERT INTO doctors (name, role, group_name, image_path, sort_order) VALUES (?, ?, ?, ?, ?)",
      [d.name, d.role, d.group_name, imagePath, order]
    );
  }

  console.log("Seeding leadership...");
  await pool.query("DELETE FROM leadership");
  const leaderCounters = {};
  for (const l of leadershipData) {
    const order = leaderCounters[l.group_name] || 0;
    leaderCounters[l.group_name] = order + 1;
    const imagePath = copyImage("leadership", l.src);
    await pool.query(
      "INSERT INTO leadership (name, role, group_name, image_path, sort_order) VALUES (?, ?, ?, ?, ?)",
      [l.name, l.role, l.group_name, imagePath, order]
    );
  }

  console.log("Seeding trustees...");
  await pool.query("DELETE FROM trustees");
  for (const [i, name] of hereditaryTrustees.entries()) {
    await pool.query("INSERT INTO trustees (name, type, sort_order) VALUES (?, 'hereditary', ?)", [name, i]);
  }
  for (const [i, name] of lifeTrustees.entries()) {
    await pool.query("INSERT INTO trustees (name, type, sort_order) VALUES (?, 'life', ?)", [name, i]);
  }

  console.log("Seeding gallery images...");
  await pool.query("DELETE FROM gallery_images");
  const eventDir = path.join(FRONTEND_IMG, "event");
  const files = fs.readdirSync(eventDir).filter((f) => /\.(jpe?g|png)$/i.test(f));
  for (const [i, file] of files.entries()) {
    const imagePath = copyImage("gallery", path.join("event", file));
    await pool.query(
      "INSERT INTO gallery_images (image_path, sort_order) VALUES (?, ?)",
      [imagePath, i]
    );
  }

  console.log(`Seed complete: ${doctorsData.length} doctors, ${leadershipData.length} leadership, ${hereditaryTrustees.length + lifeTrustees.length} trustees, ${files.length} gallery images.`);
  await pool.end();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
