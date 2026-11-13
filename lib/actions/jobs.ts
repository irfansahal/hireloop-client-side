import { JobFormData } from "@/app/dashboard/recruiter/jobs/new/page"


const BASE_URI = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const createJobs = async (data : JobFormData) => {
   const res = await fetch(`${BASE_URI}/create-jobs`, {
     method : 'POST',
     headers : {
         "content-type" : "application/json"
        },
        body : JSON.stringify(data)
   });
   return res.json()
} 

export const deleteJobs = async (jobId : string) => {
     const res = await fetch(`${BASE_URI}/jobs/${jobId}`,{
       method : 'DELETE'
     });
     return res.json()
}