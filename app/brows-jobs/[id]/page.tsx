import ApplyButton from '@/app/components/brows-jobs/applyButton';
import { Jobs } from '@/app/dashboard/recruiter/jobs/page';
import { getJobById } from '@/lib/api/jobs';
import {
    BadgeCheckIcon,
    BanknoteIcon,
    BookmarkIcon,
    BriefcaseIcon,
    BuildingIcon,
    CalendarDaysIcon,
    ClockIcon,
    GraduationCapIcon,
    ImageIcon,
    MapPinIcon,
    MonitorIcon,
    GiftIcon,
    TargetIcon,
    WrenchIcon,
} from 'lucide-react';
import React from 'react';

// helpers: data comes as plain paragraphs, split them into list / chips
const splitSentences = (text = '') =>
    text
        .split(/\.\s+/)
        .map((s) => s.trim().replace(/\.$/, ''))
        .filter(Boolean);

const splitItems = (text = '') =>
    text
        .split(/[,.,]+/)
        .map((s) => s.trim())
        .filter(Boolean);

const formatSalary = (job: Jobs) => {
    const min = Number(job.salaryMin);
    const max = Number(job.salaryMax);
    if (Number.isNaN(min) && Number.isNaN(max)) return 'Negotiable';
    return `${job.currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
};

const benefitIcons = [
    BanknoteIcon,
    GiftIcon,
    CalendarDaysIcon,
    ClockIcon,
    GraduationCapIcon,
];

const JobDetailPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const oneJob: Jobs = await getJobById(id);

    const responsibilities = splitItems(oneJob.responsibilities);
    const requirementChips = splitItems(oneJob.requirements).filter(
        (item) => item.length <= 20,
    );
    const requirementList = splitSentences(oneJob.requirements);
    const benefits = splitItems(oneJob.benefits);

    const description = `Join our team as a ${oneJob.title} in ${oneJob.city}, ${oneJob.country}. This is a ${oneJob.typesOfJob} role in our ${oneJob.categoryOfJob} team, and applications are open until ${oneJob.deadline}.`;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="mx-auto max-w-6xl px-4 py-8">
                {/* Header */}
                <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white/5">
                                <BriefcaseIcon className="size-6 text-white/40" />
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold">
                                    {oneJob.title}
                                </h1>
                                <div className="mt-1.5 flex items-center gap-3 text-sm text-white/50">
                                    <span>
                                        {oneJob.city}, {oneJob.country}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-emerald-400">
                                        <BadgeCheckIcon className="size-4" />
                                        Verified Employer
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:bg-white/5"
                                aria-label="Save job"
                            >
                                <BookmarkIcon className="size-4"  />
                            </button>
                           <ApplyButton oneJob={oneJob}/>
                        </div>
                    </div>
                </section>

                {/* Quick info cards */}
                <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="rounded-xl border border-white/10 bg-[#12121a] p-4">
                        <div className="flex items-center gap-2 text-white/40">
                            <BanknoteIcon className="size-4" />
                            <span className="text-[11px] font-medium uppercase tracking-wide">
                                Salary Range
                            </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold">
                            {formatSalary(oneJob)}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#12121a] p-4">
                        <div className="flex items-center gap-2 text-white/40">
                            <MapPinIcon className="size-4" />
                            <span className="text-[11px] font-medium uppercase tracking-wide">
                                Location
                            </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold">
                            {oneJob.city} ({oneJob.country})
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#12121a] p-4">
                        <div className="flex items-center gap-2 text-white/40">
                            <MonitorIcon className="size-4" />
                            <span className="text-[11px] font-medium uppercase tracking-wide">
                                Job Type
                            </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold capitalize">
                            {oneJob.typesOfJob}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#12121a] p-4">
                        <div className="flex items-center gap-2 text-white/40">
                            <TargetIcon className="size-4" />
                            <span className="text-[11px] font-medium uppercase tracking-wide">
                                Experience
                            </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold">
                            Not specified
                        </p>
                    </div>
                </section>

                {/* Main content + sidebar */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        {/* Job description */}
                        <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                            <h2 className="text-base font-semibold">
                                Job Description
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-white/60">
                                {description}
                            </p>
                        </section>

                        {/* Responsibilities */}
                        <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                            <h2 className="text-base font-semibold">
                                Responsibilities
                            </h2>
                            <ul className="mt-4 flex flex-col gap-3">
                                {responsibilities.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-white/60"
                                    >
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white/30" />
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                        {item.endsWith('.') ? '' : '.'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Requirements */}
                        <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                            <h2 className="text-base font-semibold">
                                Requirements
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {requirementChips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/70"
                                    >
                                        <WrenchIcon className="size-3 text-white/40" />
                                        {chip}
                                    </span>
                                ))}
                            </div>

                            <ul className="mt-4 flex flex-col gap-3">
                                {requirementList.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-white/60"
                                    >
                                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white/30" />
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}.
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Benefits */}
                        <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                            <h2 className="text-base font-semibold">
                                Benefits
                            </h2>
                            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {benefits.map((benefit, index) => {
                                    const Icon =
                                        benefitIcons[
                                            index % benefitIcons.length
                                        ];
                                    return (
                                        <div
                                            key={benefit}
                                            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5"
                                        >
                                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                                                <Icon className="size-4 text-white/60" />
                                            </div>
                                            <span className="text-sm text-white/70">
                                                {benefit.charAt(0).toUpperCase() +
                                                    benefit.slice(1)}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="flex flex-col gap-6">
                        <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                            <h2 className="text-base font-semibold">
                                Company Overview
                            </h2>

                            <div className="mt-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#1a1a24] to-[#0d0d12]">
                                <ImageIcon className="size-8 text-white/20" />
                            </div>

                            <dl className="mt-5 flex flex-col divide-y divide-white/10">
                                <div className="flex items-center justify-between py-3">
                                    <dt className="text-xs uppercase tracking-wide text-white/40">
                                        Size
                                    </dt>
                                    <dd className="text-sm text-white/70">
                                        Not specified
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <dt className="text-xs uppercase tracking-wide text-white/40">
                                        Industry
                                    </dt>
                                    <dd className="text-sm text-white/70">
                                        {oneJob.categoryOfJob}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <dt className="text-xs uppercase tracking-wide text-white/40">
                                        Deadline
                                    </dt>
                                    <dd className="text-sm text-white/70">
                                        {oneJob.deadline}
                                    </dd>
                                </div>
                            </dl>

                            <button
                                type="button"
                                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10"
                            >
                                <BuildingIcon className="size-4" />
                                Visit Website
                            </button>
                        </section>

                        <section className="rounded-xl border border-white/10 bg-[#12121a] p-6">
                            <h2 className="text-base font-semibold">
                                Job Deadline
                            </h2>
                            <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
                                <CalendarDaysIcon className="size-4 text-white/40" />
                                Apply before {oneJob.deadline}
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;
