"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { WhatsAppDialog } from "./dialogWhatsApp";

export default function ButtonWhatsapp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="boton" aria-label="Abrir conversa no WhatsApp">
          <FaWhatsapp />
        </Button>
      </DialogTrigger>

      {/* Conteúdo do dialog */}
      <WhatsAppDialog />
    </Dialog>
  );
}
