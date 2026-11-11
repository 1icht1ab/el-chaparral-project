import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/christmas-order")({
  server: { handlers: { POST: async ({ request }) => {
    const { handleOrder } = await import("@/lib/ai/order.server");
    return handleOrder(request);
  } } },
});