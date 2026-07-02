import { getToken, clearToken } from "./auth";

const BASE = "/api";

async function request(path, { method = "GET", body, isFormData = false } = {}) {
  const headers = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!isFormData && body) headers["Content-Type"] = "application/json";

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: isFormData ? body : body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    clearToken();
    window.location.href = "/admin/login";
    throw new Error("Session expired");
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  login: (username, password) =>
    request("/auth/login", { method: "POST", body: { username, password } }),

  getDoctors: () => request("/doctors"),
  createDoctor: (formData) => request("/doctors", { method: "POST", body: formData, isFormData: true }),
  updateDoctor: (id, formData) => request(`/doctors/${id}`, { method: "PUT", body: formData, isFormData: true }),
  deleteDoctor: (id) => request(`/doctors/${id}`, { method: "DELETE" }),
  reorderDoctors: (group_name, orderedIds) =>
    request("/doctors/reorder/positions", { method: "PUT", body: { group_name, orderedIds } }),

  getGallery: () => request("/gallery"),
  uploadGalleryImages: (formData) => request("/gallery", { method: "POST", body: formData, isFormData: true }),
  deleteGalleryImage: (id) => request(`/gallery/${id}`, { method: "DELETE" }),
  reorderGallery: (orderedIds) =>
    request("/gallery/reorder/positions", { method: "PUT", body: { orderedIds } }),

  getLeadership: () => request("/leadership"),
  createLeader: (formData) => request("/leadership", { method: "POST", body: formData, isFormData: true }),
  updateLeader: (id, formData) => request(`/leadership/${id}`, { method: "PUT", body: formData, isFormData: true }),
  deleteLeader: (id) => request(`/leadership/${id}`, { method: "DELETE" }),
  reorderLeadership: (group_name, orderedIds) =>
    request("/leadership/reorder/positions", { method: "PUT", body: { group_name, orderedIds } }),

  getTrustees: () => request("/trustees"),
  createTrustee: (name, type) => request("/trustees", { method: "POST", body: { name, type } }),
  updateTrustee: (id, name) => request(`/trustees/${id}`, { method: "PUT", body: { name } }),
  deleteTrustee: (id) => request(`/trustees/${id}`, { method: "DELETE" }),
  reorderTrustees: (type, orderedIds) =>
    request("/trustees/reorder/positions", { method: "PUT", body: { type, orderedIds } }),

  getCareerJobs: () => request("/career"),
  createCareerJob: (job) => request("/career", { method: "POST", body: job }),
  updateCareerJob: (id, job) => request(`/career/${id}`, { method: "PUT", body: job }),
  deleteCareerJob: (id) => request(`/career/${id}`, { method: "DELETE" }),
  reorderCareerJobs: (location, orderedIds) =>
    request("/career/reorder/positions", { method: "PUT", body: { location, orderedIds } }),
};
