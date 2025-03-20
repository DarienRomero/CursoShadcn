import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Page() {
  const items = [
    {
      id: 'item-1',
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
    {
      id: 'item-2',
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
    {
      id: 'item-3',
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
  ]
  return (
    <div>
      <Accordion type="single" collapsible>
        {
          items.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  );
}