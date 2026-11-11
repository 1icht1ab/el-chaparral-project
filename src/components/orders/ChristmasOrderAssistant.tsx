import { useEffect, useRef, useState } from "react";
import { Check, Copy, LoaderCircle, MessageCircle, Sparkles, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { whatsappOrderUrl, type OrderEvent } from "@/lib/order-message";

export function ChristmasOrderAssistant() {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const controller = useRef<AbortController | null>(null);
  useEffect(() => () => controller.current?.abort(), []);

  async function generate(event: React.FormEvent) {
    event.preventDefault();
    if (busy || !description.trim()) return;
    const abort = new AbortController();
    controller.current = abort;
    setBusy(true); setError(""); setMessage(""); setComplete(false); setCopied(false);
    try {
      const response = await fetch("/api/public/christmas-order", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }), signal: abort.signal,
      });
      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message ?? "No se pudo generar el mensaje.");
      }
      if (!response.body) throw new Error("No se recibió el mensaje.");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let pending = "";
      let finished = false;
      while (true) {
        const chunk = await reader.read();
        pending += decoder.decode(chunk.value, { stream: !chunk.done });
        const lines = pending.split("\n"); pending = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.trim()) continue;
          const part = JSON.parse(line) as OrderEvent;
          if (part.type === "text") setMessage(previous => previous + part.text);
          if (part.type === "error") throw new Error(part.message);
          if (part.type === "done") { finished = true; setComplete(true); }
        }
        if (chunk.done) break;
      }
      if (!finished) throw new Error("La generación se interrumpió. El borrador no está completo.");
    } catch (failure) {
      setError(abort.signal.aborted ? "Generación detenida. El borrador no está completo." : failure instanceof Error ? failure.message : "No se pudo generar el mensaje.");
    } finally { setBusy(false); controller.current = null; }
  }

  async function copy() {
    try { await navigator.clipboard.writeText(message); setCopied(true); }
    catch { setError("No se pudo copiar. Puedes seleccionar el mensaje y copiarlo."); }
  }

  return <section id="pedido-navidad" className="border-y bg-secondary px-5 py-14">
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary"><Sparkles className="h-4 w-4" /> Asistente de Navidad · IA</p>
        <h2 className="mt-2 font-display text-3xl text-coffee sm:text-4xl">Tu encargo, listo para WhatsApp</h2>
      </div>
      <form onSubmit={generate} className="space-y-4">
        <label htmlFor="order-description" className="block font-bold">¿Qué te gustaría encargar?</label>
        <Textarea id="order-description" value={description} onChange={event => setDescription(event.target.value)} maxLength={2000} required disabled={busy} className="min-h-36 bg-card p-4" placeholder="Quiero 2 roscones de nata para 8 personas, el 24 de diciembre a las 12:00, en La Gran Manzana. Soy Ana." />
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg" disabled={busy || !description.trim()} className="h-auto min-h-11 whitespace-normal rounded-full font-bold">
            {busy ? <LoaderCircle className="animate-spin motion-reduce:animate-none" /> : <Sparkles />}{busy ? "Preparando tu mensaje…" : "Crear mensaje con IA"}
          </Button>
          {busy && <Button type="button" variant="outline" onClick={() => controller.current?.abort()}><Square /> Detener</Button>}
        </div>
      </form>
      {busy && !message && <p role="status" className="mt-4 text-sm text-muted-foreground">Preparando el encargo…</p>}
      {error && <p role="alert" className="mt-4 break-words text-sm text-destructive">{error}</p>}
      {message && <div className="mt-8 space-y-4 border-t pt-6">
        <label htmlFor="order-message" className="block font-bold">{complete ? "Tu mensaje" : "Borrador"}</label>
        <Textarea id="order-message" value={message} onChange={event => { setMessage(event.target.value); setCopied(false); }} disabled={busy} className="min-h-64 bg-card p-4" />
        <div className="flex flex-wrap gap-3">
          <Button type="button" variant="outline" onClick={copy} disabled={!complete || !message.trim()}>{copied ? <Check /> : <Copy />}{copied ? "Copiado" : "Copiar mensaje"}</Button>
          {complete && message.trim() && <Button asChild className="h-auto min-h-11 whitespace-normal rounded-full bg-whatsapp font-bold text-whatsapp-foreground hover:bg-whatsapp/90"><a href={whatsappOrderUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle /> Abrir WhatsApp</a></Button>}
        </div>
      </div>}
    </div>
  </section>;
}