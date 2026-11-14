import rosconImage from '@/assets/roscon-catalogo.jpg';
import panettoneImage from '@/assets/panettone.jpg';
import cestaImage from '@/assets/cesta.jpg';
import bandejaImage from '@/assets/bandeja.jpg';
import tartaImage from '@/assets/tarta.jpg';
export type Language = 'es' | 'en';
export type Localized = Record<Language, string>;
const bi = (es: string, en: string): Localized => ({ es, en });
export const WHATSAPP_NUMBER: string = '34633032738'; // Digits only, with country code and no leading 00 or +. Leave empty to fall back to WhatsApp's recipient picker.
export const brand = { name: 'EL CHAPARRAL', subtitle: 'PASTELERÍA', alt: 'El Chaparral' };
export const social = [
  { id: 'instagram', label: bi('Instagram de El Chaparral', 'El Chaparral on Instagram'), url: 'https://www.instagram.com/pasteleriaelchaparral/' },
  { id: 'facebook', label: bi('Facebook de El Chaparral', 'El Chaparral on Facebook'), url: 'https://www.facebook.com/ElchaparralCostadelsilencio/' },
] as const;
export const stores = [
  { id: 'gm', name: 'C.C. La Gran Manzana', statusName: 'La Gran Manzana', detail: bi('Planta alta · Local 1.20 · Las Chafiras', 'Upper floor · Unit 1.20 · Las Chafiras'), hours: { open: 10, close: 22 }, hoursLabel: bi('L–D 10:00–22:00', 'Mon–Sun 10:00–22:00'), mapsUrl: 'https://www.google.com/maps/search/?api=1&query=CC+La+Gran+Manzana+Las+Chafiras', isNew: true },
  { id: 'cs', name: 'Costa del Silencio', statusName: 'Costa del Silencio', detail: bi('Urb. El Chaparral · Arona', 'El Chaparral estate · Arona'), hours: null, hoursLabel: bi('Horario: consultar', 'Hours: please ask'), mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pasteleria+El+Chaparral+Costa+del+Silencio', isNew: false },
];
export const products = [
  { id: 'roscon', name: bi('Roscón de Reyes artesanal', 'Artisan Roscón de Reyes'), description: bi('', ''), price: null, image: rosconImage },
  { id: 'panettone', name: bi('Panettone', 'Panettone'), description: bi('', ''), price: null, image: panettoneImage },
  { id: 'cesta', name: bi('Cesta de desayuno navideño', 'Christmas breakfast basket'), description: bi('', ''), price: null, image: cestaImage },
  { id: 'bandeja', name: bi('Bandeja de pastelería para cenas', 'Pastry tray for dinners'), description: bi('', ''), price: null, image: bandejaImage },
] as { id: string; name: Localized; description: Localized; price: number | null; image: string | null }[];
export type Product = typeof products[number];
// Featured speciality. Its button opens WhatsApp with `message` pre-filled instead of the order sheet.
export const customCake = {
  name: bi('Tartas Personalizadas a Medida', 'Made-to-Measure Custom Cakes'),
  occasions: bi('Cumpleaños, Bautizos, Eventos y Navidad', 'Birthdays, Christenings, Events and Christmas'),
  image: tartaImage,
  message: bi('¡Hola El Chaparral! Quiero cotizar una Tarta Personalizada para [Nº de personas] el día [Fecha], para recoger en [La Gran Manzana / Costa del Silencio]. Mi idea es...', "Hello El Chaparral! I'd like a quote for a Custom Cake for [No. of people] on [Date], to pick up at [La Gran Manzana / Costa del Silencio]. My idea is..."),
  stepsTitle: bi('Diseña tu Tarta Personalizada en 3 pasos', 'Design your Custom Cake in 3 steps'),
  steps: [
    bi('Cuéntanos tu idea, temática o envíanos una foto de referencia por WhatsApp.', 'Tell us your idea or theme, or send us a reference photo on WhatsApp.'),
    bi('Elige tamaño (raciones) y relleno artesanal.', 'Choose the size (servings) and artisan filling.'),
    bi('Recógela lista en cualquiera de nuestras 2 sucursales.', 'Pick it up ready at either of our 2 shops.'),
  ],
};
export const copy = {
  banner: bi('🎄 Encargos de Navidad abiertos · Haz tu pedido por WhatsApp y recoge sin colas en C.C. La Gran Manzana o Costa del Silencio →', '🎄 Christmas orders are open · Order on WhatsApp and pick up without queuing at C.C. La Gran Manzana or Costa del Silencio →'),
  since: bi('Desde 2007', 'Since 2007'), badge: bi('Nueva tienda en el C.C. La Gran Manzana', 'New shop at C.C. La Gran Manzana'),
  hero: bi('Especialistas en Tartas Personalizadas y Dulces de Navidad por encargo. Pide por WhatsApp y recoge sin colas en C.C. La Gran Manzana o Costa del Silencio', 'Specialists in Custom Cakes and Christmas Treats made to order. Order on WhatsApp and pick up without queuing at C.C. La Gran Manzana or Costa del Silencio'),
  catalogueButton: bi('Ver catálogo de Navidad', 'See Christmas catalogue'), menuButton: bi('Ver la carta del café', 'See the café menu'),
  catalogue: bi('Tartas personalizadas y encargos de Navidad', 'Custom cakes and Christmas orders'), order: bi('Encargar', 'Order'), price: bi('Precio a consultar', 'Price on request'), photo: bi('Foto', 'Photo'),
  quantity: bi('Cantidad', 'Quantity'), shop: bi('Tienda de recogida', 'Pick-up shop'), date: bi('Fecha de recogida', 'Pick-up date'), name: bi('Nombre', 'Name'), notes: bi('Notas (opcional)', 'Notes (optional)'),
  send: bi('Enviar por WhatsApp', 'Send via WhatsApp'), confirmation: bi('Te confirmamos disponibilidad y precio por WhatsApp.', "We'll confirm availability and price on WhatsApp."), close: bi('Cerrar', 'Close'), decrease: bi('Reducir cantidad', 'Decrease quantity'), increase: bi('Aumentar cantidad', 'Increase quantity'),
  how: bi('Cómo funciona', 'How it works'), shops: bi('Nuestras tiendas', 'Our shops'), new: bi('Nueva', 'New'), directions: bi('Cómo llegar →', 'Get directions →'), footer: bi('Pastelería El Chaparral · Desde 2007', 'Pastelería El Chaparral · Since 2007'),
  menu: bi('Carta', 'Menu'), menuSubtitle: bi('Precios en tienda', 'Prices in store'), allergens: bi('Información sobre alérgenos disponible en tienda. Pregunta a nuestro equipo.', 'Allergen information available in store. Ask our team.'), faq: bi('Preguntas frecuentes', 'FAQ'), home: bi('Inicio', 'Home'), doubts: bi('Dudas', 'FAQ'),
  open: bi('Abierto hasta las', 'Open until'), closed: bi('Cerrado · abre a las', 'Closed · opens at'), hours: bi('Ver horario', 'See hours'), language: bi('Idioma', 'Language'),
};
export const orderLabels = { es: ['PEDIDO NAVIDAD', 'Producto', 'Cantidad', 'Tienda', 'Fecha', 'Nombre', 'Notas'], en: ['CHRISTMAS ORDER', 'Product', 'Quantity', 'Shop', 'Date', 'Name', 'Notes'] };
export const steps = [bi('Elige tu producto y pulsa Encargar.', 'Choose your product and tap Order.'), bi('Indica tienda y día de recogida, y envíanos el pedido por WhatsApp.', 'Pick the shop and day, and send us the order on WhatsApp.'), bi('Te confirmamos el pedido y lo recoges ya preparado en la tienda elegida.', 'We confirm your order and you pick it up ready at your chosen shop.')];
export const cafeMenu = [
 { id: 'breakfast', name: bi('Desayunos', 'Breakfast'), items: [bi('Café con leche', 'White coffee'), bi('Zumo de naranja natural', 'Fresh orange juice'), bi('Sándwich de miga', 'Crustless sandwich')] },
 { id: 'pastries', name: bi('Facturas argentinas', 'Argentine pastries'), items: [bi('Medialunas', 'Medialunas (Argentine croissants)'), bi('Facturas con dulce de leche', 'Pastries with dulce de leche'), bi('Cañoncitos de dulce de leche', 'Dulce de leche cañoncitos')] },
 { id: 'savoury', name: bi('Salados', 'Savoury'), items: [bi('Empanadas argentinas', 'Argentine empanadas'), bi('Bocadillos y pulgas', 'Sandwiches & rolls')] },
 { id: 'sweets', name: bi('Dulces', 'Sweets'), items: [bi('Alfajores', 'Alfajores'), bi('Tartas de fruta', 'Fruit tarts'), bi('Croissants', 'Croissants')] },
];
export const faq = [
 { id: 'shops', confirmed: true, question: bi('¿Dónde están vuestras tiendas?', 'Where are your shops?'), answer: bi('En el C.C. La Gran Manzana (planta alta, local 1.20, Las Chafiras) y en Costa del Silencio (Urb. El Chaparral, Arona).', 'At C.C. La Gran Manzana (upper floor, unit 1.20, Las Chafiras) and in Costa del Silencio (El Chaparral estate, Arona).') },
 { id: 'order', confirmed: true, question: bi('¿Cómo hago un encargo?', 'How do I place an order?'), answer: bi('Elige el producto, pulsa Encargar, indica tienda y fecha, y envíanos el pedido por WhatsApp. Te confirmamos disponibilidad y precio.', "Choose the product, tap Order, pick the shop and date, and send us the order on WhatsApp. We'll confirm availability and price.") },
 ...[bi('¿Con cuánta antelación tengo que encargar?', 'How far in advance should I order?'), bi('¿Cómo se paga? ¿Hay que dejar señal?', 'How do I pay? Is a deposit required?'), bi('¿Tenéis opciones sin gluten o sin lactosa?', 'Do you have gluten-free or lactose-free options?'), bi('¿Hacéis envíos a domicilio?', 'Do you deliver?')].map((question, i) => ({ id: `pending-${i}`, confirmed: false, question, answer: bi('', '') })),
];
export const seo = {
 home: { title: 'El Chaparral · Tartas personalizadas y encargos de Navidad', description: copy.hero.es },
 menu: { title: 'Carta · El Chaparral', description: 'Carta de cafetería de El Chaparral. Precios en tienda.' },
 faq: { title: 'Preguntas frecuentes · El Chaparral', description: 'Tiendas y encargos de Navidad de El Chaparral.' },
};
export function pageHead(key: keyof typeof seo) { const data = seo[key]; return { meta: [{ title: data.title }, { name: 'description', content: data.description }, { property: 'og:title', content: data.title }, { property: 'og:description', content: data.description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
