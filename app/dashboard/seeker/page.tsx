import React from 'react';
import {
    BellIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    DownloadIcon,
    FileCodeIcon,
    FileTextIcon,
    MailIcon,
    SearchIcon,
} from 'lucide-react';
import { getJobApplications } from '@/lib/api/jobs';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const stats = [
    { label: 'Total Applied', value: '24', color: 'text-white' },
    { label: 'Shortlisted', value: '8', color: 'text-white' },
    { label: 'Interviews', value: '3', color: 'text-amber-400' },
    { label: 'Success Rate', value: '12%', color: 'text-emerald-400' },
];

const statusStyles: Record<string, string> = {
    Applied: 'bg-white/10 text-white/70',
    Review: 'bg-amber-500/15 text-amber-400',
    Shortlisted: 'bg-blue-500/15 text-blue-400',
    Rejected: 'bg-red-500/15 text-red-400',
    Offered: 'bg-emerald-500/15 text-emerald-400',
};

const applications = [
    {
        title: 'Senior Frontend Engineer',
        meta: 'Full-time • Remote',
        company: 'Stark Industries',
        applied: '2 hours ago',
        status: 'Applied',
        icon: FileCodeIcon,
        iconStyle: 'bg-white/10 text-white/60',
    },
    {
        title: 'Product Designer',
        meta: 'Contract • Hybrid',
        company: 'Cyberdyne Systems',
        applied: '1 day ago',
        status: 'Review',
        icon: FileTextIcon,
        iconStyle: 'bg-white/10 text-white/60',
    },
    {
        title: 'Lead Data Scientist',
        meta: 'Full-time • On-site',
        company: 'Wayne Enterprises',
        applied: '4 days ago',
        status: 'Shortlisted',
        icon: FileTextIcon,
        iconStyle: 'bg-white/10 text-white/60',
    },
    {
        title: 'Cloud Architect',
        meta: 'Full-time • Remote',
        company: 'Oscorp Tech',
        applied: '1 week ago',
        status: 'Rejected',
        icon: FileCodeIcon,
        iconStyle: 'bg-red-500 text-white',
    },
    {
        title: 'AI Research Engineer',
        meta: 'Full-time • Hybrid',
        company: 'Hoooli Corp',
        applied: '2 weeks ago',
        status: 'Offered',
        icon: FileTextIcon,
        iconStyle: 'bg-white/10 text-white/60',
    },
];

const SeekerDeshboardPage = async () => {
    
    const session = await auth.api.getSession({
        headers : await headers()
    });
     
    const Applications = await getJobApplications(`applicationId=${session?.user.id}`)
    console.log("applications",Applications);
    
    
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            {/* Topbar */}
            <header className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
                <div className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-white/10 bg-[#12121a] px-3 py-2">
                    <SearchIcon className="size-4 text-white/40" />
                    <input
                        type="text"
                        placeholder="Search applications..."
                        className="w-full bg-transparent text-sm text-white/70 outline-none placeholder:text-white/40"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button type="button" aria-label="Notifications">
                        <BellIcon className="size-5 text-white/50" />
                    </button>
                    <button type="button" aria-label="Messages">
                        <MailIcon className="size-5 text-white/50" />
                    </button>
                    <div className="flex size-8 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-400">
                        R
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-5xl px-6 py-8">
                {/* Page header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold">
                            My Applications
                        </h1>
                        <p className="mt-1 text-sm text-white/50">
                            Track your job applications and interview progress
                            in real-time.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex rounded-lg border border-white/10 bg-[#12121a] p-1 text-sm">
                            <button
                                type="button"
                                className="rounded-md bg-white/10 px-4 py-1.5 text-white"
                            >
                                Active
                            </button>
                            <button
                                type="button"
                                className="px-4 py-1.5 text-white/50"
                            >
                                Archived
                            </button>
                        </div>
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
                        >
                            <DownloadIcon className="size-4" />
                            Export PDF
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-white/10 bg-[#12121a] p-5"
                        >
                            <p className="text-sm text-white/50">
                                {stat.label}
                            </p>
                            <p
                                className={`mt-3 text-3xl font-semibold ${stat.color}`}
                            >
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Table */}
                <div className="mt-6 rounded-xl border border-white/10 bg-[#12121a]">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/40">
                                <th className="px-6 py-4 font-medium">
                                    Job Title
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Company
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Applied
                                </th>
                                <th className="px-6 py-4 font-medium">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right font-medium">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app) => {
                                const Icon = app.icon;
                                return (
                                    <tr
                                        key={app.title}
                                        className="border-b border-white/5 last:border-0"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${app.iconStyle}`}
                                                >
                                                    <Icon className="size-4" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white">
                                                        {app.title}
                                                    </p>
                                                    <p className="mt-0.5 text-xs text-white/40">
                                                        {app.meta}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-white/70">
                                            {app.company}
                                        </td>
                                        <td className="px-6 py-4 text-white/50">
                                            {app.applied}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[app.status]}`}
                                            >
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                type="button"
                                                className="font-medium text-white/70 hover:text-white"
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-sm">
                        <p className="text-white/40">
                            Showing 1-5 of 24 applications
                        </p>
                        <div className="flex items-center gap-1.5">
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/50"
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
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/50"
                            >
                                2
                            </button>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/50"
                            >
                                3
                            </button>
                            <button
                                type="button"
                                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-white/50"
                            >
                                <ChevronRightIcon className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeekerDeshboardPage;
