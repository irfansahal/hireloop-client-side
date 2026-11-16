import { headers } from "next/headers";
import { auth } from "../auth";

const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getJobs = async (query = "") =>{
    const res = await fetch(`${BASE_URI}/jobs?${query}`);
    return res.json();
}

export const getJobById = async (jobId : string) => {
    const res = await fetch(`${BASE_URI}/job/${jobId}`);
    return res.json()
}


export const getJobApplications = async (query = "") => {
    const res = await fetch(`${BASE_URI}/application?${query}`);
    return res.json()
}

export const getApplicationCount = async (query = "") => {
     const res = await fetch(`${BASE_URI}/application/count?${query}`);
     return res.json()
}

export const getPremiumUser = async (userId : string) => {
    const res = await fetch(`${BASE_URI}/users/${userId}/premium`);
    return res.json()
}

export const getUsers = async () => {
  const users = await auth.api.listUsers({
    query: {
        sortBy: "name", // The field to sort by.
        sortDirection: "desc", // The direction to sort by.
    },
    // This endpoint requires session cookies.
    headers: await headers(),
});
 return users
}