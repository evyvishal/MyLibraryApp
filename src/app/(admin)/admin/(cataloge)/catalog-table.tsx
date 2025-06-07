'use client'
import { DataTable } from '@/components/data-table';
import { Book, columns } from './columns'
import React, { startTransition, useState } from 'react'
import AddBookDialog from '@/components/add-book-dialog';
import ConfirmationDialog from '@/components/confirmation-dialog';
import { deleteBook } from '../../../../../actions/actions';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

type props ={
  data: Book[],
  total: number
}

function CatalogTable({ data }: {data: props}) {

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false)
  const [itemToAction, setItemToAction] = useState<Book>()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleRowDelete = async (item: Book) => {
    setOpenConfirmationDialog(true)
    setItemToAction(item)
  }

  const handleRowEdit = (item: Book) => {
    setOpen(true)
    setItemToAction(item)

  }

  const handleConfirm = async () => {
    setOpenConfirmationDialog(false)

    if (itemToAction) {

      startTransition(async () => {
        await deleteBook(itemToAction.book_id, pathname)
      })

      toast.success(`${itemToAction.name} deleted`)
    }
  }
  return (
    <>
      <DataTable
        columns={columns}
        data={data.data}
        total={data.total}
        filter_column="name"
        onRowDelete={handleRowDelete}
        onRowEdit={handleRowEdit}
      />
      <AddBookDialog open={open} setOpen={setOpen} book={itemToAction} />
      <ConfirmationDialog
        open={openConfirmationDialog}
        onClose={() => setOpenConfirmationDialog(false)}
        onConfirm={handleConfirm}
        message="By continuing you are going to delete the book, continue?"
      />
    </>
  );
}

export default CatalogTable