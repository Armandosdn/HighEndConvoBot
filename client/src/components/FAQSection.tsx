import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Tampa and surrounding areas including St. Petersburg, Clearwater, Brandon, and Plant City. Contact us to confirm service availability in your specific location.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No! We bring all necessary cleaning supplies and equipment. If you have specific products you'd like us to use, we're happy to accommodate your preferences.",
    },
    {
      question: "How do I prepare for my cleaning appointment?",
      answer:
        "Simply pick up any personal items and clutter so our team can focus on cleaning. Secure any pets and provide access to your home. We'll take care of the rest!",
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer:
        "Your satisfaction is our priority. If you're not completely happy with our service, contact us within 24 hours and we'll return to address any concerns at no extra charge.",
    },
    {
      question: "Are your cleaners insured and background-checked?",
      answer:
        "Absolutely! All our cleaning professionals are fully insured, bonded, and undergo thorough background checks. We also provide ongoing training to ensure the highest quality service.",
    },
    {
      question: "Can I schedule recurring cleanings?",
      answer:
        "Yes! We offer flexible recurring schedules including weekly, bi-weekly, and monthly options. Regular customers also receive priority scheduling and special rates.",
    },
    {
      question: "Do you offer eco-friendly cleaning options?",
      answer:
        "Yes, we use eco-friendly, non-toxic cleaning products upon request at no additional charge. These products are safe for children, pets, and the environment.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 48 hours in advance, but we often accommodate same-day or next-day requests based on availability. Contact us and we'll do our best to fit you in!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-md px-6 bg-card"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
