import React from "react";
import { OUTCOMES } from "../data/workshopData";

export const Outcomes: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#fff8ef]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Giá trị thực tế
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            SAU 90 PHÚT, BẠN SẼ NHẬN ĐƯỢC GÌ?
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Trọn vẹn bức tranh nghề dưỡng sinh Đông Y chân thực và khách quan nhất.
          </p>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OUTCOMES.map((item) => (
            <div
              key={item.number}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#eee7dc] shadow-sm flex items-start gap-5 hover:shadow-md hover:border-[#ffdea6] transition-all group"
            >
              <span className="font-['Playfair_Display'] text-3xl md:text-4xl font-extrabold text-[#5f4302] opacity-80 shrink-0 group-hover:scale-110 transition-transform">
                {item.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-bold text-[#003931] tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#404946] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
