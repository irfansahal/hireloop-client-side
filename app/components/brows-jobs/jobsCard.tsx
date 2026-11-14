
import { Jobs } from '@/app/dashboard/recruiter/jobs/page';
import { getJobs } from '@/lib/api/jobs';
import { BookmarkIcon, BriefcaseIcon, ClockIcon, DollarSignIcon, FlameIcon, ZapIcon } from 'lucide-react';
import React from 'react';

const jobs = [
    {
        title: 'Senior Product Designer',
        company: 'TechFlow Systems',
        location: 'San Francisco, CA (Remote)',
        salary: '$140k - $180k',
        type: 'Full-time',
        badge: { label: 'Easy Apply', style: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10', icon: ZapIcon },
    },
    {
        title: 'Lead Frontend Engineer',
        company: 'FinTech Solutions',
        location: 'New York, NY',
        salary: '$151k - $170k',
        type: 'Hybrid',
    },
    {
        title: 'UX Researcher',
        company: 'CreativeStudio',
        location: 'Austin, TX',
        salary: '$105k - $145k',
        type: 'Contract',
    },
    {
        title: 'Machine Learning Engineer',
        company: 'HealthAI Corp',
        location: 'Boston, MA (Remote)',
        salary: '$180k - $250k',
        type: 'Senior',
        badge: { label: 'Hot Job', style: 'text-amber-400 border-amber-500/30 bg-amber-500/10', icon: FlameIcon },
    },
];

const JobsCard = async (
  searchParams
:{
  searchParams: string
}) => {
    //  const search = await searchParams
    // const urlSearch = new URLSearchParams(search as Record<string, string>)
    //  const quary = urlSearch.toString()
    //  const jobs = await getJobs()

   console.log(searchParams);
   

    return (
        <>
             <div className="mt-4 flex flex-col gap-4">
                            {jobs.map((job) => {
                                // const BadgeIcon = job.badge?.icon;
                                return (
                                    <article
                                        key={job.title}
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
                                );
                            })}
                        </div>
        </>
    );
};

export default JobsCard;