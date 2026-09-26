import React from "react";
import { TESTIMONIALS } from "../data/workshopData";

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#faf3e8] border-y border-[#eee7dc]" id="cam-nhan">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Chia sẻ chân thực
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            HỌC VIÊN NÓI GÌ SAU KHI ĐƯỢC ĐỊNH HƯỚNG?
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Những câu chuyện người thật việc thật từ những ai từng đứng trước ngã rẽ chuyển nghề.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 md:p-7 rounded-2xl bg-white border border-[#eee7dc] shadow-sm flex flex-col justify-between gap-5 hover:shadow-md hover:border-[#ffdea6] transition-all"
            >
              <div className="flex flex-col gap-3">
                {/* Rating stars & badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg filled">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#eee7dc] text-[#003931]">
                    {review.badge}
                  </span>
                </div>

                <p className="text-sm text-[#404946] italic leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#f4ede2]">
                <div className="w-11 h-11 rounded-full bg-[#eee7dc] border border-[#ffdea6] flex items-center justify-center font-bold text-sm text-[#003931] shrink-0">
                  {review.avatarText}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['Playfair_Display'] text-sm sm:text-base font-bold text-[#1e1b15] truncate">
                    {review.name}
                  </span>
                  <span className="text-xs text-[#7c5641] truncate">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
