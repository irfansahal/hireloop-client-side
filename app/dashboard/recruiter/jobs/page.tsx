import React from 'react';
import { PencilIcon, Trash2Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { getJobs } from '@/lib/api/jobs';
import DeleteJobDailog from '@/app/components/DeleteDailog';

export type Jobs = {
    benefits :  string;
    categoryOfJob :  string;
    city : string ;
    country : string;
    currency : string;
    deadline : string; 
    requirements : string;
    responsibilities : string; 
    salaryMax : string;
    salaryMin : string; 
    title : string ;
    typesOfJob : string;
    _id : string ;

}

const ManageJobs = async () => {
       const jobs = await getJobs();

       console.log("Jobs", jobs);
       
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 pb-16">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Manage Jobs
                </h1>
                <p className="text-sm text-muted-foreground">
                    View, edit or remove your posted jobs.
                </p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle>Posted Jobs</CardTitle>
                    <CardDescription>1 job posted</CardDescription>
                </CardHeader>

                <CardContent>
                    <Table className="border-separate border-spacing-x-2 border-spacing-y-1.5">
                        <TableHeader className="bg-amber-400 [&_tr]:border-0 [&_tr]:shadow-none">
                            <TableRow className="bg-amber-400 hover:bg-amber-400">
                                <TableHead className="rounded-l-lg px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Job Title
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Category
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Type
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Location
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Salary
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Deadline
                                </TableHead>
                                <TableHead className="rounded-r-lg px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        {jobs.map((item :Jobs)=>{
                            return (
                                <TableBody key={item._id}>
                            <TableRow className="bg-muted/60 hover:bg-muted [&_td]:border-0">
                                <TableCell className="rounded-l-lg px-4 py-3 font-medium">
                                    {item.title}
                                </TableCell>
                                <TableCell className="px-4 py-3">
                                    {item.categoryOfJob}
                                </TableCell>
                                <TableCell className="px-4 py-3">
                                    <span className="inline-flex items-center rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-medium text-black capitalize">
                                        {item.typesOfJob}
                                    </span>
                                </TableCell>
                                <TableCell className="px-4 py-3">
                                    {item.city}
                                </TableCell>
                                <TableCell className="px-4 py-3">
                                    {item.salaryMax}
                                </TableCell>
                                <TableCell className="px-4 py-3">
                                    {item.deadline}
                                </TableCell>
                                <TableCell className="rounded-r-lg px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                        >
                                            <PencilIcon />
                                            Edit
                                        </Button>
                                        <DeleteJobDailog job={item}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                            )
                        })}
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default ManageJobs;
