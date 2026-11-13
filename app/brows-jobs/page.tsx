
import { getJobs } from '@/lib/api/jobs';
import React from 'react';

const BrowsJobsPage = async ({searchParams,} : {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    
    const search = await searchParams
    console.log(search);
    
    const URLSearch = new URLSearchParams(search as Record<string, string>)
    
    const quary = URLSearch.toString()

    console.log(quary);
    
    const jobs = await getJobs(quary)

    return (
        <div>
            <h1>this is brows jobs page</h1>
            <ul>
                {jobs.map((item, index)=>{
                    return (
                        <li key={index}><h2>{item.title}</h2></li>
                    )
                })}
            </ul>
        </div>
    );
};

export default BrowsJobsPage;