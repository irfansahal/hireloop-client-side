"use client";

import { useState, useTransition } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateUserRole } from "@/lib/actions/users";

const ROLE_OPTIONS = [
    { value: "recruiter", label: "Make Recruiter" },
    { value: "seeker", label: "Make Seeker" },
    { value: "admin", label: "Make Admin" },
];

const RoleSelect = ({
    userId,
    initialRole,
}: {
    userId: string;
    initialRole: string;
}) => {
    const [role, setRole] = useState(initialRole);
    // const [isPending, startTransition] = useTransition();

    // const handleChange = (value: string | null) => {
    //     if (!value) return;
    //     startTransition(async () => {
    //         const result = await updateUserRole(userId, value);
    //         if (result.success) {
    //             setRole(value);
    //         }
    //     });
    // };

    const handleChange = async (value : string) => {
       const result = await updateUserRole(userId, value);
       if(result.success){
           setRole(value)
       }
       console.log("result",result);
       
    }

    return (
        <Select value={role} onValueChange={handleChange} 
        // disabled={isPending}
        >
            <SelectTrigger size="sm" className="w-36">
                <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
                {ROLE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default RoleSelect;
