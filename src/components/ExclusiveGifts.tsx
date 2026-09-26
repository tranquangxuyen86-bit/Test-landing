import React from "react";
import { GIFTS } from "../data/workshopData";

interface ExclusiveGiftsProps {
  onOpenEbookPreview: () => void;
  onOpenQuiz: () => void;
  onOpenRegister: () => void;
}

export const ExclusiveGifts: React.FC<ExclusiveGiftsProps> = ({
  onOpenEbookPreview,
  onOpenQuiz,
  onOpenRegister,
}) => {
  const handleAction = (id: number) => {
    if (id === 1) onOpenEbookPreview();
    else if (id === 2) onOpenQuiz();
    else onOpenRegister();
  };

  return (
    <section className="w-full py-16 bg-[#fff8ef]" id="qua-tang">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="text-xs md:text-sm font-bold text-[#7c5641] uppercase tracking-widest">
            Đặc quyền học viên
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#003931]">
            QUÀ TẶNG DÀNH CHO NGƯỜI ĐĂNG KÝ HÔM NAY
          </h2>
          <p className="text-sm md:text-base text-[#404946]">
            Bộ tài liệu cẩm nang độc quyền được biên soạn bởi Ban chuyên môn Viện SUTO CARE.
          </p>
        </div>

        {/* 3 Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GIFTS.map((gift) => (
            <div
              key={gift.id}
              className="p-6 md:p-7 rounded-2xl bg-[#faf3e8] border border-[#eee7dc] shadow-sm flex flex-col justify-between gap-5 hover:shadow-md hover:border-[#ffdea6] transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#ffdea6] text-[#271900] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-2xl">
                      {gift.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white text-[#7c5641] border border-[#eee7dc]">
                    {gift.tag}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#003931]">
                  {gift.title}
                </h3>

                <p className="text-sm text-[#404946] leading-relaxed">
                  {gift.description}
                </p>
              </div>

              {gift.actionText && (
                <button
                  onClick={() => handleAction(gift.id)}
                  className="w-full py-2.5 rounded-lg border border-[#003931] text-[#003931] hover:bg-[#003931] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{gift.actionText}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center text-xs md:text-sm text-[#7c5641] font-medium bg-[#eee7dc]/50 py-3 px-4 rounded-xl max-w-2xl mx-auto border border-[#eee7dc]">
          * Tất cả quà tặng sẽ được gửi tự động qua Zalo ngay sau khi bạn hoàn tất đăng ký giữ chỗ.
        </div>
      </div>
    </section>
  );
};
