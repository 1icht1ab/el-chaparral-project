import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Cake, MessageCircle, MapPin, Clock, ShoppingBag, CalendarCheck, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";
import roscon from "@/assets/roscon.jpg";
import bandeja from "@/assets/bandeja.jpg";
import tarta from "@/assets/tarta.jpg";
import cesta from "@/assets/cesta.jpg";
import { ChristmasOrderAssistant } from "@/components/orders/ChristmasOrderAssistant";

const CC = "C.C. La Gran Manzana";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Chaparral · Encargos de Navidad por WhatsApp" },
      { name: "description", content: "Pastelería artesanal en Costa del Silencio y nueva sucursal en el C.C. Encarga roscones, tartas y bandejas navideñas por WhatsApp." },
      { property: "og:title", content: "El Chaparral · Encargos de Navidad por WhatsApp" },
      { property: "og:description", content: "Roscones, tartas a medida y bandejas festivas. Encarga por WhatsApp y recoge sin colas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Roscón de Reyes / Panettone Artesanal", price: "Desde 18 €", img: roscon, href: "https://wa.me/34600000000?text=Hola%20El%20Chaparral!%20Quiero%20encargar%20un%20Roscon/Panettone%20para%20recoger%20en%20la%20sucursal%20de" },
  { name: "Bandeja Navideña Dulce y Salada", sub: "Especial Cenas y Eventos", price: "Desde 35 €", img: bandeja, href: "https://wa.me/34600000000?text=Hola%20El%20Chaparral!%20Quiero%20encargar%20una%20Bandeja%20Navide%C3%B1a%20para%20el%20dia" },
  { name: "Tartas Personalizadas para Fiestas", price: "Desde 30 €", img: tarta, href: "https://wa.me/34600000000?text=Hola%20El%20Chaparral!%20Quiero%20cotizar%20una%20Tarta%20Personalizada%20para" },
  { name: "Cesta de Desayuno / Especialidades Navideñas", price: "Desde 25 €", img: cesta, href: "https://wa.me/34600000000?text=Hola%20El%20Chaparral!%20Quiero%20reservar%20una%20Cesta/Especialidad%20de%20Navidad" },
];

const menu: Record<string, [string, string][]> = {
  "Cafés y Bebidas": [["Café solo", "1,30 €"], ["Cortado / Leche y leche", "1,50 €"], ["Café con leche", "1,80 €"], ["Capuchino", "2,30 €"], ["Chocolate caliente", "2,50 €"], ["Zumo de naranja natural", "3,00 €"]],
  "Bollería y Pastelería": [["Croissant de mantequilla", "1,60 €"], ["Napolitana de chocolate", "1,90 €"], ["Porción de tarta del día", "3,50 €"], ["Milhojas", "2,80 €"], ["Bizcocho casero", "2,20 €"], ["Alfajor artesanal", "2,00 €"]],
  "Salados y Desayunos": [["Tostada con tomate y aceite", "2,50 €"], ["Bocadillo de jamón serrano", "4,50 €"], ["Empanada artesana", "3,00 €"], ["Sándwich mixto", "3,20 €"], ["Desayuno completo", "5,90 €"], ["Quiche del día", "3,80 €"]],
};

function WaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-bold text-whatsapp-foreground transition hover:brightness-110">
      <MessageCircle className="h-5 w-5" /> {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl text-coffee sm:text-4xl">{title}</h2>
    </div>
  );
}

function Index() {
  const tabs = Object.keys(menu);
  const [tab, setTab] = useState<string>("Cafés y Bebidas");
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-hero px-5 pb-16 pt-8 text-center">
        <img src={logo.url} alt="El Chaparral Pastelería, desde 2007" className="mx-auto h-36 w-36 rounded-full object-cover shadow-warm sm:h-44 sm:w-44" />
        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          <Sparkles className="h-4 w-4" /> Nueva sucursal en el {CC}
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight text-coffee sm:text-5xl">
          El sabor de El Chaparral, ahora también en el {CC}. <span className="text-primary">Haz tus encargos de Navidad por WhatsApp y recoge sin colas</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Pastelería artesanal, tartas a medida y bandejas para tus cenas festivas</p>
        <a href="#catalogo" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-warm transition hover:-translate-y-0.5">
          <Cake className="h-5 w-5" /> Ver Catálogo de Navidad
        </a>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-4 px-5 py-16">
        <SectionTitle eyebrow="Navidad 2026" title="Catálogo de Encargos de Navidad" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-warm">
              <img src={p.img} alt={p.name} loading="lazy" width={912} height={736} className="aspect-[5/4] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl text-coffee">{p.name}</h3>
                {p.sub && <p className="text-sm text-muted-foreground">{p.sub}</p>}
                <p className="mb-4 mt-2 text-sm font-bold text-primary">{p.price} <span className="font-normal text-muted-foreground">· orientativo</span></p>
                <div className="mt-auto"><WaButton href={p.href}>Encargar por WhatsApp</WaButton></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ChristmasOrderAssistant />

      {/* Cómo funciona */}
      <section className="bg-coffee px-5 py-16 text-coffee-foreground">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Fácil y rápido</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Cómo funciona</h2>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            {[
              [ShoppingBag, "Elige tu dulce o bandeja."],
              [CalendarCheck, "Pulsa en encargar por WhatsApp e indícanos el día."],
              [MapPin, "Recoge sin hacer fila en Costa del Silencio o en nuestra nueva sucursal del Centro Comercial."],
            ].map(([Icon, text], i) => {
              const I = Icon as typeof MapPin;
              return (
                <li key={i} className="rounded-2xl border border-coffee-foreground/15 p-6 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground"><I className="h-7 w-7" /></div>
                  <p className="mt-3 font-display text-2xl text-accent">{i + 1}</p>
                  <p className="mt-1">{text as string}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Carta */}
      <section id="carta" className="mx-auto max-w-3xl px-5 py-16">
        <SectionTitle eyebrow="Todo el año" title="Carta de Cafetería" />
        <div className="mb-6 flex gap-2 overflow-x-auto rounded-full bg-secondary p-1.5">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`shrink-0 flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold transition ${tab === t ? "bg-primary text-primary-foreground" : "text-secondary-foreground"}`}>
              {t}
            </button>
          ))}
        </div>
        <ul className="divide-y rounded-2xl border bg-card px-5">
          {(menu[tab] ?? []).map(([n, p]) => (
            <li key={n} className="flex items-baseline gap-3 py-4">
              <span className="min-w-0 font-semibold">{n}</span>
              <span className="flex-1 border-b border-dotted" />
              <span className="shrink-0 font-bold text-primary">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Ubicaciones */}
      <section className="bg-secondary px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="Visítanos" title="Nuestras 2 Ubicaciones" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border bg-card p-6 shadow-warm">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display text-2xl text-coffee">Sucursal Costa del Silencio</h3>
              <p className="mt-2 text-muted-foreground">Nuestro local de siempre, desde 2007.</p>
              <p className="mt-3 flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-accent" /> Lun–Dom · 7:30 – 20:00</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Pasteleria+El+Chaparral+Costa+del+Silencio" target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-coffee px-5 py-3 font-bold text-coffee-foreground">Ver en Google Maps</a>
            </div>
            <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-6 shadow-warm">
              <span className="absolute -top-3 right-5 rounded-full bg-primary px-3 py-1 text-xs font-extrabold tracking-wider text-primary-foreground">¡NUEVA APERTURA!</span>
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display text-2xl text-coffee">Sucursal {CC}</h3>
              <div className="mt-3 space-y-1 text-sm">
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Lun–Sáb · 9:00 – 21:00</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Domingos · 10:00 – 20:00</p>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Tenerife+Sur" target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground">Cómo llegar en Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-coffee px-5 py-8 text-center text-sm text-coffee-foreground/80">
        © El Chaparral Pastelería · Desde 2007 · Sur de Tenerife
      </footer>
    </main>
  );
}
