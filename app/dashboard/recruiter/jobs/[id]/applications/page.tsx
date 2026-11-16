import { getJobApplications } from '@/lib/api/jobs';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import ApplicationStatus from './ApplicationStatus';

export type Application = {
    _id: string;
    name: string;
    email: string;
    jobId: string;
    jobTitle: string;
    userId: string;
};

const JobApplicationPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    const applications: Application[] = await getJobApplications(
        `jobId=${id}`
    );
    console.log('applications', applications);

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 pb-16">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Job Applications
                </h1>
                <p className="text-sm text-muted-foreground">
                    Applications received for this job posting.
                </p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle>Applications</CardTitle>
                    <CardDescription>
                        {applications.length} application
                        {applications.length === 1 ? '' : 's'} found
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Table className="border-separate border-spacing-x-2 border-spacing-y-1.5">
                        <TableHeader className="bg-amber-400 [&_tr]:border-0 [&_tr]:shadow-none">
                            <TableRow className="bg-amber-400 hover:bg-amber-400">
                                <TableHead className="rounded-l-lg px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Name
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Email
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Job Title
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Status
                                </TableHead>
                                <TableHead className="rounded-r-lg px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Select Status
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        {applications.map((item) => {
                            return (
                                <TableBody key={item._id}>
                                    <TableRow className="bg-black text-white hover:bg-black [&_td]:border-0">
                                        <TableCell className="rounded-l-lg px-4 py-3 font-medium">
                                            {item.name}
                                        </TableCell>
                                        <TableCell className="px-4 py-3">
                                            {item.email}
                                        </TableCell>
                                        <TableCell className="px-4 py-3">
                                            <span className="inline-flex items-center rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-medium text-black capitalize">
                                                {item.jobTitle}
                                            </span>
                                        </TableCell>
                                        <ApplicationStatus />
                                    </TableRow>
                                </TableBody>
                            );
                        })}
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default JobApplicationPage;
