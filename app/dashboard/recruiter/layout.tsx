
import { requireRole } from '@/lib/core/server';
import React from 'react';

const RecruiterDashboard = async ({children} : { children : React.ReactNode }) => {
    await requireRole("recruiter")
    return children
};

export default RecruiterDashboard;