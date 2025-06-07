'use client'

import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { cancelHold } from '../../actions/actions'

function CancelHoldButton({ reservation_id }: {reservation_id: number}) {
    const path = usePathname()

    const handleCancelHold = async () => {
        await cancelHold(reservation_id, path)
    }

    return (
    <Button
        onClick={handleCancelHold}
    >Cancel hold</Button>

    )
}

export default CancelHoldButton