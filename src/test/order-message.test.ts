import { describe, expect, it } from "vitest";
import { orderInputSchema, whatsappOrderUrl } from "@/lib/order-message";

describe("Christmas order messages", () => {
  it("rejects blank orders before calling AI", () => {
    expect(orderInputSchema.safeParse({ description: "   " }).success).toBe(false);
  });
  it("retains the customer's order details", () => {
    const description = "2 roscones de nata, 24 de diciembre, C.C. La Gran Manzana";
    expect(orderInputSchema.parse({ description }).description).toBe(description);
  });
  it("passes the edited message to WhatsApp without an unverified phone", () => {
    const message = "Hola, 2 roscones & una tarta.\nRecogida: 24/12 a las 12:00.";
    const url = new URL(whatsappOrderUrl(message));
    expect(url.searchParams.get("text")).toBe(message);
    expect(url.pathname).toBe("/");
  });
});