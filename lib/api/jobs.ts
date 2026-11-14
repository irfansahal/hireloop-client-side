
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
