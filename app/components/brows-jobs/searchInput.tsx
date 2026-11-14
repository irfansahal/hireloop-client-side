"use client"
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchInput = () => {
    const router = useRouter()
     const searchHandler = async (event: React.SubmitEvent<HTMLElement>) => {
          event.preventDefault();
          const formData = new FormData(event.target)
          const searchData = Object.fromEntries(formData.entries()) 
          console.log(searchData);

          const searchParams = new URLSearchParams();
          
          searchParams.set("search",searchData.search as string)
          
          console.log(searchParams.toString());
          
          router.push(`/brows-jobs?${searchParams.toString()}`)
    
        //   const jobs = await getJobs(currentSearchParams.toString());
        //   console.log(jobs);
          
        }
       
    return (
        <>
             <form onSubmit={searchHandler}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#12121a] p-2 pl-4">
                        <SearchIcon className="size-4 shrink-0 text-white/40" />
                    <input
                        type="text"
                        placeholder="Search by job title, keywords..."
                        className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
                        name="search"
/>
                    <button
                        type="submit"
                        className="shrink-0 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
                    >
                        Search Jobs
                    </button>
                </div>
                    </form>
        </>
    );
};

export default SearchInput; 