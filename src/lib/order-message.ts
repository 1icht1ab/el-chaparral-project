import { z } from "zod";

export const orderInputSchema = z.object({
  description: z.string().trim().min(1, "Describe tu pedido.").max(2000, "El pedido es demasiado largo."),
});

export function whatsappOrderUrl(message: string) {
  // No verified business phone has been supplied: use WhatsApp's recipient picker.
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export type OrderEvent = { type: "text"; text: string } | { type: "error"; message: string } | { type: "done" };