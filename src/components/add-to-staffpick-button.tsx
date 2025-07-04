'use client'

import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { addToStaffPicks } from '../../actions/actions'

function AddToStaffPickButton({ book_id }: {book_id: number}) {
    const path = usePathname()

    const handleAdd = async () => {
        await addToStaffPicks(book_id, path)
    }
    return (
    <Button  onClick={handleAdd}
    >Add to staff pick</Button>
    )
}

export default AddToStaffPickButton