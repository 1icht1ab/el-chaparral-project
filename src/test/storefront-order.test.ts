import { describe, expect, it } from 'vitest';
import { confirmedFaq, minimumPickupDate, orderMessage, orderUrl, storeStatus, validOrder } from '@/lib/storefront-order';
import { faq, products } from '@/content';
const now = new Date(2026, 10, 12, 15);
const draft = { quantity: 1, shop: 'gm', date: '2026-11-14', name: 'Ana', notes: '' };
describe('Static storefront rules', () => {
 it('allows quantities 1 through 20 only', () => { expect(validOrder(draft, now)).toBe(true); expect(validOrder({ ...draft, quantity: 20 }, now)).toBe(true); for (const quantity of [0, 21, 1.5]) expect(validOrder({ ...draft, quantity }, now)).toBe(false); });
 it('requires at least two local calendar days', () => { expect(minimumPickupDate(now)).toBe('2026-11-14'); expect(validOrder({ ...draft, date: '2026-11-13' }, now)).toBe(false); expect(minimumPickupDate(new Date(2026, 11, 31))).toBe('2027-01-02'); });
 it('requires a known shop', () => { expect(validOrder({ ...draft, shop: '' }, now)).toBe(false); expect(validOrder({ ...draft, shop: 'cs' }, now)).toBe(true); });
 it('requires a name of at most 40 characters', () => { expect(validOrder({ ...draft, name: ' ' }, now)).toBe(false); expect(validOrder({ ...draft, name: 'a'.repeat(40) }, now)).toBe(true); expect(validOrder({ ...draft, name: 'a'.repeat(41) }, now)).toBe(false); });
 it('allows optional notes up to 120 characters', () => { expect(validOrder({ ...draft, notes: 'a'.repeat(120) }, now)).toBe(true); expect(validOrder({ ...draft, notes: 'a'.repeat(121) }, now)).toBe(false); });
 it('produces exact Spanish and English message labels', () => { const product = products[0]; if (!product) throw new Error('Missing product'); expect(orderMessage(product, draft, 'es')).toBe('PEDIDO NAVIDAD\nProducto: Roscón de Reyes artesanal\nCantidad: 1\nTienda: C.C. La Gran Manzana\nFecha: 14/11/2026\nNombre: Ana\nNotas: -'); expect(orderMessage(product, draft, 'en')).toBe('CHRISTMAS ORDER\nProduct: Artisan Roscón de Reyes\nQuantity: 1\nShop: C.C. La Gran Manzana\nDate: 14/11/2026\nName: Ana\nNotes: -'); });
 it('opens the recipient picker rather than a sample number', () => { expect(new URL(orderUrl('test')).pathname).toBe('/'); });
 it('computes the 10 to 22 opening window', () => { expect(storeStatus({ open: 10, close: 22 }, new Date(2026, 10, 12, 10))).toBe('open'); expect(storeStatus({ open: 10, close: 22 }, new Date(2026, 10, 12, 22))).toBe('closed'); expect(storeStatus(null, now)).toBe('unknown'); });
 it('shows only the two confirmed FAQ entries', () => { expect(confirmedFaq(faq).map(item => item.id)).toEqual(['shops', 'order']); });
});