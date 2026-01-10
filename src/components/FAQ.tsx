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
            question: "Berapa lama estimasi pengerjaan pagar?",
            answer: "Untuk pagar minimalis standar panjang 5-10 meter, biasanya memakan waktu 7-14 hari kerja termasuk pemasangan. Tergantung juga antrian produksi."
        },
        {
            question: "Apakah melayani area di luar kota?",
            answer: "Ya, kami melayani Jabodetabek & sekitarnya. Untuk luar kota mungkin ada penyesuaian biaya transport, silakan konsultasikan dulu."
        },
        {
            question: "Apakah ada garansi jika las lepas?",
            answer: "Tentu saja. Kami memberikan garansi konstruksi las selama 1 tahun penuh. Jika ada kerusakan pada sambungan las, kami perbaiki gratis."
        }
    ];

    return (
        <div className="flex flex-col gap-8 flex-1" data-aos="fade-left">
            <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                    <span className="h-1 w-10 bg-primary"></span>
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
                        FAQ
                    </h2>
                </div>
                <h2 className="text-white text-3xl font-heading font-black">Pertanyaan Umum</h2>
            </div>

            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-charcoal-light rounded-none border border-white/10 data-[state=open]:border-primary transition-colors px-0 py-0">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-primary text-left px-6 py-4 font-bold">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400 px-6 pb-4 pt-0 leading-relaxed border-t border-white/5 mt-2">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
