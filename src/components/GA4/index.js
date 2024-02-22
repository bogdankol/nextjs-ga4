'use client'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const measurementId = 'G-P2F6B9SXNT'

export default function GA4() {

  const pathname = usePathname()

  useEffect(() => {
    ReactGA.initialize(measurementId)
  }, [])

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: pathname,
      title: document.title
    })
  }, [pathname])

  return null

}