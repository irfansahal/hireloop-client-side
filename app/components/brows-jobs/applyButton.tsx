"use client"

import { Jobs } from "@/app/dashboard/recruiter/jobs/page"
import { CreateApplicationJob } from "@/lib/actions/jobs"
import { authClient } from "@/lib/auth-client"
import { email, string } from "better-auth"
import { useRouter } from "next/navigation"

export interface ApplicationType  {
               userId : string,
           jobId : string,
           email : string,
           name : string,
           jobTitle : string

    
}

const ApplyButton = ({oneJob}: {oneJob : Jobs}) => {

     const { data : session , error } = authClient.useSession()
       
     const router = useRouter()
     
     const user = session?.user  
     const applyHandler = async () => {
        if(!user){
       console.log("you first login");
       router.push(`/signIn?redirectTp=/brows-jobs/${oneJob._id}`)
     }else if(user.role === "seeker"){
        console.log(session?.user);
     const application = {
           userId : user?.id,
           jobId : oneJob._id,
           email : user?.email,
           name : user?.name,
           jobTitle : oneJob.title

     }
     const result = await CreateApplicationJob(application);
     if(result.insertedId){
        console.log("Application Applied Successfully");
        router.push("/brows-jobs")
     }
     }else{
        console.log("you dont have ");
        
     }

      }

    return(
         <button
           onClick={applyHandler}
                                type="button"
                                className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
                            >
                                Apply Now
                            </button>
    )
}

export default ApplyButton