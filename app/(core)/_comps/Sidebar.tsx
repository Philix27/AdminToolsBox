"use client"

import { useState } from "react"
import Link from "next/link"
import { AppPages, StylesUtils, cn } from "@/lib"
import { ArrowDown, ArrowUp, LayoutDashboard } from "lucide-react"

import { TextB, TextH } from "@/app/comps"

import { ISection, data } from "./SidebarData"
import { SidebarGroup } from "./SidebarGroup"

export function Sidebar(props: { className?: string }) {
  return (
    <div
      className={cn(
        `fixed
        w-[250px] border-l-[2px] bg-primary pt-4 hidden md:block
        border-r-2 border-secondary mt-[${StylesUtils.navbarHeight}]`,
        props.className
      )}
      style={{ height: `calc(100vh - ${StylesUtils.navbarHeight})` }}
    >
      <Link href={AppPages.dashboard}>
       <div
        className={`
            px-4 pb-2 flex items-center
            justify-between mb-2
            border-b-2 border-secondary 
          `}
      >
        <TextH className={"text-muted-foreground"} v="h5">
          Dashboard
        </TextH>
        <LayoutDashboard size={13.5} />
      </div>
      </Link>

      {data.map((item, i) => (
        <div key={i}>
          <SidebarGroup section={item} />
        </div>
      ))}
    </div>
  )
}
