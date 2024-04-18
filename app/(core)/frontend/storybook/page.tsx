"use client"

import React from "react"
import { StylesUtils } from "@/lib"

export default function StorybookPage() {
  return (
    <div
      className={`w-full ml-[250px] min-h-full mt-[${StylesUtils.navbarHeight}]`}
      style={{ height: `calc(100vh - ${StylesUtils.navbarHeight})` }}
    >
      <iframe className="h-full w-full" src="http://localhost:5100/" />
    </div>
  )
}
