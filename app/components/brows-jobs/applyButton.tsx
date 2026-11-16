"use client"

import { Jobs } from "@/app/dashboard/recruiter/jobs/page"
import { toast } from "@/components/ui/toast"
import { CreateApplicationJob } from "@/lib/actions/jobs"
import { getApplicationCount, getPremiumUser } from "@/lib/api/jobs"
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
           jobTitle : oneJob.title,
           status : "applied"
     }
    
     const applicationCount = await getApplicationCount(`applicationId=${user.id}`);
     console.log("applicationCount",applicationCount.count);
    
     const premiumUser = await getPremiumUser(user.id)
     console.log("premiumUser",premiumUser);
     
     if(!premiumUser.premium  && applicationCount.count >= 2){
         router.push("/payment")
     }else{
       const result = await CreateApplicationJob(application);
     if(result.insertedId){
        console.log("Application Applied Successfully");
        toast.add({
           title: "Event created",
           description: "Sunday, December 3 at 9:00 AM",
        })
        router.push("/brows-jobs")
     }
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