import rosconImage from '@/assets/roscon.jpg';
import cestaImage from '@/assets/cesta.jpg';
import bandejaImage from '@/assets/bandeja.jpg';
import cake1 from '@/assets/tarta-personalizada-1.jpg';
import cake2 from '@/assets/tarta-personalizada-2.jpg';
import cake3 from '@/assets/tarta-personalizada-3.jpg';
import cake4 from '@/assets/tarta-personalizada-4.jpg';
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
  { id: 'bandejas', name: bi('Bandejas Navideñas de Salados, Sándwiches de Miga y Empanadas para cenas festivas', 'Christmas Trays of Savouries, Crustless Sandwiches and Empanadas for festive dinners'), description: bi('', ''), price: null, image: bandejaImage },
  { id: 'cajas', name: bi('Cajas Dulces de Alfajores Artesanales, Facturas y Medialunas', 'Sweet Boxes of Artisan Alfajores, Argentine Pastries and Medialunas'), description: bi('', ''), price: null, image: cestaImage },
  { id: 'especiales', name: bi('Especiales de Navidad y Reyes', 'Christmas and Three Kings Specials'), description: bi('Roscón de Reyes artesanal, panettone y cesta de desayuno navideño.', 'Artisan Roscón de Reyes, panettone and Christmas breakfast basket.'), price: null, image: rosconImage },
] as { id: string; name: Localized; description: Localized; price: number | null; image: string | null }[];
export type Product = typeof products[number];
// Featured speciality. Its button opens WhatsApp with `message` pre-filled instead of the order sheet.
export const customCake = {
  name: bi('Tortas Personalizadas a Medida', 'Made-to-Measure Custom Cakes'),
  badge: bi('Nuestra gran especialidad', 'Our great speciality'),
  occasions: bi('Cumpleaños, Bautizos, Eventos y Navidad', 'Birthdays, Christenings, Events and Christmas'),
  photos: [
    { src: cake4, alt: bi('Tarta de dos pisos con conchas y estrellas de mar', 'Two-tier cake with shells and starfish') },
    { src: cake3, alt: bi('Tarta azul con lunas y estrellas doradas', 'Blue cake with golden moons and stars') },
    { src: cake1, alt: bi('Tarta con tortugas marinas y estrella de mar', 'Cake with sea turtles and a starfish') },
    { src: cake2, alt: bi('Tarta de cumpleaños con perrito y globos', 'Birthday cake with a puppy and balloons') },
  ],
  // The shop needs these details to prepare a custom cake; the customer fills them in inside WhatsApp.
  message: bi(
    '¡Hola El Chaparral! Quiero cotizar una Tarta Personalizada.\n\nFecha: \nForma de la tarta: \nTemática/decoración: \nNúmero de adultos/niños: \nNúmero de pisos: \nRecogida en: La Gran Manzana / Costa del Silencio\n\nMi idea es...',
    "Hello El Chaparral! I'd like a quote for a Custom Cake.\n\nDate: \nCake shape: \nTheme/decoration: \nNumber of adults/children: \nNumber of tiers: \nPick-up at: La Gran Manzana / Costa del Silencio\n\nMy idea is...",
  ),
  detailsTitle: bi('Para prepararla necesitamos saber:', 'To prepare it we need to know:'),
  details: [bi('Fecha', 'Date'), bi('Forma de la tarta', 'Cake shape'), bi('Temática o decoración', 'Theme or decoration'), bi('Número de adultos y niños', 'Number of adults and children'), bi('Número de pisos', 'Number of tiers')],
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
  menu: bi('Carta', 'Menu'), menuSection: bi('Carta Argentina y Café', 'Argentine Menu & Coffee'), menuFull: bi('Ver la carta completa', 'See the full menu'), openMenu: bi('Abrir menú', 'Open menu'), closeMenu: bi('Cerrar menú', 'Close menu'), navigation: bi('Menú', 'Menu'), menuSubtitle: bi('Precios en tienda', 'Prices in store'), allergens: bi('Información sobre alérgenos disponible en tienda. Pregunta a nuestro equipo.', 'Allergen information available in store. Ask our team.'), faq: bi('Preguntas frecuentes', 'FAQ'), home: bi('Inicio', 'Home'), doubts: bi('Dudas', 'FAQ'),
  open: bi('Abierto hasta las', 'Open until'), closed: bi('Cerrado · abre a las', 'Closed · opens at'), hours: bi('Ver horario', 'See hours'), language: bi('Idioma', 'Language'),
};
export const orderLabels = { es: ['PEDIDO NAVIDAD', 'Producto', 'Cantidad', 'Tienda', 'Fecha', 'Nombre', 'Notas'], en: ['CHRISTMAS ORDER', 'Product', 'Quantity', 'Shop', 'Date', 'Name', 'Notes'] };
export const steps = [bi('Elige tu producto y pulsa Encargar.', 'Choose your product and tap Order.'), bi('Indica tienda y día de recogida, y envíanos el pedido por WhatsApp.', 'Pick the shop and day, and send us the order on WhatsApp.'), bi('Te confirmamos el pedido y lo recoges ya preparado en la tienda elegida.', 'We confirm your order and you pick it up ready at your chosen shop.')];
export const navLinks = [
  { id: 'home', hash: undefined, label: bi('Inicio', 'Home') },
  { id: 'catalogo', hash: 'catalogo', label: bi('Encargos y Tortas', 'Orders & Cakes') },
  { id: 'carta', hash: 'carta', label: bi('Carta Argentina y Café', 'Argentine Menu & Coffee') },
  { id: 'historia', hash: 'historia', label: bi('Nuestra Historia', 'Our Story') },
  { id: 'tiendas', hash: 'tiendas', label: bi('Nuestras 2 Tiendas', 'Our 2 Shops') },
] as const;
export const story = {
  title: bi('Nuestra Historia · Bajo un Mismo Sol', 'Our Story · Under the Same Sun'),
  subtitle: bi('Desde 2007 · Un puente entre culturas', 'Since 2007 · A bridge between cultures'),
  body: bi('El Chaparral nació en 2007 respetando el nombre de nuestra localización en Costa del Silencio, pero con la esencia de un encuentro cultural. Más allá de traer nuestras tradiciones argentinas —tortas personalizadas, alfajores, medialunas, facturas, empanadas y sándwiches—, nuestra misión es crear un puente que hermane dos tierras cálidas. Bajo el bendito sol de Tenerife, trajimos con orgullo nuestro Sol de Mayo: símbolo de libertad, calidez y alegría en cada producto que horneamos.', 'El Chaparral was born in 2007, keeping the name of our location in Costa del Silencio but with the essence of a cultural encounter. Beyond bringing our Argentine traditions — custom cakes, alfajores, medialunas, facturas, empanadas and sandwiches — our mission is to build a bridge that unites two warm lands. Under the blessed sun of Tenerife, we proudly brought our Sol de Mayo: a symbol of freedom, warmth and joy in every product we bake.'),
  closing: bi('Siempre bajo un mismo sol.', 'Always under the same sun.'),
  sunAlt: bi('Sol de Mayo del logo de El Chaparral', "Sol de Mayo from El Chaparral's logo"),
};
export const cafeMenu = [
 { id: 'orders', name: bi('Especialidades por encargo', 'Made-to-order specialities'), items: [bi('Tortas Personalizadas a Medida', 'Made-to-Measure Custom Cakes'), bi('Bandejas Navideñas de Salados, Sándwiches de Miga y Empanadas', 'Christmas Trays of Savouries, Crustless Sandwiches and Empanadas'), bi('Cajas Dulces de Alfajores Artesanales, Facturas y Medialunas', 'Sweet Boxes of Artisan Alfajores, Argentine Pastries and Medialunas'), bi('Especiales de Navidad y Reyes', 'Christmas and Three Kings Specials')] },
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
