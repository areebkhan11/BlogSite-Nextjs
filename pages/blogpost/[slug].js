import { useRouter } from 'next/router'
import React from 'react'

export default function Slug() {
    const router =  useRouter();
    console.log("router--->>>",router)
    const {slug} = router.query
      return (
    <div>{slug}</div>
  )
}
