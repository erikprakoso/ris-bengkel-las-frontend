import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    const faqs = [
        {
            question: "Apakah survey lokasi dikenakan biaya?",
            answer: "Tidak, kami memberikan layanan survey dan konsultasi GRATIS untuk wilayah dalam kota. Silakan hubungi kami untuk menjadwalkan kunjungan."
        },
        {
            question: "Berapa lama proses pengerjaannya?",
            answer: "Waktu pengerjaan tergantung volume dan kerumitan desain. Untuk kanopi standar biasanya 3-5 hari, sedangkan pagar bisa 1-2 minggu."
        },
        {
            question: "Apakah ada garansi jika las lepas?",
            answer: "Tentu saja. Kami memberikan garansi konstruksi las selama 1 tahun penuh. Jika ada kerusakan pada sambungan las, kami perbaiki gratis."
        }
    ];

    return (
        <div className="flex flex-col gap-8 flex-1" data-aos="fade-left">
            <h2 className="text-slate-900 text-2xl font-bold">Pertanyaan Umum</h2>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-surface rounded-lg px-4 border-none data-[state=open]:bg-slate-200 transition-colors">
                        <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-primary text-left">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
