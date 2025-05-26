"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

export function ButtonAddCar() {
    const [openDialog, setopenDialog] = useState(false)
  return (
    <Dialog open={openDialog}>
        <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setopenDialog(true)}>
                Agregar nuevo auto
                <PlusCircle className="ml-2" />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    <p>Formulario para agregar nuevo auto</p>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}
