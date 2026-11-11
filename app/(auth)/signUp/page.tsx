"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

const inputClass =
  "h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#5b5bf5]"

const ROLES = [
  { value: "seeker", label: "Job Seeker" },
  { value: "recruiter", label: "Recruiter" },
  { value: "admin", label: "Admin" },
]

export default  function SignUpPage() {

   const router = useRouter()

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const userData = Object.fromEntries(new FormData(event.currentTarget))
    console.log("Sign up form data:", userData)

    const { data  , error } = await signUp.email({
        email : userData.email as string, // user email address
        password : userData.password as string, // user password -> min 8 characters by default
        name : userData.name as string, // u
        role : userData.role as "seeker" | "recruiter" | "admin", // account type picked in the form
        callbackURL: "/" 
    });
    console.log("data", data, error);
    
    if(!error){
       router.refresh()
       router.push("/")
    }
  }

  return (
    <div className="flex min-h-[calc(100svh-4rem)] items-center justify-center bg-[#0a0a0f] px-4 py-12 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#12121a] p-6 md:p-8">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="mt-1 text-sm text-white/60">
          Start finding your dream job today.
        </p>

        <form onSubmit={handleSignUp} className="mt-6 flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm text-white/70"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className={inputClass}
            />
          </div>

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
              placeholder="Create a password"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm text-white/70"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Repeat your password"
              className={inputClass}
            />
          </div>

          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-1.5 p-0 text-sm text-white/70">
              I am signing up as
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {ROLES.map((role) => (
                <label
                  key={role.value}
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-2 py-2.5 text-center text-sm text-white/70 transition-colors has-[:checked]:border-[#5b5bf5] has-[:checked]:bg-[#5b5bf5]/15 has-[:checked]:text-white focus-within:ring-2 focus-within:ring-[#5b5bf5]/50"
                >
                  <input
                    type="radio"
                    name="role"
                    value={role.value}
                    defaultChecked={role.value === "seeker"}
                    className="sr-only"
                  />
                  {role.label}
                </label>
              ))}
            </div>
          </fieldset>

          <Button
            type="submit"
            size="lg"
            className="mt-1 h-10 w-full bg-[#5b5bf5] text-white hover:bg-[#4a4ae8]"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="font-medium text-[#5b5bf5] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
