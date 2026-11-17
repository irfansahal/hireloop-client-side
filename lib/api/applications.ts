import { authFetch } from "../core/server";

const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

// Server-only: uses authFetch (reads the session token via next/headers).
// Do not import this from client components.
export const getJobApplications = async (query = "") => {
    const api = `${BASE_URI}/application?${query}`
    const res = await authFetch(api)
    return res.json()
}
