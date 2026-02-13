'use client'

import { useEffect } from "react";
import Home from "./home/page";


export default function Page() {

  useEffect(() => {

    async function init() {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
      } catch (error: any) {
        console.error(error.message)
      }
    }
    init()
  }, [])

  return (
    <Home />
  );
}


