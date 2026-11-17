// import { getUsers } from '@/lib/api/jobs';
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
import RoleSelect from './RoleSelect';
import { getUsers } from '@/lib/actions/better-auth-user';

type AdminUser = {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
};

const roleStyles: Record<string, string> = {
    admin: 'bg-violet-500 text-white',
    recruiter: 'bg-amber-400 text-black',
    seeker: 'bg-emerald-500 text-white',
};

const AdminUsersPage = async () => {
    const result = await getUsers();
    const users = (result.users ?? []) as AdminUser[];

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 pb-16">
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Manage Users
                </h1>
                <p className="text-sm text-muted-foreground">
                    View all users and change their role.
                </p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle>All Users</CardTitle>
                    <CardDescription>
                        {users.length} user{users.length === 1 ? '' : 's'}{' '}
                        registered
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
                                    Role
                                </TableHead>
                                <TableHead className="px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Join Date
                                </TableHead>
                                <TableHead className="rounded-r-lg px-4 py-3 text-xs font-bold tracking-wide text-black uppercase">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    className="bg-black text-white hover:bg-neutral-900 [&_td]:border-0"
                                >
                                    <TableCell className="rounded-l-lg px-4 py-3 font-medium">
                                        {user.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        {user.email}
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                                                roleStyles[user.role] ??
                                                'bg-neutral-800 text-white'
                                            }`}
                                        >
                                            {user.role}
                                        </span>
                                    </TableCell>
                                    <TableCell className="px-4 py-3">
                                        {user.createdAt.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="rounded-r-lg px-4 py-3">
                                        <RoleSelect
                                            userId={user.id}
                                            initialRole={user.role}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                            {users.length === 0 && (
                                <TableRow className="bg-black text-white hover:bg-transparent">
                                    <TableCell
                                        colSpan={5}
                                        className="px-4 py-6 text-center text-sm text-muted-foreground"
                                    >
                                        No users found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminUsersPage;
