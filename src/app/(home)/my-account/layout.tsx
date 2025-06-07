
import React from 'react'
import { auth, signIn } from '../../../../auth'

async function MyAccountLayout({ children }: { children: React.ReactNode }) {

    const session = await auth
    ()

    if (!session) await signIn()

    return (
        <div className="container mx-auto p-8 sm:max-w-6xl">
            {children}
        </div>
    )
}

export default MyAccountLayout