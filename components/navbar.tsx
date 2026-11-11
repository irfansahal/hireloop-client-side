"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { cn } from "cn"

import logo from "@/app/assets/images/logo.png"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { authClient, useSession } from "@/lib/auth-client"
import { signOut } from "better-auth/api"


export function Navbar() {
  const pathname = usePathname()
  
  const { data : session , error } = useSession()
  console.log("from navbar",session);
  
  const NAV_LINKS = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
    { label: "Deshboard", href: `/dashboard/${session?.user?.role || "seeker"}` }
  ]
   
   const handleSignOut = async () => {
    await authClient.signOut()
   }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Image
            src={logo}
            alt="hireloop"
            width={154}
            height={44}
            fetchPriority="high"
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-7" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  pathname === link.href
                    ? "font-medium text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Separator orientation="vertical" className="h-5 bg-white/15" />

          <div className="flex items-center gap-3">
            {
              session?.user ? 
              <>
              <span> Welcome {session?.user?.name} </span>
              <button className="inline-flex h-9 items-center justify-center rounded-lg bg-[#5b5bf5] px-4 text-sm font-medium whitespace-nowrap text-white transition-colors outline-none hover:bg-[#4a4ae8] focus-visible:ring-3 focus-visible:ring-[#5b5bf5]/50 active:translate-y-px"
              onClick={handleSignOut}
              >
                Sign Out
              </button>
              </>
              : <>
              <Link
              href="/signIn"
              className="text-sm text-white/80 transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Sign In
            </Link>
            <Link
              href="/signUp"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#5b5bf5] px-4 text-sm font-medium whitespace-nowrap text-white transition-colors outline-none hover:bg-[#4a4ae8] focus-visible:ring-3 focus-visible:ring-[#5b5bf5]/50 active:translate-y-px"
            >
              Get Started
            </Link>
              </>
            }
          </div>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:bg-white/10 hover:text-white md:hidden"
              />
            }
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="gap-0 border-white/10 bg-[#0a0a0f] text-white"
          >
            <SheetHeader className="border-b border-white/10 pr-10">
              <SheetTitle className="text-white">
                <Image
                  src={logo}
                  alt="hireloop"
                  width={154}
                  height={44}
                  className="h-7 w-auto"
                />
              </SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                    pathname === link.href
                      ? "font-medium text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-2 border-t border-white/10 p-4">
            {
              session?.user ? `Welcome ${session?.user.name}` : <>
                  <Link
                href="/signIn"
                className="inline-flex h-9 items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 text-sm font-medium text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                Sign In
              </Link>
              <Link
                href="/signUp"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#5b5bf5] px-4 text-sm font-medium whitespace-nowrap text-white transition-colors outline-none hover:bg-[#4a4ae8] focus-visible:ring-3 focus-visible:ring-[#5b5bf5]/50 active:translate-y-px"
              >
                Get Started
              </Link>
              </>
            }
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
