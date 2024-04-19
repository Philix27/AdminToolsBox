"use client"

import React from "react"
import { AppIFrame } from "@/(core)/_comps/Iframe"
import { StylesUtils } from "@/lib"

export default function StorybookPage() {
  return <AppIFrame url="http://localhost:5100/" />
}
