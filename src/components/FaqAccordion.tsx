import React, { useState } from "react";
import { FAQS } from "../data/workshopData";

export const FaqAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // default open first item

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 bg-[#faf3e8] border-y border-[#eee7dc]" id="faq">
      <div className="max-w-[900px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Giải đáp thắc mắc
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            CÂU HỎI THƯỜNG GẶP (FAQ)
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Tất cả những băn khoăn phổ biến nhất trước khi bạn quyết định tham gia buổi Zoom.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#eee7dc] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-['Playfair_Display'] text-base md:text-lg font-bold text-[#003931] hover:text-[#2c685d] focus:outline-none transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-[#7c5641] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#003931]" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm md:text-base text-[#404946] leading-relaxed border-t border-[#eee7dc]/60 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="text-center text-xs md:text-sm text-[#404946]">
          Bạn còn câu hỏi khác? Hãy gửi câu hỏi trực tiếp trong form bên dưới hoặc liên hệ Hotline:{" "}
          <strong className="text-[#003931]">0989.234.888</strong> (Zalo 24/7)
        </div>
      </div>
    </section>
  );
};
