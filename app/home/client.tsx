"use client"

import React from "react"
import { Button } from "@/comps"
import { AppImg } from "@/lib"
import { TauriFn } from "@/tauri/fn"

import { SiteHeader } from "./_comps"
import FooterSection from "./footer"
import HeroSection from "./hero"
import HeroCenter from "./heroC"
import JumbutronSection from "./jumbutron"

export default function HomeClient() {
  const fn = new TauriFn()
  return (
    <div>
      <SiteHeader />
      <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 w-full">
        <HeroCenter
          title={"Budget & Invoice manager"}
          subtitle={`Create and manage all your cryptocurrency based expenses. Send and track invoices.`}
        />
        <Button
          onClick={() => {
            fn.greet({ name: "Philix" })
          }}
        >
          Click me
        </Button>
        <HeroSection
          img={AppImg.chain}
          title={"Expense management"}
          subtitle={`Create and manage budgets for your various needs.`}
        />
        <JumbutronSection
          title={
            "Beautifully designed components built with Radix UI and Tailwind CSS."
          }
          subtitle="Beautifully designed components built with Radix UI and Tailwind CSS."
        />
        <HeroSection
          imgFirst
          img={AppImg.invoice}
          title={"Invoice management"}
          subtitle={`Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.`}
        />

        <FooterSection />
      </section>
    </div>
  )
}
