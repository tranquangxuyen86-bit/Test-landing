import React, { useState } from "react";
import { CURRICULUM } from "../data/workshopData";

export const CurriculumTimeline: React.FC = () => {
  const [activePart, setActivePart] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-[#faf3e8] border-y border-[#eee7dc]" id="noi-dung">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Giáo trình 90 phút
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            NỘI DUNG BUỔI HỌC QUA ZOOM
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Thiết kế súc tích, thực tế, giải đáp trực diện mọi góc khuất của nghề dưỡng sinh.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative flex flex-col gap-6 pl-4 md:pl-8 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#e8e2d7]">
          {CURRICULUM.map((part) => {
            const isExpanded = activePart === part.partNumber;

            return (
              <div key={part.partNumber} className="relative pl-6 flex flex-col gap-3">
                {/* Timeline node */}
                <div className="absolute -left-[19px] top-3 w-7 h-7 rounded-full bg-[#003931] text-white flex items-center justify-center font-bold text-xs shadow-md ring-4 ring-[#faf3e8]">
                  {part.partNumber}
                </div>

                {/* Card */}
                <div
                  onClick={() => setActivePart(isExpanded ? null : part.partNumber)}
                  className={`p-6 rounded-2xl bg-white border transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md ${
                    isExpanded ? "border-[#003931] ring-1 ring-[#003931]/20" : "border-[#eee7dc]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase">
                      {part.timeRange}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full bg-[#eee7dc] text-[#003931] text-xs font-semibold">
                        Phần {part.partNumber}
                      </span>
                      <span className="material-symbols-outlined text-[#707976] text-sm">
                        {isExpanded ? "unfold_less" : "unfold_more"}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-[#003931] mb-3">
                    {part.title}
                  </h3>

                  <ul className="flex flex-col gap-2.5 text-[#404946] text-sm md:text-base">
                    {part.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#2c685d] text-base mt-0.5 shrink-0">
                          arrow_right
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded Takeaway highlight */}
                  <div className="mt-4 pt-3 border-t border-[#eee7dc] flex items-center gap-2 text-xs md:text-sm text-[#7c5641] font-medium bg-[#faf3e8] p-2.5 rounded-lg">
                    <span className="material-symbols-outlined text-base text-[#003931]">verified</span>
                    <span>
                      <strong>Kết quả đạt được:</strong> {part.takeaway}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
