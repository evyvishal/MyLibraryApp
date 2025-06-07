"use client";

import { DataTable } from "@/components/data-table";
import React, { useState } from "react";
import { columns, Fine } from "./columns";
import ConfirmationDialog from "@/components/confirmation-dialog";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { deleteFine, markAsPaid} from "../../../../../actions/actions";

type props = {
  data: Fine[];
  total: number;
};
function FinesTable({ data }: { data: props }) {
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [itemToAction, setItemToAction] = useState<Fine>();
  const [dialogReason, setDialogReason] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const pathname = usePathname();

  const handleRowDelete = (item: Fine) => {
    setDialogReason("delete");
    setDialogMessage(
      "By continuing you are going to delete the fine, continue?"
    );
    setOpenConfirmationDialog(true);
    setItemToAction(item);
  };

  const handleMarkAsPaid = (item: Fine) => {
    setDialogReason("paid");
    setDialogMessage("Mark the fine as paid, continue?");
    setOpenConfirmationDialog(true);
    setItemToAction(item);
  };

  const handleConfirm = async () => {
    setOpenConfirmationDialog(false);

    if (itemToAction) {
      if (dialogReason === "delete") {
        await deleteFine(itemToAction.fine_id, pathname);
        toast( `fine deleted` );
      } else if (dialogReason === "paid") {
        markAsPaid(itemToAction.fine_id, pathname);
        toast.success( `fine deleted`);
      }
    }
  };

  return (
    <>
      <DataTable
        data={data.data}
        columns={columns}
        total={data.total}
        filter_column="name"
        onRowDelete={handleRowDelete}
        onRowEdit={handleMarkAsPaid}
      />

      <ConfirmationDialog
        open={openConfirmationDialog}
        onClose={() => setOpenConfirmationDialog(false)}
        onConfirm={handleConfirm}
        message={dialogMessage}
      />
    </>
  );
}

export default FinesTable;
