"use client"

import { ChangeEvent, useState } from "react"
import { TableCell } from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { updateApplication } from "@/lib/actions/jobs"
import { Application } from "./page"

const STATUS_OPTIONS = [
  "applied",
  "review",
  "interview",
  "shortlisted",
  "rejected",
  "offered",
]

const statusStyles: Record<string, string> = {
  applied: "bg-amber-400 text-black",
  review: "bg-blue-500 text-white",
  interview: "bg-violet-500 text-white",
  shortlisted: "bg-emerald-500 text-white",
  rejected: "bg-red-500 text-white",
  offered: "bg-green-600 text-white",
}

const ApplicationStatus = ({
  initialStatus = "applied",
  applicatin 
}: {
  initialStatus?: string
  applicatin : Application
}) => {
  const [status, setStatus] = useState<string | null>(initialStatus)
//   const [nameInputEvent, setNameInputEvent] = useState<ChangeEvent<HTMLInputElement, HTMLInputElement>>();

//   function myFunction(value: any) {
//     setStatus(value)
//   }

//   console.log(nameInputEvent?.target.value)

  const handleChange = async (value : string | null) => {
      if (!value) return;
    //   console.log(applicatin);
      const result =  await updateApplication(applicatin._id, { status : value});
      // console.log(result.modifiedCount);
      
      if(result.modifiedCount){
          setStatus(value)
     }
  }
  console.log(status);
  

  return (
    <>
        {/* <label htmlFor="demo">demo</label>
      <input type="text" id="demo"onChange={setNameInputEvent} /> */}
      <TableCell className="px-4 py-3">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
            statusStyles[status ?? ""] ?? "bg-muted text-foreground"
          }`}
        >
          {status}
        </span>
      </TableCell>
      <TableCell className="rounded-r-lg px-4 py-3">
        <Select
          value={status}
          onValueChange={handleChange}
          // onValueChange={myFunction}
        >
          <SelectTrigger size="sm" className="w-32">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TableCell>
    </>
  )
}

export default ApplicationStatus
