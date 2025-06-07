"use client";

import { DataTable } from "@/components/data-table";
import React, { startTransition, useState } from "react";
import ConfirmationDialog from "@/components/confirmation-dialog";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { deleteActivity } from "../../../../../actions/actions";
import { Activity, columns } from "./columns";
import AddActivityDialog from "@/components/add-activity-dialog";

type props = {
  data: Activity[];
  total: number;
};
function ActivitiesTable({ data }: { data: props }) {
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [itemToAction, setItemToAction] = useState<Activity>();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleRowDelete = (item: Activity) => {
    setOpenConfirmationDialog(true);
    setItemToAction(item);
  };

  const handleRowEdit = (item: Activity) => {
    setItemToAction(item);
    setOpen(true);
  };

  const handleConfirm = async () => {
    setOpenConfirmationDialog(false);

    if (itemToAction) {
      startTransition(async () => {
        await deleteActivity(itemToAction.activity_id, pathname);
      });

      toast.success(`${itemToAction.title} deleted`);
    }
  };

  return (
    <>
      <DataTable
        data={data.data}
        columns={columns}
        total={data.total}
        filter_column="title"
        onRowDelete={handleRowDelete}
        onRowEdit={handleRowEdit}
      />
      <AddActivityDialog
        open={open}
        setOpen={setOpen}
        activity={itemToAction}
      />
      <ConfirmationDialog
        open={openConfirmationDialog}
        onClose={() => setOpenConfirmationDialog(false)}
        onConfirm={handleConfirm}
        message="By continuing you are going to delete the activity, continue?"
      />
    </>
  );
}

export default ActivitiesTable;
