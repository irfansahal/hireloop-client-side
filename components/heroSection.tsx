import Image from "next/image"
import {
  BarChart3,
  Briefcase,
  MapPin,
  PartyPopper,
  Search,
  Star,
} from "lucide-react"

import globe from "@/app/assets/images/globe.png"
import gridBg from "@/app/assets/images/cta-bg.png"

const TRENDING = ["Product Designer", "AI Engineering", "DevOps Engineer"]

const STATS = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: BarChart3, value: "12K", label: "Companies" },
  { icon: Search, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

const HeroSection = () => {
    return(
        <div style={{backgroundImage : `url(${globe.src})`,
            backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
        }}>
         <section className="relative overflow-hidden  text-white h-[90vw]">
      {/* wireframe grid backdrop behind the stats */}
      <Image
        src={gridBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] w-full object-cover object-top opacity-70"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-12 pb-14 text-center">
        {/* Badge */}
        <div className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-white/25 sm:block" />
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            <span className="flex size-5 items-center justify-center rounded bg-amber-500">
              <PartyPopper className="size-3 text-black" />
            </span>
            <span className="text-xs font-semibold">50,000+</span>
            <span className="text-xs text-white/50">NEW JOBS THIS MONTH</span>
          </div>
          <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-white/25 sm:block" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search bar */}
        <div className="mt-8 flex w-full max-w-2xl items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 pl-4">
          <Search className="size-4 shrink-0 text-white/40" />
          <label className="sr-only" htmlFor="search-query">
            Job title, skill or company
          </label>
          <input
            id="search-query"
            type="text"
            placeholder="Job title, skill or company"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
          />

          <span className="h-6 w-px bg-white/10" />

          <MapPin className="size-4 shrink-0 text-white/40" />
          <label className="sr-only" htmlFor="search-location">
            Location or Remote
          </label>
          <input
            id="search-location"
            type="text"
            placeholder="Location or Remote"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
          />

          <button
            type="button"
            aria-label="Search jobs"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#5b5bf5] transition-colors hover:bg-[#4a4ae8]"
          >
            <Search className="size-4" />
          </button>
        </div>

        {/* Trending positions */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-white/50">
          <span>Trending Positions</span>
          {TRENDING.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Globe with overlay text */}
        <div className="relative mt-60 flex justify-center">
          {/* <Image
            src={globe}
            alt=""
            aria-hidden="true"
            width={1440}
            height={1882}
            className="w-[560px] max-w-full md:w-[720px]"
          /> */}
          <p className=" inset-0 flex max-w-md items-center justify-center px-6 text-center text-lg font-medium md:text-2xl">
            Assisting over 15,000 job seekers find their dream positions.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-black p-4 text-left backdrop-blur-sm md:p-5"
            >
              <Icon className="size-4 text-white/70" />
              <div className="mt-6 text-3xl font-bold">{value}</div>
              <div className="mt-1 text-xs text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    )
}

export default HeroSection