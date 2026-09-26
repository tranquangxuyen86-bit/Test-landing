import React from "react";
import { WHO_SHOULD_ATTEND } from "../data/workshopData";

interface WhoShouldAttendProps {
  onOpenQuiz: () => void;
}

export const WhoShouldAttend: React.FC<WhoShouldAttendProps> = ({ onOpenQuiz }) => {
  return (
    <section className="w-full py-16 bg-[#fff8ef]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Đối tượng phù hợp
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            BUỔI HỌC NÀY DÀNH CHO AI?
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Chỉ cần bạn có mong muốn tìm kiếm một công việc nhân văn, thu nhập ổn định và tự chủ.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_SHOULD_ATTEND.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#faf3e8] border border-[#eee7dc] shadow-sm flex flex-col gap-3.5 hover:shadow-md hover:border-[#ffdea6] transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#eee7dc] flex items-center justify-center text-[#003931] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white text-[#7c5641] border border-[#eee7dc]">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#003931]">
                {item.title}
              </h3>

              <p className="text-sm text-[#404946] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Banner with Quiz CTA */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#ffdea6]/35 border border-[#e9c177]/60 text-[#271900] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="material-symbols-outlined text-2xl text-[#003931] shrink-0">
              verified
            </span>
            <span className="text-sm sm:text-base font-semibold">
              Bạn hoàn toàn không cần có kiến thức hay kinh nghiệm từ trước để tham gia buổi định hướng này.
            </span>
          </div>

          <button
            onClick={onOpenQuiz}
            className="px-4 py-2 rounded-lg bg-[#003931] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2c685d] transition-colors shrink-0 shadow cursor-pointer"
          >
            Làm test trắc nghiệm 1 phút
          </button>
        </div>
      </div>
    </section>
  );
};
