
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
            
        </>
    );
};

export default JobsCard;