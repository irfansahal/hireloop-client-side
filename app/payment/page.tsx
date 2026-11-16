// "use client"

// import { useState } from "react"
import { CreditCardIcon, LockIcon, ShieldCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const inputClass =
    "h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#5b5bf5]"

// Plan details — swap these for real plan data when pricing is finalized
const plan = {
    name: "HireLoop Pro",
    price: 20.00,
    period: "month",
    features: [
        "Unlimited job applications",
        "Priority support",
        "Profile highlighted to recruiters",
    ],
}

const Payment = async ({ searchParams }: {searchParams : Promise<{canceled? : string }>}) => {
    // const [loading, setLoading] = useState(false)

     const { canceled } = await searchParams

  if (canceled) {
    console.log(
      'Order canceled -- continue to shop around and check out when you\'re ready.'
    )
  }

    // async function handlePay(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    //     setLoading(true)
 
    //     // TODO: call the backend to create a Stripe Checkout session,
    //     // then redirect to session.url (the hosted Stripe payment page)
    //     console.log("Payment intent for plan:", plan.name)

    //     setLoading(false)
    // }

    return (
        <div className="flex min-h-[calc(100svh-4rem)] items-center justify-center bg-[#0a0a0f] px-4 py-12 text-white">
            <div className="w-full max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold">Complete your payment</h1>
                    <p className="mt-1 text-sm text-white/60">
                        You&apos;re one step away from upgrading your account.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Order summary */}
                    <div className="rounded-2xl border border-white/10 bg-[#12121a] p-6">
                        <h2 className="text-base font-semibold">Order summary</h2>

                        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">{plan.name}</span>
                                <span className="text-sm text-white/60">
                                    ${plan.price}/{plan.period}
                                </span>
                            </div>
                            <ul className="mt-3 space-y-2">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2 text-sm text-white/70"
                                    >
                                        <ShieldCheckIcon className="h-4 w-4 shrink-0 text-[#5b5bf5]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                            <span className="text-sm text-white/60">Total due today</span>
                            <span className="text-lg font-bold">${plan.price}</span>
                        </div>

                        <p className="mt-4 flex items-center gap-2 text-xs text-white/40">
                            <LockIcon className="h-3.5 w-3.5" />
                            Payments are processed securely by Stripe.
                        </p>
                    </div>

                    {/* Payment information */}
                    <div className="rounded-2xl border border-white/10 bg-[#12121a] p-6">
                        <h2 className="text-base font-semibold">Payment information</h2>

                        {/* <form onSubmit={handlePay} className="mt-4 flex flex-col gap-4">
                            <div>
                                <label
                                    htmlFor="cardholder"
                                    className="mb-1.5 block text-sm text-white/70"
                                >
                                    Cardholder name
                                </label>
                                <input
                                    id="cardholder"
                                    name="cardholder"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="cardNumber"
                                    className="mb-1.5 block text-sm text-white/70"
                                >
                                    Card number
                                </label>
                                <div className="relative">
                                    <input
                                        id="cardNumber"
                                        name="cardNumber"
                                        type="text"
                                        required
                                        placeholder="1234 1234 1234 1234"
                                        className={`${inputClass} pr-10`}
                                    />
                                    <CreditCardIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="expiry"
                                        className="mb-1.5 block text-sm text-white/70"
                                    >
                                        Expiry date
                                    </label>
                                    <input
                                        id="expiry"
                                        name="expiry"
                                        type="text"
                                        required
                                        placeholder="MM/YY"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="cvc"
                                        className="mb-1.5 block text-sm text-white/70"
                                    >
                                        CVC
                                    </label>
                                    <input
                                        id="cvc"
                                        name="cvc"
                                        type="text"
                                        required
                                        placeholder="123"
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={loading}
                                className="mt-1 h-10 w-full bg-[#5b5bf5] text-white hover:bg-[#4a4ae8]"
                            >
                                {loading ? "Redirecting..." : `Pay $${plan.price}`}
                            </Button>

                            <p className="text-center text-xs text-white/40">
                                By paying you agree to our Terms & Privacy Policy.
                            </p>
                        </form> */}

                          <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link" className="mt-1 h-10 w-full bg-[#5b5bf5] text-white hover:bg-[#4a4ae8]">
          Checkout
        </button>
      </section>
    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
