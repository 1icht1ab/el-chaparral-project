import { orderLabels, stores, WHATSAPP_NUMBER, type Language, type Product } from '@/content';
export function minimumPickupDate(now = new Date()) {
 const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);
 return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
export type OrderDraft = { quantity: number; shop: string; date: string; name: string; notes: string };
export function validOrder(draft: OrderDraft, now = new Date()) {
 const parsed = new Date(`${draft.date}T12:00:00`);
 return Number.isInteger(draft.quantity) && draft.quantity >= 1 && draft.quantity <= 20 && stores.some(s => s.id === draft.shop) && /^\d{4}-\d{2}-\d{2}$/.test(draft.date) && !Number.isNaN(parsed.getTime()) && draft.date >= minimumPickupDate(now) && draft.name.trim().length > 0 && draft.name.length <= 40 && draft.notes.length <= 120;
}
export function orderMessage(product: Product, draft: OrderDraft, lang: Language) {
 const labels = orderLabels[lang]; const store = stores.find(s => s.id === draft.shop);
 const [year, month, day] = draft.date.split('-');
 return [labels[0], ...[product.name[lang], String(draft.quantity), store?.name ?? '', `${day}/${month}/${year}`, draft.name.trim(), draft.notes.trim() || '-'].map((value, i) => `${labels[i+1]}: ${value}`)].join('\n');
}
export function orderUrl(message: string, number: string = WHATSAPP_NUMBER) { const text = encodeURIComponent(message); return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`; }
export function storeStatus(hours: { open: number; close: number } | null, now: Date) { return hours === null ? 'unknown' : now.getHours() >= hours.open && now.getHours() < hours.close ? 'open' : 'closed'; }
export function confirmedFaq<T extends { confirmed: boolean }>(items: T[]) { return items.filter(item => item.confirmed); }
