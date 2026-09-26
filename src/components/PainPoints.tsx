import React from "react";
import { PAIN_POINTS } from "../data/workshopData";

interface PainPointsProps {
  onOpenRegister: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onOpenRegister }) => {
  return (
    <section className="w-full py-16 bg-[#faf3e8] border-y border-[#eee7dc]" id="loi-ich">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Thấu hiểu trăn trở
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            BẠN CÓ ĐANG BĂN KHOĂN?
          </h2>
          <p className="text-sm md:text-base text-[#404946] leading-relaxed">
            Rất nhiều người đã lãng phí cả chục triệu đồng và hàng tháng trời vì vội vã chọn nghề khi chưa hiểu rõ bản chất công việc.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#eee7dc] shadow-sm flex flex-col gap-4 hover:shadow-md hover:border-[#ffdea6] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f4ede2] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className={`material-symbols-outlined text-2xl ${item.iconColor}`}>
                  {item.icon}
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1e1b15] group-hover:text-[#003931] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#404946] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#eee7dc] border border-[#e8e2d7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-13 h-13 rounded-full bg-[#003931] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-[#003931] font-semibold italic leading-relaxed">
              "Đừng vội đóng học phí khi bạn chưa hiểu rõ nghề mình sắp theo đuổi. Buổi Zoom này giúp bạn hiểu nghề trước – lựa chọn sau – tránh học sai, mất tiền và mất thời gian."
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#003931] text-white font-bold text-xs uppercase tracking-wider shrink-0 hover:bg-[#2c685d] shadow-md transition-all cursor-pointer"
          >
            TÔI MUỐN HIỂU RÕ VỀ NGHỀ
          </button>
        </div>
      </div>
    </section>
  );
};
