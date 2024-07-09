import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {

  const items = [
    {
      id: 'item-1',
      title: 'Is it accessible?',
      description: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      id: 'item-2',
      title: 'Is it styled?',
      description: 'Yes. It comes with default styles that matches the other components&apos; aesthetic.',
    },
    {
      id: 'item-3',
      title: 'Is it animated?',
      description: `Yes. It's animated by default, but you can disable it if you prefer.`,
    },
    {
      id: 'item-4',
      title: 'Is it accessible?',
      description: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
  ]

  return (
    <Accordion type="single" className="w-full">
      {
        items.map(item => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}
