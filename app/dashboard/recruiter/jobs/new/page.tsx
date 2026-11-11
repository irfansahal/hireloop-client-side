"use client"
import React, { useState } from 'react';
import { BriefcaseIcon, FileTextIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createJobs } from '@/lib/actions/jobs';

type JobType = "full-time" | "part-time" | "contract" | "internship" | "remote"

export type JobFormData = {
    benefits: string;
    city : string ;
    country : string;
    deadline: string ;
   requirements : string;
   responsibilities : string;
   salaryMax : string; 
   salaryMin : string ;
   title : string;
}

const jobCategories = [
    'Software Development',
    'Design',
    'Marketing',
    'Sales',
    'Customer Support',
    'Finance',
    'Human Resources',
];

const jobTypes : JobType[] = ['full-time', 'part-time', 'remote', 'contract', 'internship'];

const currencies = ['USD', 'BDT', 'EUR', 'GBP', 'INR'];

function Field({
    label,
    htmlFor,
    hint,
    children,
}: {
    label: string;
    htmlFor?: string;
    hint?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={htmlFor}>{label}</Label>
            {children}
            {hint ? (
                <p className="text-xs text-muted-foreground">{hint}</p>
            ) : null}
        </div>
    );
}

const AddJobPage = () => {
    
    const [ selectValue , setSelectValue ] = useState({
         currency : "",
         categoryOfJob : "",
         typesOfJob : ""
    });

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

     const formData = new FormData(e.currentTarget);
     const collectedData = Object.fromEntries(formData.entries())as JobFormData;
     
     const jobData = {
         ...collectedData,
         currency : selectValue.currency,
         categoryOfJob : selectValue.categoryOfJob,
         typesOfJob : selectValue.typesOfJob
        }
        
        const result = await createJobs(jobData);
        console.log(result);
        console.log("jobData",jobData);
      
    }

    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 pb-16">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Post a Job
                </h1>
                <p className="text-sm text-muted-foreground">
                    Fill in the details below to publish a new job opening.
                </p>
            </header>

            <form className="flex flex-col gap-6" onSubmit={submitHandler}>
                {/* Job Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BriefcaseIcon className="size-4 text-muted-foreground" />
                            Job Info
                        </CardTitle>
                        <CardDescription>
                            Basic details candidates will see in the job list.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="grid gap-4">
                        <Field label="Job Title" htmlFor="job-title">
                            <Input
                                id="job-title"
                                name="title"
                                placeholder="e.g. Senior Frontend Developer"
                            />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Job Category" htmlFor="job-category">
                                <Select 
                                value={selectValue.categoryOfJob}
                                onValueChange={(value) => setSelectValue({...selectValue, categoryOfJob : value || ""})}
                                >
                                    <SelectTrigger
                                        id="job-category"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {jobCategories.map((category) => (
                                            <SelectItem
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>

                            <Field label="Job Type" htmlFor="job-type">
                                <Select 
                                value={selectValue.typesOfJob}
                                onValueChange={(value)=>setSelectValue({...selectValue, typesOfJob : value || ""})}
                                >
                                    <SelectTrigger
                                        id="job-type"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Select a job type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {jobTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <Field label="Salary Min" htmlFor="salary-min">
                                <Input
                                    id="salary-min"
                                    name="salaryMin"
                                    type="number"
                                    placeholder="e.g. 3000"
                                />
                            </Field>
                            <Field label="Salary Max" htmlFor="salary-max">
                                <Input
                                    id="salary-max"
                                    name="salaryMax"
                                    type="number"
                                    placeholder="e.g. 6000"
                                />
                            </Field>
                            <Field label="Currency" htmlFor="currency">
                                <Select defaultValue="USD"
                                value={selectValue.currency}
                                onValueChange={(value)=>setSelectValue({...selectValue, currency : value || ""})}
                                >
                                    <SelectTrigger
                                        id="currency"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Currency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {currencies.map((currency) => (
                                            <SelectItem
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <Field label="City" htmlFor="city">
                                <Input
                                    id="city"
                                    name="city"
                                    placeholder="e.g. Dhaka"
                                />
                            </Field>
                            <Field label="Country" htmlFor="country">
                                <Input
                                    id="country"
                                    name="country"
                                    placeholder="e.g. Bangladesh"
                                />
                            </Field>
                            <Field
                                label="Application Deadline"
                                htmlFor="deadline"
                            >
                                <Input
                                    id="deadline"
                                    name="deadline"
                                    type="date"
                                />
                            </Field>
                        </div>

                        <div className="flex items-center justify-between gap-4 rounded-xl border bg-muted/40 px-4 py-3">
                            <div className="flex items-start gap-3">
                                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                                <div className="flex flex-col gap-0.5">
                                    <Label htmlFor="remote">Remote Job</Label>
                                    <p className="text-xs text-muted-foreground">
                                        Toggle this on if the role can be done
                                        fully remotely.
                                    </p>
                                </div>
                            </div>
                            <Switch id="remote" name="remote" />
                        </div>
                    </CardContent>
                </Card>

                {/* Job Description */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileTextIcon className="size-4 text-muted-foreground" />
                            Job Description
                        </CardTitle>
                        <CardDescription>
                            Describe the role so candidates know what to
                            expect.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="grid gap-4">
                        <Field
                            label="Responsibilities"
                            htmlFor="responsibilities"
                            hint="One responsibility per line."
                        >
                            <Textarea
                                id="responsibilities"
                                name="responsibilities"
                                className="min-h-40"
                                placeholder={'Build and maintain product features\nCollaborate with the design team'}
                            />
                        </Field>

                        <Field
                            label="Requirements"
                            htmlFor="requirements"
                            hint="One requirement per line."
                        >
                            <Textarea
                                id="requirements"
                                name="requirements"
                                className="min-h-40"
                                placeholder={'3+ years of experience with React\nStrong communication skills'}
                            />
                        </Field>

                        <Field
                            label="Benefits"
                            htmlFor="benefits"
                            hint="Optional. One benefit per line."
                        >
                            <Textarea
                                id="benefits"
                                name="benefits"
                                className="min-h-28"
                                placeholder={'Health insurance\nFlexible working hours'}
                            />
                        </Field>
                    </CardContent>
                </Card>

                <div className="flex items-center justify-end gap-2">
                    <Button type="button" variant="outline">
                        Cancel
                    </Button>
                    <Button type="submit">Post Job</Button>
                </div>
            </form>
        </div>
    );
};

export default AddJobPage;
