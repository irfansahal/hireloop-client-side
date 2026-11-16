"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

export const updateUserRole = async (userId: string, role: string) => {
    try {
        // better-auth admin plugin checks the caller is an admin
        await auth.api.setRole({
            // the plugin types only the default roles, our DB uses custom ones
            body: { userId, role: role as "user" | "admin" },
            headers: await headers(),
        });
        revalidatePath("/dashboard/admin/users");
        return { success: true };
    } catch {
        return { success: false };
    }
};
