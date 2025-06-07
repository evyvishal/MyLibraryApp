import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
return (
    <Link href="/">
        <Image className='hidden lg:flex' src="/liblogo.jpg" width={160} height={120} alt='liblogo'/>
        <Image className='flex lg:hidden' src="/liblogo.jpg" width={120} height={80} alt='liblogo'/>
    </Link>
)
}

export default Logo