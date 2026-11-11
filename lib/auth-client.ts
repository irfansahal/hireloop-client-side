import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins"

import type { auth } from "@/lib/auth"

// Single auth client shared by the whole app.
// inferAdditionalFields makes the client aware of server-side user fields
// (like `role`), so signUp.email() accepts and types them.
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [inferAdditionalFields<typeof auth>()],
})

export const { signIn, signUp, signOut , useSession } = authClient
