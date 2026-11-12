import { createFileRoute } from '@tanstack/react-router';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Footer, useStorefront } from '@/components/storefront/Storefront';
import { cafeMenu, copy, pageHead } from '@/content';
export const Route = createFileRoute('/carta')({ head: () => pageHead('menu'), component: Menu });
function Menu() { const { lang } = useStorefront(); return <><section className="secondary-page"><h1>{copy.menu[lang]}</h1><p className="page-subtitle">{copy.menuSubtitle[lang]}</p><Accordion type="multiple" defaultValue={['breakfast']} className="accordion-list">{cafeMenu.map(category => <AccordionItem value={category.id} key={category.id}><AccordionTrigger>{category.name[lang]}</AccordionTrigger><AccordionContent><ul>{category.items.map(item => <li key={item.es}>{item[lang]}</li>)}</ul></AccordionContent></AccordionItem>)}</Accordion><p className="allergen-note">{copy.allergens[lang]}</p></section><Footer /></>; }
