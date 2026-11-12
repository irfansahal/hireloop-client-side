
"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2Icon } from "lucide-react"
import { Jobs } from "../dashboard/recruiter/jobs/page"
import { deleteJobs } from "@/lib/actions/jobs"
import { useState } from "react"
import { toast } from "@/components/ui/toast"
import { useRouter } from "next/navigation"


  function DeleteJobDailog({job} : { job : Jobs}) {

    const [ open , setOpen ] = useState(false)
    const router = useRouter()

    const deleteHandeler = async () => {
        console.log(job._id);
        const deletedData = await deleteJobs(job._id);
        console.log(deletedData);
        if(deletedData.deletedCount){
            setOpen(false)
            toast.add({
                  title: "Event created",
                  description: "Sunday, December 3 at 9:00 AM",
            })
            router.refresh()
        }
    }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        render={<Button
                                            type="button"
                                            variant="destructive"
                                            size="sm"
                                        >
                                            <Trash2Icon />
                                            Delete
                                        </Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation. View{" "}
            <a href="#">Settings</a> delete any memories saved during this chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={deleteHandeler}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteJobDailog