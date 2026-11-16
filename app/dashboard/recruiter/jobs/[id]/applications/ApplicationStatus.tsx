'use client';

import { useState } from 'react';
import { TableCell } from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const STATUS_OPTIONS = [
    'applied',
    'review',
    'interview',
    'shortlisted',
    'rejected',
    'offered',
];

const statusStyles: Record<string, string> = {
    applied: 'bg-amber-400 text-black',
    review: 'bg-blue-500 text-white',
    interview: 'bg-violet-500 text-white',
    shortlisted: 'bg-emerald-500 text-white',
    rejected: 'bg-red-500 text-white',
    offered: 'bg-green-600 text-white',
};

const ApplicationStatus = ({
    initialStatus = 'applied',
}: {
    initialStatus?: string;
}) => {
    const [status, setStatus] = useState(initialStatus);

    return (
        <>
            <TableCell className="px-4 py-3">
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                        statusStyles[status] ?? 'bg-muted text-foreground'
                    }`}
                >
                    {status}
                </span>
            </TableCell>
            <TableCell className="rounded-r-lg px-4 py-3">
                <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger size="sm" className="w-32">
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        {STATUS_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </TableCell>
        </>
    );
};

export default ApplicationStatus;
