"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
const jobTypes = [
    { label: 'Full-time', count: '1,238', checked: true },
    { label: 'part-time', count: '422' },
    { label: 'remote', count: '116' },
    { label: 'contract', count: '116' },
    { label: 'internship', count: '116' },
];
const CkeckBoxes= () => {
    const router = useRouter()
        const [selectedType, setSelectedType] = useState("Full-time");
       const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        

        setSelectedType(value);

        const search = new URLSearchParams(window.location.search);
        search.set("typesOfJob", value)
        console.log("search",search);
        router.push(`/brows-jobs?${search.toString()}`)
    }

    return (
        <>
             <div className="mt-3 flex flex-col gap-3">
                                
                                    {jobTypes.map((type) => (
                                    <label
                                        key={type.label}
                                        className="flex cursor-pointer items-center justify-between gap-2 text-sm text-white/70"
                                    >
                                        <span className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="jobType"
                                                className="size-4 accent-[#5b5bf5]"
                                                checked={selectedType === type.label}
                                                onChange={handleChange}
                                                value={type.label}
                                            />
                                            {type.label}
                                        </span>
                                        <span className="text-xs text-white/40">
                                            {type.count}
                                        </span>
                                    </label>
                                ))}
                            
                            </div>
        </>
    );
};

export default CkeckBoxes