import { createFileRoute } from '@tanstack/react-router';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Footer, useStorefront } from '@/components/storefront/Storefront';
import { confirmedFaq } from '@/lib/storefront-order';
import { faq, copy, pageHead } from '@/content';
export const Route = createFileRoute('/preguntas')({ head: () => pageHead('faq'), component: Faq });
function Faq() { const { lang } = useStorefront(); return <><section className="secondary-page"><h1>{copy.faq[lang]}</h1><Accordion type="multiple" className="accordion-list">{confirmedFaq(faq).map(item => <AccordionItem value={item.id} key={item.id}><AccordionTrigger>{item.question[lang]}</AccordionTrigger><AccordionContent>{item.answer[lang]}</AccordionContent></AccordionItem>)}</Accordion></section><Footer /></>; }
