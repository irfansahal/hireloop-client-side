"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

const inputClass =
  "h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#5b5bf5]"

export default function SignInPage() {
  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.currentTarget))
    console.log("Sign in form data:", data)
    // TODO: integrate real sign in later
  }

  return (
    <div className="flex min-h-[calc(100svh-4rem)] items-center justify-center bg-[#0a0a0f] px-4 py-12 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#12121a] p-6 md:p-8">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="mt-1 text-sm text-white/60">
          Sign in to continue your job search.
        </p>

        <form onSubmit={handleSignIn} className="mt-6 flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm text-white/70"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm text-white/70"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className={inputClass}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-1 h-10 w-full bg-[#5b5bf5] text-white hover:bg-[#4a4ae8]"
          >
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link
            href="/signUp"
            className="font-medium text-[#5b5bf5] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
