
const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getJobs = async () =>{
    const res = await fetch(`${BASE_URI}/jobs`);
    return res.json();
}
