
import {
    BookmarkIcon,
    BriefcaseIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    DollarSignIcon,
    FlameIcon,
    SearchIcon,
    ZapIcon,
} from 'lucide-react';
import { getJobs } from '@/lib/api/jobs';
import JobsCard from '../components/brows-jobs/jobsCard';
import SearchInput from '../components/brows-jobs/searchInput';
import CkeckBoxes from '../components/brows-jobs/ckeckBox';
import { Jobs } from '../dashboard/recruiter/jobs/page';
import Link from 'next/link';
import { redirect } from 'next/navigation';



type PageProps = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
};

const BrowsJobsPage = async ({searchParams } :  PageProps) => {
    
    // const currentSearchParams = useSearchParams()
    //  console.log("kkk",currentSearchParams.toString());
     
    const search = await searchParams
     
    const urlSearch = new URLSearchParams(search as Record<string, string>)
    const quary = urlSearch.toString()
    
    const jobs = await getJobs(quary)
    console.log("oooop",jobs);
 
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="mx-auto max-w-6xl px-4 py-8">
                {/* Search bar */}
                   <SearchInput/>

                <div className="mt-6 flex flex-col gap-6 lg:flex-row">
                    {/* Filters sidebar */}
                    <aside className="w-full lg:w-64 lg:shrink-0">
                        <div className="rounded-xl border border-white/10 bg-[#12121a] p-4">
                            <h2 className="text-base font-semibold">Filters</h2>
                            
                            <p className="mt-5 text-sm font-medium text-white/80">
                                Job Type
                            </p>
                           
                           <CkeckBoxes/>
                        </div>
                    </aside>

                    {/* Results */}
                    <section className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h1 className="text-base font-semibold">
                                Found 1,248 Professional Jobs
                            </h1>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-white/40">Sort by:</span>
                                <span className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-[#12121a] px-3 py-1.5 text-white/70">
                                    Most Recent
                                    <ChevronDownIcon className="size-3.5" />
                                </span>
                            </div>
                        </div>

                        {/* Job cards */}
                         {/* <JobsCard searchParams={currentSearchParams}/> */}

                           <div className="mt-4 flex flex-col gap-4">
                            {jobs.map((job : Jobs) => {
                                // const BadgeIcon = job.badge?.icon;
                                return (
                                    <Link href={`/brows-jobs/${job._id}`} key={job.title}>
                                    <article 
                                       
                                        className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#12121a] p-4"
                                    >
                                        {/* Company logo */}
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                                            <BriefcaseIcon className="size-5 text-white/40" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h2 className="text-sm font-semibold text-white">
                                                        {job.title}
                                                    </h2>
                                                    <p className="mt-1 text-xs text-white/50">
                                                        {/* {job.company} •{' '}
                                                        {job.location} */}
                                                        {job.categoryOfJob}•{' '}
                                                        {job.city}
                                                    </p>
                                                </div>
                                                <BookmarkIcon className="size-4 shrink-0 text-white/40" />
                                            </div>

                                            <div className="mt-3 flex flex-wrap items-center gap-2">
                                                <span className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                                                    <DollarSignIcon className="size-3" />
                                                    {job.salaryMax}
                                                </span>
                                                <span className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                                                    <ClockIcon className="size-3" />
                                                    {job.typesOfJob}
                                                </span>
                                                {/* {job.badge && BadgeIcon ? (
                                                    <span
                                                        className={`flex items-center gap-1 rounded-md border px-2 py-1 text-xs ${job.badge.style}`}
                                                    >
                                                        <BadgeIcon className="size-3" />
                                                        {job.badge.label}
                                                    </span>
                                                ) : null} */}
                                            </div>
                                        </div>
                                    </article>
                                    </Link>
                                    
                                );
                            })}
                        </div>

                        {/* Pagination */}
                        <nav className="mt-8 flex items-center justify-center gap-1.5 text-sm">
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/5"
                            >
                                <ChevronLeftIcon className="size-4" />
                            </button>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg bg-white font-medium text-black"
                            >
                                1
                            </button>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/5"
                            >
                                2
                            </button>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/5"
                            >
                                3
                            </button>
                            <span className="px-1 text-white/40">…</span>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/5"
                            >
                                42
                            </button>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:bg-white/5"
                            >
                                <ChevronRightIcon className="size-4" />
                            </button>
                        </nav>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BrowsJobsPage;
