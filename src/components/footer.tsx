import Link from 'next/link'
import { Separator } from './ui/separator'
import React from 'react'

function footer() {
  return (
    <footer className='bg-black p-8 space-y-2'>
      <div className='text-white flex space-x-4 text-sm md:text-base'>
        <Link href='#'>Contact us</Link>
        <Link href='#'>Privacy and terms</Link>
        <Link href='#'>Accessibility</Link>
      </div>
      <Separator />
      <div className='text-white flex space-x-4 text-sm md:text-base'>
      <Link href='#'>Privacy statement</Link>
      <Link href='#'>Terms of use</Link>
      <Link href='#'>Accessibility statement</Link>
      </div>

    </footer>
  )
}

export default footer